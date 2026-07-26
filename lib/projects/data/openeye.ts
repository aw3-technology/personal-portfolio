import type { Project } from "../types";

export const openeye: Project = {
    slug: "openeye",
    ownership: "own",
    title: "OpenEye",
    category: "Open Source",
    summary:
      "Open-source, CLI-first perception engine that turns raw video into structured world models for robots and autonomous agents — like Ollama, but for vision AI.",
    role: "Creator & Lead Engineer",
    year: "2026",
    tags: ["Open Source", "AI", "Computer Vision", "Robotics", "Python"],
    metrics: [
      "Safety-first: human detection with a sub-50ms robot halt",
      "Model-agnostic: 8 vision models, one CLI",
      "Self-hosted — all inference runs locally, data never leaves your network",
    ],
    image: "/projects/openeye.png",
    caseStudyImage: "/projects/openeye-hero.png",
    tagline: "Open-source eyes for the agent era",
    gradient: "from-rose-500 via-sky-400/60 to-bg",
    problem:
      "Robots and autonomous agents need real-time perception — detection, depth, segmentation, scene understanding — but stitching together YOLO, SAM, Depth Anything, and VLMs into a production-grade pipeline is fragmented, brittle, and gated behind heavyweight ML tooling. And as robots enter homes and workplaces, there was no open visual safety layer watching the workspace. There was no Ollama-style developer experience for vision AI.",
    process:
      "Designed OpenEye as a CLI-first perception engine with a single mental model: pull a model, run inference, serve it. Built the runtime in Python on FastAPI/Typer/Pydantic, made it model-agnostic across 8 integrated models — YOLOv8, YOLO26, RF-DETR, Grounding DINO, SAM 2, Depth Anything, SmolVLA, and Qwen2.5-VL — with ONNX/TensorRT runtimes, and shipped a React/TypeScript dashboard with live streams, fleet management, MLOps, and governance. Built at the Nebius.Build SF: OpenClaw + Robotics Hackathon in 2026.",
    solution:
      "A unified open-source toolkit: `openeye pull`, `run`, `serve`, `watch`, `agent`, `fleet`, `mlops`, and `govern` — built around a six-layer pipeline (camera feed → vision → scene understanding → LLM reasoning → action planning → robot execution). A Safety Guardian layer pairs a fast geometric layer (YOLO every frame) with a periodic VLM smart layer and a halt protocol that freezes the robot in under 50ms when a human enters the danger zone. REST + WebSocket APIs, agentic perception loops, browser dashboard, and Unitree G1 robot integration, all from one CLI.",
    outcome:
      "Released publicly under aw3-technology on GitHub (v0.2.0, Apache 2.0) with an interactive demo, MkDocs documentation, and pipx-installable distribution (`pipx install openeye-sh`). Fully self-hosted — every frame is processed locally, so camera data never leaves the network. Positioned as the open-source perception layer for the agent era — designed to slot into any robotics, desktop-agent, or autonomous-agent stack with one command.",
    meta: [
      { label: "Role", value: "Creator & Lead Engineer" },
      { label: "Stack", value: ["Python", "FastAPI", "Typer", "React", "TypeScript", "ONNX", "TensorRT"] },
      { label: "Year", value: "2026" },
      { label: "Scope", value: ["CLI", "Inference Server", "Web Dashboard", "Fleet & MLOps"] },
      { label: "License", value: "Apache 2.0" },
      { label: "Repo", value: "github.com/aw3-technology/openeye.sh" },
    ],
    emphasisKeywords: ["OpenEye", "open-source", "perception", "vision AI", "Ollama", "agentic", "robots", "safety"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "An open-source perception engine",
          blocks: [
            {
              type: "paragraph",
              text: "OpenEye turns raw video into structured world models — the perception layer robots and autonomous agents need to see, understand, and act. It's model-agnostic, self-hosted, and driven entirely from the command line: pull a model, run inference, serve it. Think Ollama, but for vision AI.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Safety-first",
              text: "Human detection with a sub-50ms robot halt",
            },
          ],
        },
        {
          type: "timeline",
          heading: "Six layers, one pipeline",
          steps: [
            {
              title: "Camera Feed",
              body: "Hardware-agnostic ingestion from USB cameras, RTSP streams, video files, or simulated feeds.",
            },
            {
              title: "Vision Engine",
              body: "YOLO26, Grounding DINO, SAM 2, and RF-DETR detect, segment, and localize every object in frame.",
            },
            {
              title: "Scene Understanding",
              body: "Objects, a spatial map, and flagged hazards assembled into a structured scene graph.",
            },
            {
              title: "LLM Reasoning",
              body: "A VLM — Qwen2.5-VL via OpenRouter or the Nebius Token Factory — interprets context: what changed, what's unsafe, what to do.",
            },
            {
              title: "Action Planner",
              body: "Structured task decomposition turns intent into executable robot actions.",
            },
            {
              title: "Robot Adapter",
              body: "Plans dispatched to the connected controller — Unitree G1, SmolVLA, or simulation.",
            },
          ],
        },
        {
          type: "split",
          heading: "The safety guardian",
          content: [
            {
              type: "paragraph",
              text: "As robots enter homes and workplaces, OpenEye acts as a visual safety layer — monitoring any robot's workspace in real time and intervening before accidents happen.",
            },
            {
              type: "list",
              items: [
                "Fast layer — YOLO runs every frame for pure-geometry checks: is a hand inside the danger zone? A low-latency halt with no LLM overhead.",
                "Smart layer — a VLM analyzes periodically to catch what geometry can't: a knife that wasn't there before, an unstable stack, context-dependent risk.",
                "Halt protocol — on danger, OpenEye freezes the connected robot and resumes only once the workspace is confirmed clear.",
              ],
            },
          ],
          media: [
            {
              type: "callout",
              tone: "metric",
              label: "Detect → halt",
              text: "Under 100ms, end to end",
            },
            {
              type: "image",
              label: "Safety Guardian dashboard — live status, scene graph, and VLM reasoning",
              src: "/projects/openeye-dashboard.png",
              alt: "OpenEye Safety Guardian dashboard showing safety status, live log, scene graph, and action plan",
              aspect: "3/2",
            },
          ],
        },
        {
          type: "stack",
          heading: "Model-agnostic by design",
          blocks: [
            {
              type: "paragraph",
              text: "Swap models, combine pipelines, and extend with custom adapters. Eight models ship integrated out of the box — spanning real-time detection, segmentation, depth, and vision-language reasoning — all behind one unified API with ONNX and TensorRT runtimes.",
            },
            {
              type: "list",
              items: [
                "YOLOv8 & YOLO26 — real-time object detection across 80 COCO classes (Ultralytics).",
                "RF-DETR — an end-to-end detection transformer with no NMS (Roboflow).",
                "Grounding DINO — open-set detection driven by text prompts (IDEA Research).",
                "SAM 2 — zero-shot segment-anything for any object in any image (Meta AI).",
                "Depth Anything — monocular depth estimation at any resolution.",
                "SmolVLA — a compact vision-language-action model for robot control.",
                "Qwen2.5-VL — multimodal reasoning with native visual grounding (Alibaba Qwen).",
              ],
            },
            {
              type: "image",
              label: "Model Registry — browse, benchmark, and manage adapters",
              src: "/projects/openeye-registry.png",
              alt: "OpenEye model registry listing integrated and planned vision models with creators, categories, and adapters",
              aspect: "3/2",
            },
          ],
        },
        {
          type: "stack",
          heading: "A plug-and-play CLI",
          blocks: [
            {
              type: "paragraph",
              text: "Every capability is one command away — like ffmpeg for machine perception.",
            },
            {
              type: "list",
              items: [
                "openeye run — inference on any image with any model, unified JSON out.",
                "openeye watch — a live feed with real-time detection, safety zones, and hazard alerts.",
                "openeye serve — a FastAPI server with REST endpoints, WebSocket streams, and a browser dashboard.",
                "openeye agent — an agentic perceive-reason-act loop with observation memory and VLM reasoning.",
                "openeye fleet — register, monitor, and deploy to edge devices with canary rollouts and OTA updates.",
                "openeye mlops & govern — A/B testing, automated retraining, audit trails, and policy enforcement.",
              ],
            },
            {
              type: "image",
              label: "Agentic Loop — YOLO every frame (<100ms), VLM reasoning every 3s, synthesized into a plan",
              src: "/projects/openeye-agentic-loop.png",
              alt: "OpenEye agentic loop view describing the continuous perception, reasoning, and action cycle",
              aspect: "3/2",
            },
          ],
        },
        {
          type: "split",
          flip: true,
          heading: "Built for the physical world",
          content: [
            {
              type: "paragraph",
              text: "From robot safety to desktop automation, OpenEye gives machines structured visual understanding of the world in front of them.",
            },
            {
              type: "list",
              items: [
                "Robotics — safety-zone enforcement, human-robot coexistence, hazard identification, and scene graphs for planning.",
                "Application debugging — visual regression detection, layout validation, and VLM-powered UI analysis in CI/CD.",
                "Desktop agents — UI element detection and multi-window screen understanding as the eyes of computer-use agents.",
              ],
            },
          ],
          media: [
            {
              type: "image",
              label: "OpenEye",
              src: "/projects/openeye.png",
              alt: "OpenEye logo",
              aspect: "4/3",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Self-hosted",
              text: "All inference runs locally",
            },
          ],
        },
        {
          type: "stack",
          heading: "Open infrastructure, open models",
          blocks: [
            {
              type: "paragraph",
              text: "Your cameras, your hardware, your data. Every frame is processed on-device or on-prem, so camera feeds never leave the network — deploy on laptops, edge devices, or air-gapped servers. Released publicly under aw3-technology on GitHub (v0.2.0, Apache 2.0), pipx-installable, with an interactive demo and MkDocs documentation. Built at the Nebius.Build SF: OpenClaw + Robotics Hackathon in 2026.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Get started",
              text: "pipx install openeye-sh",
            },
          ],
        },
      ],
    },
};
