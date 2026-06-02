# HydraTransit User Manual

Welcome to HydraTransit. This guide explains how to use the app to plan trips, compare multi-modal routes, generate a HydraPass, track Eco Carbon Rewards, and use the live coach crowding demo.

Website Link:- https://hydratransit-app.vercel.app

## What HydraTransit Does

HydraTransit is a multi-modal transit companion for Hyderabad, Telangana. It helps you combine Hyderabad Metro Rail, TSRTC buses, MMTS local trains, walking, shared autos, and e-bike options into one planned journey.

The app is designed for quick route comparison, lower-carbon travel decisions, and a unified demo ticketing experience.

## Getting Started

Open the live app:

```text
https://hydratransit-app.vercel.app
```

Or run it locally:

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

No account, installation, or dependency setup is required.

## Planning a Trip

Use the route planner to find the best way across Hyderabad.

1. Enter your starting location in the origin field.
2. Enter your destination in the destination field.
3. Use the location suggestions when they appear.
4. Start the route search.
5. Review the route cards shown in the sidebar.

Each route card may include:

- Travel time
- Estimated cost
- Transit modes used
- Carbon savings
- Eco points earned
- Route quality labels such as fastest, balanced, or eco-friendly

Select a route card to view it on the map and use it for HydraPass generation.

## Understanding Route Modes

HydraTransit can combine several transport modes in one route.

**Metro:** Fast rail segments across Hyderabad Metro lines.

**MMTS:** Local train segments where useful.

**TSRTC Bus:** Bus hub and connector segments.

**Walking:** First-mile, last-mile, or transfer walking segments.

**Shared Auto:** Last-mile connector option for short hops.

**E-Bike:** Micro-mobility option near supported Metro stations.

## Using the Map

The map displays the city context, transit network, and selected route path.

Use the map to:

- See your route visually.
- Compare where different route segments occur.
- Identify station and hub markers.
- Follow the selected route from origin to destination.

If the map does not load, refresh the page and check that your browser allows the Google Maps script to run.

## Using HydraPass

HydraPass is the app's unified ticketing demo.

1. Search for a route.
2. Select your preferred route.
3. Open the Pass or HydraPass panel.
4. Choose the pass type if options are shown.
5. Generate the ticket.
6. View the QR-style pass card.

The HydraPass QR is generated with HTML5 Canvas for demo purposes. It is a visual prototype and is not connected to a real Metro, MMTS, or TSRTC fare system.

## Eco Carbon Rewards

HydraTransit rewards greener route choices with Eco points.

You can earn points when choosing routes that reduce car usage by using:

- Metro
- MMTS
- TSRTC bus
- Walking
- E-bike connectors

The Eco panel shows your:

- Total Eco points
- Carbon savings
- Trip activity
- Streak or progress indicators
- Available reward options

Rewards may include demo vouchers for local brands such as Niloufer Cafe, Karachi Bakery, and Metro-related offers.

## Redeeming Rewards

To redeem a reward:

1. Open the Eco or Rewards panel.
2. Review available vouchers.
3. Check the points required.
4. Select a reward you can afford.
5. Confirm redemption.

Reward redemption is part of the app demo and does not issue real commercial vouchers.

## Live Coach Radar

The Live or BLE panel simulates Metro coach crowding.

Use it to:

- Start a coach scan.
- View simulated crowd levels.
- Compare coach density such as Low, Mid, or High.
- Decide which coach would be more comfortable to board.

If Bluetooth is unavailable or permission is denied, the app can still show simulated demo data.

## State Persistence

HydraTransit stores app state in your browser with `localStorage`.

This can preserve:

- Eco points
- Carbon savings
- Trip history
- Streak data
- Active wallet or pass state

To reset your local app state, clear site data for the app in your browser settings, or clear localStorage from developer tools.

## Mobile Usage

The app is responsive and works on phone, tablet, and desktop screens.

For the best mobile experience:

- Use a modern browser.
- Keep location permissions enabled if your workflow needs them.
- Rotate to landscape if you want a wider map view.
- Refresh if a map or route panel appears stuck after resizing.

## Troubleshooting

**Map does not load:** Check your internet connection and refresh the page.

**Location suggestions do not appear:** Make sure the page is online and Google Maps services are available.

**Route search gives limited results:** Try a clearer Hyderabad landmark or station name.

**HydraPass does not generate:** Select a route first, then open the pass panel.

**Eco points look old:** Clear browser localStorage for the site and reload.

**BLE scan is unavailable:** Continue with the simulated crowding demo.

## Important Notes

- The app is a static web demo.
- There is no backend database or user login.
- HydraPass QR codes are visual prototypes.
- Rewards are demo vouchers, not real commercial redemptions.
- Route and fare values are estimates for demonstration.
- Google Maps services require internet access.

## Quick User Flow

```text
Open app -> Enter origin and destination -> Search routes -> Select route -> Generate HydraPass -> Earn Eco points -> Redeem demo reward
```

## Getting Help

For project setup and technical contribution details, read:

- `README.md`
- `CONTRIBUTING.md`
- `AGENT.md`

For source-level behavior, inspect:

- `index.html`
- `app.js`
- `style.css`
