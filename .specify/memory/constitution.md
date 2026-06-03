# HydraTransit App — Project Constitution

## Vision

HydraTransit is a multi-modal transit application for Hyderabad that provides real-time route planning, bus tracking, and commuter utilities in an offline-capable progressive web app.

## Core Values

- **Reliability**: Works offline-first via service workers
- **Accessibility**: Usable on low-end devices and slow networks
- **Openness**: Open-source, community-driven

## Architecture Decisions

- Vanilla JS + HTML/CSS (no framework dependency)
- Jest for unit testing
- ESLint + Biome for code quality
- Prettier for formatting
- TypeScript strict mode for type safety

## Out of Scope

- Native mobile apps (PWA covers mobile use-cases)
- Paid/proprietary transit data APIs
