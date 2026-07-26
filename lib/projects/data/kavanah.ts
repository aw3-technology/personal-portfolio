import type { Project } from "../types";

export const kavanah: Project = {
    slug: "kavanah",
    ownership: "own",
    title: "Kavanah",
    category: "AI Product",
    summary:
      "Designed and built Kavanah from scratch — an AI-native project management platform where agents plan sprints, draft PRs, triage incidents, and brief clients. One workspace for projects, delivery, and client work, with web, desktop, and mobile apps kept in sync. Now in private beta, onboarding its first users.",
    role: "Founder & Lead Engineer",
    year: "2026",
    tags: ["AI", "Project Management", "SaaS", "Next.js", "TypeScript"],
    metrics: [
      "Built end-to-end — web, desktop & mobile, in sync",
      "AI agent wired into every feature — 800+ tools, 20+ integrations",
      "Private beta — onboarding first users",
    ],
    image: "/projects/kavanah.png",
    caseStudyImage: "/projects/kavanah-hero.png",
    tagline: "AI-native project management — from idea to shipped",
    gradient: "from-amber-500 via-stone-400/50 to-bg",
    problem:
      "AI gave every team member 10x delivery capacity — but project management tools never caught up. Individual contributors got dramatically faster while teams still ran projects through disconnected tools, status meetings, and spreadsheets that barely talk to each other. Only 31% of projects finish on time, on budget, and on scope. PMs lose hours to the gaps between five apps that almost — but don't quite — talk to each other. The work got faster; the way we manage it didn't.",
    process:
      "I designed and built Kavanah end-to-end — an AI-native project management platform with autonomous agents at the core, not bolted on. One workspace unifies boards, timelines, dev integrations, time tracking, and a branded client portal. I built the full stack across web, a desktop application, and an iOS app, all kept in sync, and wired AI agents through every surface — from sprint planning to PR drafting to client status updates.",
    solution:
      "Kavanah's agents plan sprints from the backlog, draft PRs from ai-eligible tasks, route Sentry and Datadog alerts to code owners, and brief clients automatically. Mark a task ai-eligible and the AI Engineer drafts the PR; drop in a markdown spec and Spec→Tasks turns it into a sequenced plan. Teams can hire scoped 'AI Employees' — named agents with their own permissions and integrations — and assign them work like real teammates. The agent reaches every corner of the product through 800+ tools and 20+ integrations, with persistent memory, runbooks, goal tracking, and a governance layer that decides what it may do on its own. Every commit, PR, deploy, and incident threads back to the task it came from.",
    outcome:
      "Kavanah is built and live at kavanah.ai, now in private beta and onboarding its first users. The product spans six core surfaces — task management, dev integration, AI automations, AI Employees, time tracking, and a client portal — across web, desktop, and mobile, with flat per-seat pricing from $3/seat and AI metered as credits so teams only pay for the agent runs they actually use.",
    meta: [
      { label: "Role", value: "Founder & Lead Engineer" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Live · Private Beta" },
      { label: "Platform", value: ["Web", "Desktop", "iOS"] },
      { label: "Stack", value: ["Next.js", "TypeScript", "PostgreSQL", "Tauri", "AI Agents"] },
      { label: "Link", value: "kavanah.ai" },
    ],
    emphasisKeywords: [
      "Kavanah",
      "AI-native",
      "AI Engineer",
      "AI Employees",
      "Cursor for project management",
      "Spec → Tasks",
      "agents",
      "one workspace",
    ],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "The operating system for AI-powered organizations",
          blocks: [
            {
              type: "paragraph",
              text: "Kavanah is an AI-native project management platform built from the ground up with agents at the core — not bolted on. It unifies projects, delivery, and client work in one workspace: agents plan sprints, draft PRs, triage incidents, and brief clients, taking a team from idea to shipped. I designed and built the entire product, across web, desktop, and mobile.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Projects · Delivery · Client Work — one workspace",
              text: "AI-native project management, from idea to shipped",
            },
            {
              type: "callout",
              tone: "quote",
              text: "We need Cursor for project management. — the gap Kavanah was built to close",
            },
            {
              type: "image",
              label: "Kavanah — web, desktop & mobile, in sync",
              src: "/projects/kavanah-hero.png",
              alt: "Kavanah dashboard on desktop and mobile showing time tracker, productivity, completed tasks, and AI agent insights",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "split",
          heading: "Kavanah at a glance",
          content: [
            {
              type: "paragraph",
              text: "The one-pager — the whole story on a single page: the problem, the AI-native workspace that closes it, the six core surfaces, and how it's priced. It's the fastest way to see what Kavanah is and who it's for.",
            },
            {
              type: "list",
              items: [
                "The gap: AI 10x'd delivery, but management tools never caught up.",
                "The product: one AI-native workspace for projects, delivery, and client work.",
                "Six surfaces: tasks, dev integration, AI automations, AI Employees, time tracking, and a client portal.",
                "Pricing: flat per-seat from $3, with AI metered as credits.",
              ],
            },
          ],
          media: [
            {
              type: "image",
              label: "Kavanah one-pager",
              src: "/projects/kavanah-onepager.png",
              alt: "Kavanah one-page overview covering the problem, the AI-native workspace, core surfaces, and pricing",
              aspect: "3/4",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "Why I built it",
          blocks: [
            {
              type: "paragraph",
              text: "AI gave every team member 10x delivery capacity — but management tools never evolved to match. Individual contributors got dramatically faster while teams still ran projects through disconnected tools, status meetings, and spreadsheets. Only 31% of projects finish on time, on budget, and on scope. Kavanah closes that gap by making project management one AI-native workspace, not a stack of tools glued together.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "The problem, in one number",
              text: "Only 31% of projects finish on time, on budget, and on scope",
            },
          ],
        },
        {
          type: "timeline",
          heading: "From idea to shipped",
          steps: [
            {
              title: "Spin up your workspace",
              body: "Create a project, invite your team, and link GitHub, Vercel, Sentry, and the tools you already use — Kavanah's agents start learning your workflow immediately.",
            },
            {
              title: "AI plans your sprint",
              body: "Agents analyze the backlog, break down epics, and draft a sprint plan for your review. Drop in a markdown spec and Spec→Tasks turns it into a sequenced plan.",
            },
            {
              title: "Agents track & triage",
              body: "AI monitors progress, threads PRs and deploys back to tasks, routes Sentry alerts to code owners, and keeps clients in the loop automatically.",
            },
            {
              title: "Ship & reflect",
              body: "Agents draft release notes, standups, and client status updates, surface what slipped, and carry the learnings into the next cycle.",
            },
          ],
        },
        {
          type: "split",
          heading: "Agents that draft the boring work",
          content: [
            {
              type: "paragraph",
              text: "Kavanah's AI isn't a chat box on the side — it's woven through the workflow. Mark a task ai-eligible and the AI Engineer drafts the PR. Turn a markdown spec into a sequenced plan with Spec→Tasks. Wire approval routes, watchers, and triage rules so routine work runs itself — with you in the loop wherever you want.",
            },
            {
              type: "list",
              items: [
                "AI Engineer drafts PRs from ai-eligible tasks — tests passing, diff ready for review.",
                "Spec → Tasks turns a markdown spec into a sequenced, assignable plan.",
                "Approval routes, watchers, and triage rules you fully control.",
                "Automations: triage Sentry alerts to tasks, auto-draft the weekly sprint plan, post standup digests to your team channel.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Hire AI teammates, scoped like real ones",
            },
            {
              type: "list",
              items: [
                "Create named AI Employees for any role — a PM, an account exec, a research analyst.",
                "You set each one's capability scopes, who can work with it, and which integrations it can use.",
                "Grant per-agent access to email, calendar, GitHub, Slack, and more.",
                "Any workspace member can assign it tasks — and it reports back like a teammate.",
              ],
            },
            {
              type: "image",
              label: "The dashboard — time tracking, productivity, and urgent tasks beside the AI agent, its Morning Briefing, and live insights",
              src: "/projects/kavanah-dashboard.png",
              alt: "Kavanah dashboard on a desktop monitor showing time tracker, productivity, completed tasks, urgent tasks, morning briefing, notifications, and the AI Agent chat panel",
              aspect: "4/3",
              rounded: "lg",
              fit: "cover",
            },
          ],
        },
        {
          type: "split",
          flip: true,
          heading: "Tasks linked to the code that ships them",
          content: [
            {
              type: "paragraph",
              text: "Connect GitHub, GitLab, Vercel, Sentry, and Datadog. Kavanah threads commits, PRs, deploys, and incidents back to the task they came from — so anyone can answer \"what shipped, what broke, who owns it\" in one click.",
            },
            {
              type: "list",
              items: [
                "Lineage: task ↔ commit ↔ PR ↔ deploy ↔ incident.",
                "Sentry & Datadog alerts auto-routed to code owners.",
                "Deploy timeline overlaid on your project Gantt.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Every minute accounted for",
            },
            {
              type: "list",
              items: [
                "One-click timer attached to any task.",
                "Automatic time logging and weekly reports.",
                "Billable vs. non-billable hour breakdowns.",
                "Branded client portal with AI-drafted weekly status updates and controlled per-member access.",
              ],
            },
          ],
        },
        {
          type: "split",
          heading: "An AI chief of staff — with guardrails",
          content: [
            {
              type: "paragraph",
              text: "Kavanah's agent isn't a feature — it's a standing operation. It reaches every corner of the product through 800+ tools spanning the platform's ~680 API endpoints, and it runs on its own schedule: a morning briefing in your inbox, goals checked daily, follow-ups chased before they slip.",
            },
            {
              type: "list",
              items: [
                "Persistent memory — decisions, commitments, and preferences carried across every conversation.",
                "A waiting-on ledger that tracks who owes what by when, nudges them, and escalates when nudging stops working.",
                "Runbooks: encode your SOPs as steps the agent executes, pausing at human checkpoints you define.",
                "Goals & OKRs evaluated daily against live workspace data — you're alerted only when a goal starts trending the wrong way.",
                "Drop in a meeting transcript and the agent extracts decisions and action items, assigns owners, and creates the tasks.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Autonomy you can govern",
            },
            {
              type: "list",
              items: [
                "Per-category action policies — allow, allow with a daily budget, require approval, or block — for sends, deletes, payments, and deploys.",
                "Every agent write lands in an action ledger; a weekly report shows admins exactly what the agent did, parked, or undid.",
                "Escalations respect quiet hours — unless it's critical.",
                "Risky actions park for human approval by default; the agent fails closed, not open.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "One workspace, every surface",
          blocks: [
            {
              type: "paragraph",
              text: "From planning sprints to tracking hours, collaborating with your team, and keeping clients informed — every feature is built to move projects forward, and every surface is in sync across web, desktop, and mobile.",
            },
            {
              type: "list",
              items: [
                "Task management — Kanban, timeline, and Gantt views; custom statuses, tags, priorities, saved filters; undo/redo and bulk edits.",
                "Dev integration — GitHub, GitLab, Vercel, Sentry, and Datadog, with full task-to-incident lineage.",
                "20+ integrations — Jira, ClickUp, Monday.com, Notion, Slack, and the full Google Workspace suite: Gmail, Calendar, Drive, Docs, Sheets, Slides, Forms, Meet, and Chat.",
                "AI Engineer & automations — PR drafting, Spec→Tasks, approval routes, watchers, and triage rules.",
                "AI Employees — scoped, named agents any member can assign work to.",
                "Time tracking — one-click billable timers, weekly reports, billable/non-billable breakdowns.",
                "Client portal — branded, controlled per-member access, milestone tracking, AI-drafted status updates.",
              ],
            },
            {
              type: "callout",
              tone: "metric",
              label: "Built across the full stack",
              text: "Web, desktop & mobile — in sync",
            },
            {
              type: "image",
              label: "The iOS app — the same workspace in your pocket, with live timers and the AI agent one tap away",
              src: "/projects/kavanah-mobile.png",
              alt: "Kavanah iOS app showing the dashboard with a live time tracker, weekly summary, and productivity trend",
              aspect: "square",
              rounded: "lg",
              fit: "cover",
            },
            {
              type: "image",
              label: "Board view — Kanban across Open, In Progress, In Review, and Completed, with AI-eligible tasks threaded to commits",
              src: "/projects/kavanah-board.png",
              alt: "Kavanah board view showing a project's tasks across Open, In Progress, In Review, and Completed columns",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "Pricing",
          blocks: [
            {
              type: "paragraph",
              text: "Flat per-seat pricing keeps the base platform cheaper than the big tools — pay only for the people you add. AI is metered separately as credits, so you only pay for the agent runs, chat, and automations you actually use. 30% off annual.",
            },
            {
              type: "heading",
              level: 3,
              text: "Basic — $3 / seat / month",
            },
            {
              type: "list",
              items: [
                "Unlimited seats, billed per member · 100 AI credits per seat / month",
                "Boards, tasks, and timelines",
                "Time tracking, team chat, and email support",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Pro — $6 / seat / month",
            },
            {
              type: "list",
              items: [
                "Everything in Basic · 250 AI credits per seat / month",
                "AI planning and triage agents",
                "Client portal · priority support",
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
                "Volume per-seat pricing · custom AI credit allowance",
                "Everything in Pro · SSO and advanced permissions",
                "Custom integrations · dedicated account manager",
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
              text: "What makes Kavanah 'AI-native'?",
            },
            {
              type: "paragraph",
              text: "Kavanah was built from the ground up with AI agents at the core — not bolted on. Agents triage tasks, plan sprints, draft PRs from ai-eligible tickets, route approvals, and turn markdown specs into sequenced plans. Project management is one workspace, not a stack of tools glued together.",
            },
            {
              type: "heading",
              level: 3,
              text: "Can I control what the AI automates?",
            },
            {
              type: "paragraph",
              text: "Yes — you wire approval routes, watchers, and triage rules, and decide exactly where the AI acts on its own versus where it waits for a human. You stay in the loop wherever you want to be.",
            },
            {
              type: "heading",
              level: 3,
              text: "Can I create my own AI employees?",
            },
            {
              type: "paragraph",
              text: "Yes. Create named AI Employees for any role, define each one's capability scopes and integration access, and let any workspace member assign them tasks — they report back like a teammate.",
            },
            {
              type: "heading",
              level: 3,
              text: "Is there a desktop and mobile app?",
            },
            {
              type: "paragraph",
              text: "Yes — Kavanah ships as a web app, a desktop application, and an iOS app, all kept in sync, so your workspace travels with you.",
            },
          ],
        },
      ],
    },
};
