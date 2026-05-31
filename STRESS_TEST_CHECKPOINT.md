# HydraTransit Stress-Test Remediation Checkpoint

This checkpoint tracks the current remediation pass driven by `HYDRATRANSIT_STRESS_TEST.md`.

## Source Report

Local report path:

```text
C:\Users\navya\Downloads\HYDRATRANSIT_STRESS_TEST.md
```

## Current Goal

Implement the repo-side fixes from the stress test, verify the app locally, push to Swecha first, push to GitHub second, and deploy the updated Vercel production app.

## Fixes Implemented So Far

- Fixed programmatic `switchTab('pass')` crash by removing reliance on the implicit global `event`.
- Updated tab button markup to pass `this` for click-triggered tab changes.
- Added Directions API timeout helper and quota-limit toast path.
- Changed route search to render initial Google route results before loading synthetic backup routes.
- Removed the incorrect `Hitec City MMTS` station entry.
- Added first-day streak initialization for new users.
- Added wallet integrity signature detection for localStorage demo tampering.
- Added HydraPass double-click guard.
- Added deterministic BLE simulation values and clearer simulated BLE fallback messages.
- Added real e-bike distance calculation from the selected origin or Hyderabad default center.
- Added road-leg fallback flags so straight-line fallback routes render as subdued dashed paths.
- Added cross-line Metro interchange routing helpers for Ameerpet, Parade Ground, and MGBS transfers.
- Changed synthetic route generation to run sequentially instead of firing all builders at once.
- Added route-card messaging when the per-trip Eco points cap is reached.
- Added README Demo Scope disclosure.
- Corrected README technology wording from Leaflet to Google Maps for the current app version.

## External Action Still Required

Google Maps API key restriction cannot be completed from this repository. The owner should restrict the key in Google Cloud Console:

- Application restriction: HTTP referrers.
- Allowed referrers: `https://hydratransit-app.vercel.app/*` and local demo origins such as `http://localhost:8000/*`.
- API restriction: Maps JavaScript API, Places API, Directions API, and Geocoding API.

## Remaining Local Steps

1. Run syntax and whitespace checks.
2. Launch the app locally.
3. Verify rendered app load, console health, tab switching, BLE fallback, and HydraPass flow.
4. Fix any issues found during local QA.
5. Commit changes on the Swecha-tracking `main` branch.
6. Push to `origin/main` on `code.swecha.org`.
7. Apply the same commit scope cleanly to `github/main`.
8. Deploy production with Vercel.

## Resume Prompt

```text
Set C:\Users\navya\.gemini\antigravity\scratch\HydraTransit as the active workspace. Read STRESS_TEST_CHECKPOINT.md, AGENT.md, and HYDRATRANSIT_STRESS_TEST.md from Downloads. Continue the stress-test remediation: run local QA, fix failures, push to Swecha then GitHub, and deploy to Vercel.
```
