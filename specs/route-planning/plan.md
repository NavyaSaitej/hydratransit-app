# Route Planning — Implementation Plan

## Goal
Implement multi-modal route planning with offline support using GTFS static data.

## Tasks
- [ ] Parse and cache GTFS stop and trip data in service worker
- [ ] Build shortest-path algorithm (Dijkstra) over transit graph
- [ ] Implement UI for source/destination input with stop autocomplete
- [ ] Display route results with time, fare, and transfer info
- [ ] Add offline fallback with last-cached GTFS data

## Verification
- [ ] All unit tests pass (`npm test`)
- [ ] Lint and type checks pass (`npm run lint && npm run typecheck`)
- [ ] Works offline after first load (tested in Chrome DevTools → Offline)
- [ ] Tested on low-end Android device (3G throttling)
