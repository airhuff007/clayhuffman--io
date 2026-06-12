---
title: "Built Lauren's Booking Automation in a Weekend"
date: 2026-05-15
category: "Business"
description: "What it does, and what it took to ship it."
draft: false
---

Lauren had a problem that every solo service provider has: the back-and-forth.

Client reaches out → she responds → they go back and forth on dates → she sends a contract → follows up when they don't sign → follows up again → they book. The whole cycle took days and ate time she should have been shooting.

I built her a system that collapses that entire process into under 10 minutes on the client's side, and zero minutes on hers.

## What it actually does

When a lead comes in through her website form:

1. They get an immediate text with a booking link
2. They pick a date and time from her live calendar
3. A contract and invoice auto-generate and get sent
4. When they sign and pay, they get an onboarding questionnaire
5. Lauren gets a notification with everything already filled out

No follow-up. No back-and-forth. No dropped leads because she was in the middle of a shoot.

## The stack

GoHighLevel for the CRM and automation backbone. Calendly was tempting but GHL does it all in one place and Lauren's already on it for other things. The contract integration runs through PandaDoc. Stripe for payments.

The whole thing is a single workflow with about 12 steps. Took maybe 8 hours across the weekend, mostly fighting a webhook that wasn't firing correctly (it was a header issue, of course).

## What it cost vs. what it freed

Setup time: one weekend. Monthly cost: absorbed into her existing GHL subscription.

What it freed: every hour she used to spend on admin chasing. Booked-to-shot cycle dropped from days to same-day. Conversion rate went up because leads got a response before they had time to shop around.

The best automation is the kind you forget is running. This is one of those.
