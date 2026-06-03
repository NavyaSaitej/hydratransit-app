# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- **Multi-lingual Support**: Added English, Telugu, and Hindi UI toggles.
- **Dynamic Theming**: Added a Light/Dark mode toggle with distinct map styles.
- **Eco Gamification**: Introduced 14-day Eco Streaks and Milestone badging system to reward sustainable transit.
- **Live E-Bike Data**: Added real-time dynamic distance calculation for nearby e-bike stations.
- **Collapsible Sidebar**: Implemented a fully responsive, collapsible sidebar for better map visibility.
- **Compliance & Health**: Added standard repository health files (Security, Code of Conduct, Changelog, Editorconfig).

### Fixed

- **UI Bug Fix**: Resolved persistent `undefined` route metadata bug by properly handling feeder buses.
- **Sidebar Collapse Issue**: Fixed bug preventing the sidebar from uncollapsing once minimized.
- **API Robustness**: Added timeout and quota protection to Google Maps Directions API requests.
- **Wallet Tampering**: Introduced local signature validation to prevent `localStorage` eco-point tampering.
- **Stress Testing Remediation**: Removed inaccessible station coordinates and optimized parallel API search queries.

### Changed

- **Demo Scope**: Updated `README.md` to clarify the actual application type (Vanilla JS Single-Page App).
