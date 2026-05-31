# HydraTransit App

This is the HydraTransit application - a multi-modal transit orchestrator and green-mobility dashboard for Hyderabad, Telangana. It integrates Hyderabad Metro Rail, TSRTC Express Buses, MMTS local trains, and last-mile micro-mobility (electric bikes and shared autos) into a seamless commuting experience, while incentivizing public transit usage through a gamified Carbon Credits reward system.

Website Link:- https://hydratransit-app.vercel.app

## Features

**Multi-Modal Route Planner:** Compiles hybrid journeys such as Bus -> Metro -> E-Bike, calculating total duration, cost, and exact carbon savings dynamically.

**Interactive GIS Network Mapping:**

- Renders active transit layers over a futuristic dark Hyderabad coordinate grid using Leaflet.js and CartoDB Dark Matter.
- Plots Red, Blue, and Green Metro lines alongside animated TSRTC vehicle trackers.

**Bluetooth BLE Coach Radar:** Simulates live Bluetooth beacon scanning inside Metro carriages to track coach crowding levels (Low, Mid, High), directing passengers to open carriages.

**Unified QR "Hydra-Pass":** Consolidates separate agency fares into a single QR pass, automatically generated inside an HTML5 Canvas with zero external dependencies.

**Eco Carbon Rewards Hub:**

- Earn Green Credits for choosing public transit.
- Redeemable for real vouchers at Hyderabad's popular brands, including Niloufer Cafe, Karachi Bakery, and Metro passes.

**State Persistence:** Auto-saves all user wallet details, carbon points, and current active routes to the browser's localStorage.

**Responsive Design:** Optimized for various screen sizes with a glassmorphic, premium UI.

## Technologies Used

**HTML5:** Semantic markup and structure.

**CSS3:** Custom glassmorphic styling, animations, and responsive layouts.

**JavaScript (Vanilla):** Core application logic, routing engine, and interactivity.

**Leaflet.js:** Interactive GIS mapping with CartoDB Dark Matter tiles.

**HTML5 Canvas:** QR code generation for the unified Hydra-Pass.

**Web Bluetooth API:** Simulated BLE coach density scanning.

**localStorage API:** Client-side state persistence and session recovery.

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: Python 3.x or Node.js for a local HTTP server

### Installation

Clone the repository:

```bash
git clone https://code.swecha.org/Navya_sai_tej/hydratransit-app.git
cd hydratransit-app
```

No dependency installation is required. The project is a standalone vanilla HTML/CSS/JS application.

### Running the Development Server

Open `index.html` directly in your browser, or serve the directory locally for full browser capability support:

```bash
# Using Python 3.x
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

The application will be available at `http://localhost:8000`.

## Building for Production

No build step is required. The project is a static web application. Deploy the project files to any static hosting provider, such as Vercel, GitHub Pages, or GitLab Pages.

Production deployment: https://hydratransit-app.vercel.app

## Project Structure

```text
.
|-- app.js                    # Main application logic (routing, map, wallet, QR, BLE)
|-- index.html                # Entry point HTML file
|-- style.css                 # Global styles (glassmorphism, animations, responsive)
|-- state_checkpoint.json     # System parameters, landmark datasets, task checklists
|-- HydraTransit_Hackathon_Pitch.pptx
|-- AGENT.md                  # AI agent handoff and continuation guide
|-- CONTRIBUTING.md           # Open source contributor guide
|-- .gitignore                # Git ignore rules
|-- .gitlab-ci.yml            # GitLab CI/CD pipeline configuration
`-- README.md                 # Project documentation
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m "feat: add my feature"`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a Merge Request or Pull Request.

## License

No license file is currently included in this repository.
