# Agent Handover — HydraTransit v3.0

This document is designed for AI agents or developers picking up this project for the first time. It provides all the context needed to immediately understand, run, and extend HydraTransit without re-reading every source file.

---

## 🧭 Project Overview

**HydraTransit** is a CivicTech hackathon demo — a multi-modal transit orchestrator and green-mobility dashboard for Hyderabad, Telangana. It is a **single-page, static web application** (vanilla HTML/CSS/JS — no build system, no frameworks, no npm).

| Attribute         | Value                                                              |
|-------------------|--------------------------------------------------------------------|
| Version           | 3.0.0                                                              |
| Status            | Awaiting User Demo                                                 |
| Entry Point       | `index.html`                                                       |
| Main Logic        | `app.js` (1,303 lines, ~64 KB)                                     |
| Styling           | `style.css` (18.5 KB, glassmorphic dark theme)                     |
| State Checkpoint  | `state_checkpoint.json`                                            |
| External APIs     | Google Maps Platform (Maps JS, Places Autocomplete, Directions)    |
| CDN Dependencies  | FontAwesome 6.4.0, Google Fonts (Inter, JetBrains Mono)            |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────┐
│  index.html                                              │
│  ├── <aside id="sidebar">   ← Glassmorphic sidebar UI   │
│  │   ├── Tab: Plan Journey  ← Route search + results     │
│  │   ├── Tab: HydraPass     ← QR ticket generation       │
│  │   ├── Tab: Eco Credits   ← Carbon wallet + store      │
│  │   └── Tab: Live (BLE)    ← Coach density radar        │
│  └── <main id="map">        ← Google Maps fullscreen     │
└──────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  app.js                                                  │
│  ├── METRO_STATIONS (57 stations: Red, Blue, Green)      │
│  ├── MMTS_STATIONS (23 stations)                         │
│  ├── BUS_HUBS (12 hubs)                                  │
│  ├── ECO_MODEL (credit earn/cap/cooldown/catalog)        │
│  ├── PASS_TYPES (Single, Day, Weekly, Monthly)           │
│  ├── initMap()           → Google Maps bootstrap          │
│  ├── drawNetworkLines()  → Polyline + marker overlay      │
│  ├── setupAutocomplete() → Places Autocomplete            │
│  ├── triggerSearch()     → Directions API + synthetic      │
│  ├── buildSyntheticRoute() → Custom fallback routing      │
│  ├── buildTrueMultiModal() → Metro+MMTS+Bus combos       │
│  ├── generateTicket()    → Canvas QR + Apple Wallet card  │
│  ├── scanBLE()           → Web Bluetooth coach radar      │
│  ├── Wallet CRUD         → localStorage persistence       │
│  └── Rewards Store       → Eco credit redemption          │
└──────────────────────────────────────────────────────────┘
```

### Key Design Decisions

1. **Zero build system**: The app is intentionally framework-free. `index.html` loads `style.css` and `app.js` directly. CDN links handle fonts and icons. This was a deliberate choice for hackathon portability.

2. **Dual routing engine**: Google Directions API provides real transit routes, but it often ignores MMTS trains. `generateAllSyntheticRoutes()` runs in parallel and builds custom Metro, MMTS, Bus, and Multi-Modal routes from the station databases, with real road-following polylines via the Directions API for first/last-mile legs.

3. **Eco credits with anti-gaming**: The `ECO_MODEL` has per-trip caps (8 pts), daily caps (20 pts), weekly caps (100 pts), a 20-minute cooldown between trips, and streak multipliers — all enforced client-side.

4. **Canvas-rendered QR codes**: QR codes on the HydraPass ticket are drawn entirely via HTML5 Canvas using a seeded pseudo-random generator (no external QR library). They are visually plausible but not scannable.

---

## 🔑 Critical Configuration

### Google Maps API Key

The API key is hardcoded in two places:

| File         | Line | Value                                            |
|--------------|------|--------------------------------------------------|
| `app.js`     | 5    | `const GMAPS_KEY = 'AIzaSyBnZY3jsHmETt-...'`    |
| `index.html` | 120  | `<script src="...maps.googleapis.com/...?key=AIzaSyBnZY3jsHmETt-...">`  |

> ⚠️ **Both must be updated** if you change the API key. The key in `app.js` is currently unused (the `<script>` tag in `index.html` is the one that actually loads the Maps API), but should be kept in sync for future use.

### Google Maps Libraries Loaded

- `places` — for Autocomplete
- `callback=initMap` — triggers app bootstrap

### Autocomplete Bounds

The Places Autocomplete is bounded to Hyderabad metro area:
```
SW: (17.15, 78.15)  →  NE: (17.65, 78.75)
```
Country restricted to India (`componentRestrictions: { country: 'in' }`), with `strictBounds: false` to allow results slightly outside.

---

## 💾 State Persistence

All user state is stored in `localStorage` under the `ht_` namespace:

| Key          | Type   | Description                            |
|--------------|--------|----------------------------------------|
| `ht_pts`     | int    | Total eco points earned                |
| `ht_co2`     | float  | Total CO₂ saved (kg)                   |
| `ht_ptsd`    | int    | Points earned today (daily cap)        |
| `ht_lt`      | int    | Last trip timestamp (cooldown)         |
| `ht_str`     | int    | Consecutive day streak                 |
| `ht_trips`   | JSON   | Array of last 20 trip records          |
| `ht_date`    | string | Date string for daily cap reset logic  |

**To reset all user state**, clear these keys or run:
```javascript
['ht_pts','ht_co2','ht_ptsd','ht_lt','ht_str','ht_trips','ht_date'].forEach(k => localStorage.removeItem(k));
location.reload();
```

---

## 📂 File-by-File Reference

| File                     | Size   | Purpose                                                                 |
|--------------------------|--------|-------------------------------------------------------------------------|
| `index.html`             | 6.5 KB | Single-page app shell: sidebar tabs, map container, toast, script tags  |
| `app.js`                 | 64 KB  | All application logic (1,303 lines, heavily commented with section headers) |
| `style.css`              | 18.5 KB| Glassmorphic dark theme, all component styles, animations, responsive   |
| `state_checkpoint.json`  | 1 KB   | Machine-readable project status, feature list, dependencies, next steps |
| `.gitignore`             | 386 B  | Standard ignores for IDE, OS, and build artifacts                       |
| `.gitlab-ci.yml`         | 717 B  | GitLab CI pipeline for linting and Pages deployment                     |
| `README.md`              | ~4 KB  | User-facing project documentation                                       |
| `CONTRIBUTING.md`        | ~8 KB  | Contributor guidelines, code style, commit conventions                  |

---

## 🧩 Module Map (app.js)

The file is organized into clearly delimited sections using ASCII comment banners:

| Lines       | Section                          | Key Functions                                              |
|-------------|----------------------------------|------------------------------------------------------------|
| 1–5         | Header + API Key                 | `GMAPS_KEY`                                                |
| 8–69        | Station & Hub Databases          | `METRO_STATIONS`, `MMTS_STATIONS`, `BUS_HUBS`             |
| 72–116      | Constants & Config               | `DARK_MAP_STYLE`, `LINE_COLORS`, `ECO_MODEL`, `PASS_TYPES`|
| 118–132     | App State                        | `map`, `wallet`, `currentRoutes`, etc.                     |
| 134–157     | Google Maps Init                 | `initMap()`                                                |
| 159–218     | Network Visualization            | `drawNetworkLines()`                                       |
| 220–244     | Places Autocomplete              | `setupAutocomplete()`                                      |
| 246–253     | Tab Switching                    | `switchTab()`                                              |
| 255–365     | Route Search Engine              | `triggerSearch()`, `processAndSortRoutes()`                 |
| 430–589     | Route Parsing & Calculations     | `parseTransitRoute()`, `parseDrivingRoute()`, `calcPoints()` |
| 591–649     | Route Card Rendering             | `renderRouteCards()`, `renderTimeline()`                    |
| 651–720     | Map Overlay Drawing              | `selectRoute()`, `drawRouteOnMap()`, `clearMapOverlays()`  |
| 722–896     | HydraPass Ticket System          | `updatePassForRoute()`, `purchasePass()`, `generateTicket()`, `drawQR()` |
| 898–940     | BLE Coach Radar                  | `initBLE()`, `scanBLE()`, `coachRow()`                     |
| 942–994     | Eco Credits Wallet               | `renderStore()`, `updateWalletUI()`, `redeem()`, `saveWallet()` |
| 996–1003    | Toast Notifications              | `showToast()`                                              |
| 1005–1303   | Custom Routing Engine            | `generateAllSyntheticRoutes()`, `buildSyntheticRoute()`, `buildTrueMultiModal()` |

---

## 🚀 Running the Project

```bash
# Simplest option — open directly
open index.html

# Recommended — local HTTP server for full API support
python -m http.server 8000
# or
npx http-server -p 8000

# Then visit
open http://localhost:8000
```

No installation, no `npm install`, no build step.

---

## ⚡ Common Tasks

### Add a New Metro/MMTS/Bus Station

1. Add the station entry to `METRO_STATIONS`, `MMTS_STATIONS`, or `BUS_HUBS` in `app.js` (lines 8–69).
2. Ensure the `idx` value is correct relative to adjacent stations on the same line.
3. The station will automatically appear on the map and be available for synthetic routing.

### Add a New Reward to the Store

Add an entry to `ECO_MODEL.catalog` (line 99–107):
```javascript
{ brand: "Brand Name", item: "Reward Description", cost: 500, icon: "🎁" }
```

### Add a New Pass Type

Add an entry to `PASS_TYPES` (line 111–116):
```javascript
{ id: 'annual', name: 'Annual', price: '₹8999', desc: '365 days unlimited', gradient: 'linear-gradient(135deg,#ff6b6b,#ee5a24)', icon: '🌟' }
```

### Modify the Eco Credits Formula

All parameters are in `ECO_MODEL` (lines 94–108): base points per km, multipliers, caps, cooldown timer, and CO₂ emission factors per transport mode.

---

## 🐛 Known Issues & Gotchas

1. **Google Directions API quotas**: The app makes multiple parallel Directions API calls per search (transit + driving + synthetic legs). This can quickly burn through free-tier quota during demos.

2. **QR codes are decorative**: The Canvas-drawn QR codes use a seeded random pattern and are not scannable. They are for visual demo purposes only.

3. **BLE radar falls back to mock**: If `navigator.bluetooth` is unavailable or denied, the BLE radar silently falls back to randomly generated mock data after a 3-second animation.

4. **No backend**: All data is client-side in `localStorage`. There is no server, no database, no user authentication.

5. **API key is exposed**: The Google Maps API key is visible in the source. For production, it should be restricted to specific referrers via the Google Cloud Console.

6. **`event.currentTarget` in `switchTab()`**: Line 250 uses the implicit `event` global, which works in inline `onclick` handlers but would break if the function were called programmatically.

---

## 🎯 Next Steps (from state_checkpoint.json)

- [ ] User testing and review of the v3 premium UI
- [ ] Prepare for Hackathon demo pitch

---

## 🤖 Agent Quick-Start Directive

> Set the HydraTransit project directory as your active workspace. Read this `AGENT.md` for full architecture context. Reference `state_checkpoint.json` for current project status and next steps. The application is a zero-dependency static web app — open `index.html` in a browser or serve via `python -m http.server 8000` to run it immediately.
