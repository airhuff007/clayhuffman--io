---
title: "What JARVIS Actually Is"
date: 2026-05-22
category: "Tech & Science"
description: "Telegram, n8n, Obsidian, and Claude, wired into one operator."
draft: false
---

People hear "personal AI assistant" and picture a chatbot. That's not what this is.

JARVIS — that's what I call it, because of course I do — is a wired-together system of tools that acts as a single interface to my entire information environment. It doesn't just answer questions. It routes tasks, captures information, surfaces context, and executes workflows I've defined in advance.

Here's what it actually is.

## The core pieces

**Telegram** is the front door. Every interaction starts there. I send a voice note, a link, a task, a question — Telegram receives it.

**n8n** is the brain stem. It's the automation layer that routes everything. Telegram message comes in → n8n decides what to do with it → routes to the right workflow.

**Claude** is the intelligence layer. Anything that requires understanding, summarizing, writing, or reasoning goes through Claude via the API. The prompt context gets built from whatever n8n has assembled.

**Obsidian** is the memory. Notes, SOPs, project context — all live there. When I ask JARVIS something about an ongoing project, n8n pulls the relevant notes and passes them to Claude as context.

## What it can do right now

- Capture a voice note → transcribe → save to the right Obsidian folder
- Drop a link → summarize → save with tags
- Ask about a project → pull relevant notes → generate a briefing
- Log a task → add to the right project in my system
- Morning briefing → pull calendar, open tasks, and anything flagged overnight

## What it isn't

JARVIS doesn't have agency. It doesn't decide to do things on its own. Every workflow is something I defined, and it runs when triggered. That's intentional — I don't want an AI that surprises me.

The goal is to eliminate the gap between a thought and a captured thought. That's it. When the friction of recording something is lower than the friction of forgetting it, you stop forgetting things.

This is still being built. The pieces work. The integration keeps getting tighter.
