import type { Project } from "../types";

export const aw3Host: Project = {
    slug: "aw3-host",
    ownership: "own",
    title: "AW3 Host",
    category: "Cloud Infrastructure",
    summary:
      "Designed and built the entire AW3 Host platform — an AI-native, multi-cloud deployment control plane that deploys, monitors, and optimizes services across 20+ cloud providers from a single dashboard, with no vendor lock-in.",
    role: "Founder & Lead Engineer",
    year: "2026",
    tags: ["Cloud Infrastructure", "DevOps", "AI", "Multi-Cloud", "TypeScript"],
    metrics: [
      "20+ cloud platforms, one dashboard",
      "AI-powered cost optimization (Claude)",
      "99.99% uptime SLA",
    ],
    image: "/projects/aw3-host.png",
    tagline: "One platform. Every cloud provider.",
    gradient: "from-sky-500 via-cyan-400/60 to-bg",
    problem:
      "Modern teams run across a sprawl of cloud providers — AWS, GCP, Azure, Vercel, Cloudflare, Fly.io, Kubernetes, GPU clouds — each with its own dashboard, billing, secrets, and deploy mechanics. The result is vendor lock-in, runaway spend, no unified view of health or cost, and no easy way to route each workload to the platform that actually fits it.",
    process:
      "I built AW3 Host end-to-end as a multi-cloud control plane: a unified deployment, routing, secrets, monitoring, and cost layer over 20+ providers, with a Claude-powered assistant for diagnosis and natural-language deploys. The stack spans a TypeScript SDK, full CLI, and REST API, with SSE log streaming, policy gates, and GitOps reconciliation.",
    solution:
      "A single dashboard to deploy anywhere and optimize everything — AI cost optimization, performance-based traffic orchestration, automatic failover, encrypted secrets, geo-routing, and a policy engine — plus deep capabilities for FinOps, compliance, runtime security, and LLM/GPU hosting.",
    outcome:
      "AW3 Host is live in public beta as the hosting arm of AW3 Technology (aw3.host). It integrates 20+ platforms, offers four deploy strategies and six routing modes, and ships a free Starter tier, a $29/mo Pro plan, and custom Enterprise contracts with a 99.99% uptime SLA and SOC 2 readiness.",
    meta: [
      { label: "Role", value: "Founder & Lead Engineer" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Live · Public Beta" },
      { label: "Stack", value: ["TypeScript", "Next.js", "Node.js", "CLI", "REST API", "Claude"] },
      { label: "Link", value: "aw3.host" },
    ],
    emphasisKeywords: ["AW3 Host", "AW3", "multi-cloud", "AI-native", "Claude", "control plane", "cloud"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Deploy anywhere. Optimize everything.",
          blocks: [
            {
              type: "paragraph",
              text: "AW3 Host is a multi-cloud deployment control plane. Deploy, monitor, and manage services across 20+ cloud platforms from a single dashboard — without vendor lock-in. Tell AW3 what matters most (speed, cost, or specific capabilities) and its AI automatically deploys and routes your apps to the optimal platforms.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "AI-native hosting orchestration",
              text: "One platform. Every cloud provider.",
            },
            {
              type: "image",
              label: "AW3 Host console — multi-cloud deployment at a glance",
              src: "/projects/aw3-host-dashboard.png",
              alt: "AW3 Host dashboard showing platform health, organizations, projects, and services",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "timeline",
          heading: "How it works",
          steps: [
            {
              title: "Connect",
              body: "Link all your hosting platforms — AWS, GCP, Azure, Vercel, Cloudflare, Fly.io, Kubernetes, GPU clouds and more — into one control plane.",
            },
            {
              title: "Set what matters",
              body: "Tell AW3 whether to optimize for performance, cost, or capability. Define policies: region-lock, budget caps, deploy windows, approval gates.",
            },
            {
              title: "Deploy & route",
              body: "Ship with Standard, Blue/Green, or Canary strategies — or just say 'deploy my API to production on AWS.' Traffic is routed to the best target in real time.",
            },
            {
              title: "Monitor & optimize",
              body: "Watch real-time health maps and p50/p95/p99 latency, sync daily cost from every provider, and apply Claude's savings recommendations with one click.",
            },
          ],
        },
        {
          type: "split",
          heading: "Features",
          content: [
            {
              type: "paragraph",
              text: "A unified layer over the entire cloud landscape — built so each workload runs on the platform that fits it best, with security and observability that span every provider.",
            },
            {
              type: "list",
              items: [
                "AI-powered cost optimization — Claude analyzes cross-provider cost and performance to surface cheaper alternatives and idle resources; apply or dismiss each in one click.",
                "Performance orchestration — auto-route traffic to the fastest platform by location, latency, and load, with p50/p95/p99 monitoring per service.",
                "Automatic failover — health checks every 60s; traffic reroutes to healthy alternatives when a platform degrades.",
                "Smart geo-routing — send users to the nearest, fastest platform with real-time best-target resolution.",
                "Unified security — AES-256-GCM encrypted secrets, environment-scoped stores, MFA, SSO/SAML 2.0, and SCIM provisioning.",
                "CLI, SDK & API — full CLI, TypeScript SDK, and REST API, including natural-language deploys via 'aw3 intent'.",
                "Policy engine — region-lock, provider-whitelist, budget-cap, deploy-window, approval-required, test-coverage, and vulnerability-scan policies.",
              ],
            },
            {
              type: "image",
              label: "AI Deployment Agent — suggested actions across security, reliability, and cost",
              src: "/projects/aw3-host-agent.png",
              alt: "AW3 Host AI Deployment Agent surfacing suggested actions",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Deployment & traffic",
            },
            {
              type: "list",
              items: [
                "Strategies — Standard, Blue/Green with promote, Canary (5%→100% ramp), instant rollback.",
                "Lifecycle — exponential-backoff retry, live SSE log streaming, secret diff before deploy, approval gates with comments.",
                "Routing modes — Weighted, Blue/Green, Canary ramp, Geo, Failover, and Smart Resolve.",
              ],
            },
            {
              type: "image",
              label: "AW3 Assistant — natural-language infrastructure co-pilot",
              src: "/projects/aw3-host-assistant.png",
              alt: "AW3 Assistant chat co-pilot for deploying and investigating services",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "Everything you need to run at scale",
          blocks: [
            {
              type: "list",
              items: [
                "Cost management — daily cost sync from all providers, drill-down by provider/service/environment/region, multi-threshold budget alerts via Slack and PagerDuty.",
                "Health checks & monitoring — HTTP, TCP, and synthetic probes; real-time health maps, uptime history, and latency metrics.",
                "AI assistant & NLP deploys — in-dashboard Claude chat to diagnose deployments, explore the platform, or deploy in natural language.",
                "Access control & teams — Owner/Admin/Member/Viewer roles, MFA, SSO/SAML/OIDC, SCIM, permission matrix, and break-glass access with full audit trail.",
                "Compliance & audit — full audit logging with CSV export, SOC 2 readiness, CIS benchmarks, per-deployment SBOM with vulnerability scanning, data residency, and GDPR support.",
                "Secrets management — environment-scoped stores with AES-256-GCM at rest, in-memory decryption at deploy time, and keys diffed before deployment.",
                "LLM & AI hosting — GPU-backed inference on CoreWeave, RunPod, and Modal with VRAM estimation, A/B endpoints, batch inference, and a HuggingFace model registry.",
                "DORA metrics & GitOps — deployment frequency, lead time, change-failure rate, MTTR; commit-driven reconciliation, drift detection, and Terraform export.",
                "FinOps & spot fleets — spot/preemptible fleet management with interruption handling, egress-aware cost arbitrage, and carbon-aware scheduling.",
                "Runtime security — eBPF runtime protection with Falco-compatible rules, ML anomaly detection, FIPS 140-2 mode, BYOK/KMS, and SigStore/Cosign signing.",
              ],
            },
            {
              type: "callout",
              tone: "metric",
              label: "Built for multi-cloud reality",
              text: "20+ platforms · 4 deploy strategies · 6 routing modes",
            },
            {
              type: "image",
              label: "Service Dependencies — visualize and manage service relationships across the fleet",
              src: "/projects/aw3-host-dependencies.png",
              alt: "AW3 Host service dependency graph across services",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "20+ cloud platforms",
          blocks: [
            {
              type: "paragraph",
              text: "Connect all your hosting platforms and let AW3 choose the best one for each workload based on performance, pricing, and capabilities.",
            },
            {
              type: "list",
              items: [
                "Cloud — AWS, Google Cloud, Azure, DigitalOcean, Kubernetes, Hetzner, Linode.",
                "Frontend & edge — Vercel, Netlify, Cloudflare, Fly.io.",
                "Full stack & backend — Railway, Render, Supabase.",
                "GPU — CoreWeave (A100/H100), RunPod, Modal.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Pricing",
          blocks: [
            {
              type: "paragraph",
              text: "Start free and scale as you grow — no hidden fees. 1 credit = 1 compute action; credit packs never expire and Pro credits roll over.",
            },
            {
              type: "heading",
              level: 3,
              text: "Starter — Free forever",
            },
            {
              type: "list",
              items: [
                "500 credits included",
                "3 connected platforms · 5 projects",
                "Community support · basic analytics · 7-day log retention",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Pro — $29/mo",
            },
            {
              type: "list",
              items: [
                "10,000 credits/month, unused credits roll over",
                "Unlimited platforms & projects",
                "Priority support · advanced analytics · 30-day log retention",
                "Custom domains · team collaboration (5 seats)",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Enterprise — Custom",
            },
            {
              type: "list",
              items: [
                "Unlimited credits & team seats",
                "99.99% uptime SLA · dedicated support · 90-day log retention",
                "SSO / SAML · custom contracts · SOC 2 compliant",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "FAQs",
          blocks: [
            {
              type: "heading",
              level: 3,
              text: "What are credits used for?",
            },
            {
              type: "paragraph",
              text: "Credits are consumed based on hosting usage — deployments, bandwidth, and compute time. Different actions consume different amounts; 1 credit equals 1 compute action.",
            },
            {
              type: "heading",
              level: 3,
              text: "Do unused credits expire?",
            },
            {
              type: "paragraph",
              text: "On Pro, unused credits roll over to the next month. Free-tier credits reset monthly. Purchased credit packs never expire.",
            },
            {
              type: "heading",
              level: 3,
              text: "What happens if I run out of credits?",
            },
            {
              type: "paragraph",
              text: "We notify you when you're running low, and you can buy a credit pack or upgrade anytime. Live deployments are never terminated for a low balance.",
            },
          ],
        },
      ],
    },
};
