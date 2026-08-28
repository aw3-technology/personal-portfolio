/**
 * Lightweight client-side diagnostics.
 *
 * Two rules drive the design:
 *
 * 1. Failures are ALWAYS logged, in production too. The WebGL regression that
 *    prompted this module was invisible because its only log was gated behind
 *    NODE_ENV === "development", so the background silently vanished for real
 *    visitors while the console stayed clean.
 * 2. Everything else is opt-in, so a normal visitor's console stays quiet.
 *    Enable verbose output with `?debug=1`, or `localStorage.debug = "1"` to
 *    keep it on across navigations.
 *
 * For remote reports, ask the person to run `__diagnostics()` in their console
 * and paste the result — it captures the GPU and environment details needed to
 * tell "no WebGL" apart from "software rendering", which look identical from
 * the outside but have very different fixes.
 */

const PREFIX = "[portfolio]";

function debugEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (new URLSearchParams(window.location.search).get("debug") === "1") return true;
    return window.localStorage.getItem("debug") === "1";
  } catch {
    // Storage can throw in private mode or when cookies are blocked.
    return false;
  }
}

/**
 * `debug` and `info` are opt-in; `warn` and `error` always reach the console so
 * a broken feature announces itself in production.
 */
export const log = {
  debug(...args: unknown[]) {
    if (debugEnabled()) console.debug(PREFIX, ...args);
  },
  info(...args: unknown[]) {
    if (debugEnabled()) console.info(PREFIX, ...args);
  },
  warn(...args: unknown[]) {
    console.warn(PREFIX, ...args);
  },
  error(...args: unknown[]) {
    console.error(PREFIX, ...args);
  },
};

export type WebGLReport = {
  /** Whether three.js can actually render — it requests webgl2 with no fallback. */
  supported: boolean;
  /** Why not, when unsupported. */
  reason?: string;
  webgl2: boolean;
  /** Present but unusable by three.js. Worth distinguishing in a bug report. */
  webgl1: boolean;
  vendor?: string;
  renderer?: string;
  /**
   * True when the GPU is emulated (SwiftShader, llvmpipe, Microsoft Basic
   * Render). WebGL works, but everything renders on the CPU — this is the
   * signature of "it shows up but it's janky" rather than "it's missing".
   */
  software: boolean;
};

const SOFTWARE_RENDERERS = /swiftshader|llvmpipe|basic render|software|mesa offscreen/i;

let cached: WebGLReport | undefined;

/**
 * Probes once per page load and caches. Each call would otherwise cost a real
 * WebGL context, and browsers cap how many a page may hold (~16 in Chrome),
 * dropping the oldest — which can be a live canvas.
 *
 * Deliberately does not call WEBGL_lose_context.loseContext(): forcing a loss
 * here can make the browser refuse the renderer's own context request moments
 * later.
 */
export function getWebGLReport(): WebGLReport {
  if (cached) return cached;

  if (typeof window === "undefined") {
    return { supported: false, reason: "server", webgl2: false, webgl1: false, software: false };
  }

  let report: WebGLReport;

  try {
    // A separate canvas per context type: once a canvas has a failed context
    // request, requesting a different type on it can return null regardless of
    // what the machine actually supports.
    const gl = document.createElement("canvas").getContext("webgl2");
    const webgl1 = !!document.createElement("canvas").getContext("webgl");

    if (!gl) {
      report = {
        supported: false,
        reason: webgl1
          ? "webgl2 unavailable (webgl1 present, but three.js r182 requires webgl2)"
          : "no webgl context — hardware acceleration disabled, GPU blocklisted, or sandboxed",
        webgl2: false,
        webgl1,
        software: false,
      };
    } else {
      const info = gl.getExtension("WEBGL_debug_renderer_info");
      const vendor = info
        ? String(gl.getParameter(info.UNMASKED_VENDOR_WEBGL))
        : String(gl.getParameter(gl.VENDOR));
      const renderer = info
        ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL))
        : String(gl.getParameter(gl.RENDERER));

      report = {
        supported: true,
        webgl2: true,
        webgl1,
        vendor,
        renderer,
        software: SOFTWARE_RENDERERS.test(renderer),
      };
    }
  } catch (error) {
    report = {
      supported: false,
      reason: `probe threw: ${String(error)}`,
      webgl2: false,
      webgl1: false,
      software: false,
    };
  }

  cached = report;

  if (!report.supported) {
    log.warn("WebGL unavailable, 3D backgrounds disabled:", report.reason);
  } else if (report.software) {
    log.warn(
      `WebGL is software-rendered (${report.renderer}). 3D backgrounds will be slow.`
    );
  } else {
    log.info("WebGL ready:", report.renderer);
  }

  return report;
}

/** Environment details worth having in any bug report. */
function environment() {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return {
    userAgent: nav.userAgent,
    devicePixelRatio: window.devicePixelRatio,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    hardwareConcurrency: nav.hardwareConcurrency,
    deviceMemory: nav.deviceMemory,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    liveCanvases: document.querySelectorAll("canvas").length,
  };
}

/**
 * Exposes `__diagnostics()` on window so anyone hitting a visual bug can run it
 * and paste the output back, without needing a debug build.
 */
export function installDiagnostics() {
  if (typeof window === "undefined") return;

  const w = window as typeof window & { __diagnostics?: () => unknown };
  if (w.__diagnostics) return;

  w.__diagnostics = () => {
    const report = { webgl: getWebGLReport(), environment: environment() };
    // console.log directly: this is the user explicitly asking for output, so
    // it should print regardless of the debug flag.
    console.log(`${PREFIX} diagnostics`, report);
    return report;
  };

  log.info("diagnostics ready — run __diagnostics() for a full report");
}
