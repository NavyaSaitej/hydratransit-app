# HydraTransit Agent Guide

This file is for AI agents and developers who need to pick up the HydraTransit project quickly. It explains what the app is, how it runs, where the important logic lives, and what to check before making changes.

Website Link:- https://hydratransit-app.vercel.app

## Project Overview

**HydraTransit** is a static, single-page web application for multi-modal transit planning in Hyderabad, Telangana. It combines Metro, TSRTC bus, MMTS rail, e-bike availability, HydraPass ticket generation, BLE-style coach crowding simulation, and Eco Carbon Rewards into one browser-based demo.

**Application Type:** Static vanilla HTML/CSS/JavaScript app.

**Entry Point:** `index.html`

**Main Logic:** `app.js`

**Styling:** `style.css`

**State Checkpoint:** `state_checkpoint.json`

**Deployment:** Vercel static deployment at `https://hydratransit-app.vercel.app`

## Current Architecture

```text
.
|-- index.html                # App shell, sidebar, panels, map container, scripts
|-- app.js                    # Routing, Google Maps, wallet, QR, BLE, rewards logic
|-- style.css                 # Glassmorphic UI, responsive layout, animations
|-- state_checkpoint.json     # Project state, feature checklist, handoff metadata
|-- HydraTransit_Hackathon_Pitch.pptx
|-- AGENT.md                  # AI agent handoff and continuation guide
|-- CONTRIBUTING.md           # Open source contributor guide
|-- README.md                 # User-facing project documentation
|-- .gitignore
`-- .gitlab-ci.yml
```

## Core Features

**Multi-Modal Route Planner:** Builds route options that combine Metro, bus, MMTS, walking, shared auto, and e-bike segments.

**Google Maps Network View:** Uses the Google Maps JavaScript API for map rendering, markers, route polylines, Places Autocomplete, Directions, and Geocoding.

**HydraPass Ticket Flow:** Generates a visual unified transit pass with QR-style Canvas rendering.

**Eco Carbon Rewards:** Awards points and carbon savings for public-transit-friendly routes, then supports voucher redemption in a local rewards store.

**BLE Coach Radar:** Simulates Bluetooth beacon scans to estimate Metro coach crowding levels and suggest better coaches.

**State Persistence:** Stores wallet, route, carbon, points, and streak data in browser `localStorage`.

## Key Files

**`index.html`:** Defines the static app shell, sidebar panels, navigation tabs, map container, and Google Maps script loader.

**`app.js`:** Contains the full application engine, including station databases, routing logic, map drawing, wallet persistence, pass generation, reward redemption, localization strings, and BLE simulation.

**`style.css`:** Contains the complete visual system, including dark glassmorphic layout, responsive behavior, cards, controls, route panels, wallet UI, and animations.

**`state_checkpoint.json`:** Provides a compact machine-readable snapshot of the project state and useful handoff notes.

**`.gitlab-ci.yml`:** Provides CI configuration for the Swecha GitLab-style repository.

## Important Runtime Dependencies

**Google Maps Platform:** Loaded from `index.html` using the Maps JavaScript API with Places support.

**FontAwesome:** Used for UI icons.

**Google Fonts:** Used for app typography.

**Browser APIs:** Uses `localStorage`, Canvas, and simulated Web Bluetooth behavior.

No package installation, bundler, backend, database, or build step is required.

## Local Run Instructions

Open `index.html` directly in a browser, or serve the directory locally:

```bash
# Using Python 3.x
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

Then open:

```text
http://localhost:8000
```

## Agent Workflow

1. Read `README.md` for the user-facing overview.
2. Read this file for architecture and continuation context.
3. Read `state_checkpoint.json` for current status and task metadata.
4. Inspect `index.html`, `app.js`, and `style.css` before editing.
5. Run the app locally and check the browser console after changes.
6. Keep changes small and consistent with the existing vanilla JS structure.

## Development Notes

**No Build Step:** Do not add a build tool unless the user explicitly asks for a framework or bundler migration.

**Single App Surface:** The project is intentionally simple: `index.html`, `style.css`, and `app.js` are the main app files.

**State Keys:** User data is saved in the browser. If behavior looks stale, clear localStorage and reload.

**API Key Handling:** The Google Maps key is visible in the static source. For production use, restrict it by allowed referrer in Google Cloud Console.

**QR Behavior:** The HydraPass QR is a demo visual generated with Canvas. Treat it as a product mock, not a real fare-system QR integration.

**BLE Behavior:** BLE coach radar is a simulation and should degrade gracefully when Bluetooth is unavailable or denied.

## Suggested Checks Before Handoff

- App loads without console errors.
- Map initializes correctly.
- Origin and destination inputs accept locations.
- Route results render and can be selected.
- HydraPass panel generates a pass after route selection.
- Eco points and rewards update correctly.
- Reloading preserves localStorage-backed state.
- Mobile layout remains usable.

## Quick Continuation Prompt

Use this prompt when handing the project to another AI agent:

```text
Set C:\Users\navya\.gemini\antigravity\scratch\HydraTransit as the active workspace. Read README.md, AGENT.md, CONTRIBUTING.md, and state_checkpoint.json. The app is a static vanilla HTML/CSS/JS project deployed at https://hydratransit-app.vercel.app. Inspect index.html, app.js, and style.css before making changes.
```
