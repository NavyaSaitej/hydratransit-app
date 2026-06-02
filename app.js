// ═══════════════════════════════════════════════════════════════════════════
// HydraTransit v3.0 — Google Maps Integration + Premium HydraPass
// ═══════════════════════════════════════════════════════════════════════════

const GMAPS_KEY = 'AIzaSyBnZY3jsHmETt-mbEBKMpaRMGKEiuwCsvc';

// ─── METRO STATION DATABASE (57 Stations) ────────────────────────────────
const METRO_STATIONS = {
    // RED LINE: Miyapur → LB Nagar (27)
    "Miyapur":{lat:17.4964,lng:78.3731,line:"red",idx:0},"JNTU":{lat:17.4987,lng:78.3888,line:"red",idx:1},
    "KPHB Colony":{lat:17.4938,lng:78.4018,line:"red",idx:2},"Kukatpally":{lat:17.4851,lng:78.4094,line:"red",idx:3},
    "Balanagar":{lat:17.4770,lng:78.4150,line:"red",idx:4},"Moosapet":{lat:17.4740,lng:78.4204,line:"red",idx:5},
    "Bharat Nagar":{lat:17.4699,lng:78.4267,line:"red",idx:6},"Erragadda":{lat:17.4614,lng:78.4332,line:"red",idx:7},
    "ESI Hospital":{lat:17.4552,lng:78.4378,line:"red",idx:8},"SR Nagar":{lat:17.4490,lng:78.4420,line:"red",idx:9},
    "Ameerpet":{lat:17.4375,lng:78.4482,line:"red",idx:10},"Punjagutta":{lat:17.4283,lng:78.4500,line:"red",idx:11},
    "Irrum Manzil":{lat:17.4218,lng:78.4570,line:"red",idx:12},"Khairatabad":{lat:17.4148,lng:78.4590,line:"red",idx:13},
    "Lakdikapul":{lat:17.4068,lng:78.4670,line:"red",idx:14},"Assembly":{lat:17.4030,lng:78.4720,line:"red",idx:15},
    "Nampally":{lat:17.3950,lng:78.4730,line:"red",idx:16},"Gandhi Bhavan":{lat:17.3890,lng:78.4760,line:"red",idx:17},
    "Osmania Medical College":{lat:17.3850,lng:78.4790,line:"red",idx:18},"MG Bus Station":{lat:17.3782,lng:78.4812,line:"red",idx:19},
    "Malakpet":{lat:17.3750,lng:78.4920,line:"red",idx:20},"New Market":{lat:17.3720,lng:78.5010,line:"red",idx:21},
    "Musarambagh":{lat:17.3690,lng:78.5080,line:"red",idx:22},"Dilsukhnagar":{lat:17.3690,lng:78.5210,line:"red",idx:23},
    "Chaitanyapuri":{lat:17.3670,lng:78.5310,line:"red",idx:24},"Victoria Memorial":{lat:17.3580,lng:78.5400,line:"red",idx:25},
    "LB Nagar":{lat:17.3487,lng:78.5482,line:"red",idx:26},
    // BLUE LINE: Nagole → Raidurg (23)
    "Nagole":{lat:17.3927,lng:78.5572,line:"blue",idx:0},"Uppal":{lat:17.3990,lng:78.5490,line:"blue",idx:1},
    "Stadium":{lat:17.4060,lng:78.5380,line:"blue",idx:2},"NGRI":{lat:17.4120,lng:78.5310,line:"blue",idx:3},
    "Habsiguda":{lat:17.4180,lng:78.5240,line:"blue",idx:4},"Tarnaka":{lat:17.4270,lng:78.5170,line:"blue",idx:5},
    "Mettuguda":{lat:17.4320,lng:78.5100,line:"blue",idx:6},"Secunderabad East":{lat:17.4340,lng:78.5010,line:"blue",idx:7},
    "Parade Ground":{lat:17.4398,lng:78.4935,line:"blue",idx:8},"Paradise":{lat:17.4440,lng:78.4860,line:"blue",idx:9},
    "Rasoolpura":{lat:17.4460,lng:78.4780,line:"blue",idx:10},"Prakash Nagar":{lat:17.4440,lng:78.4700,line:"blue",idx:11},
    "Begumpet":{lat:17.4410,lng:78.4600,line:"blue",idx:12},"Ameerpet B":{lat:17.4375,lng:78.4482,line:"blue",idx:13},
    "Madhura Nagar":{lat:17.4400,lng:78.4380,line:"blue",idx:14},"Yousufguda":{lat:17.4420,lng:78.4280,line:"blue",idx:15},
    "Road No 5 Jubilee Hills":{lat:17.4380,lng:78.4170,line:"blue",idx:16},"Jubilee Hills Check Post":{lat:17.4350,lng:78.4060,line:"blue",idx:17},
    "Peddamma Temple":{lat:17.4380,lng:78.3970,line:"blue",idx:18},"Madhapur":{lat:17.4450,lng:78.3900,line:"blue",idx:19},
    "Durgam Cheruvu":{lat:17.4480,lng:78.3850,line:"blue",idx:20},"HITEC City":{lat:17.4504,lng:78.3808,line:"blue",idx:21},
    "Raidurg":{lat:17.4429,lng:78.3773,line:"blue",idx:22},
    // GREEN LINE: JBS → MGBS (9)
    "JBS Parade Ground":{lat:17.4398,lng:78.4935,line:"green",idx:0},"Secunderabad West":{lat:17.4360,lng:78.4900,line:"green",idx:1},
    "Gandhi Hospital":{lat:17.4310,lng:78.4870,line:"green",idx:2},"Musheerabad":{lat:17.4220,lng:78.4830,line:"green",idx:3},
    "RTC Cross Roads":{lat:17.4140,lng:78.4810,line:"green",idx:4},"Chikkadpally":{lat:17.4070,lng:78.4800,line:"green",idx:5},
    "Narayanguda":{lat:17.3970,lng:78.4810,line:"green",idx:6},"Sultan Bazaar":{lat:17.3870,lng:78.4810,line:"green",idx:7},
    "MGBS":{lat:17.3782,lng:78.4812,line:"green",idx:8}
};

// ─── MMTS STATION DATABASE ───────────────────────────────────────────────
const MMTS_STATIONS = {
    "Lingampally":{lat:17.4836,lng:78.3158,line:"mmts_hl",idx:0},"Chandanagar":{lat:17.4934,lng:78.3309,line:"mmts_hl",idx:1},
    "Hafeezpet":{lat:17.4883,lng:78.3541,line:"mmts_hl",idx:2},"Hitec City MMTS":{lat:17.4727,lng:78.3783,line:"mmts_hl",idx:3},
    "Borabanda":{lat:17.4646,lng:78.3970,line:"mmts_hl",idx:4},"Bharat Nagar MMTS":{lat:17.4623,lng:78.4239,line:"mmts_hl",idx:5},
    "Sanathnagar":{lat:17.4589,lng:78.4357,line:"mmts_hl",idx:6},"Fatehnagar":{lat:17.4552,lng:78.4452,line:"mmts_hl",idx:7},
    "Nature Cure":{lat:17.4526,lng:78.4523,line:"mmts_hl",idx:8},"Begumpet MMTS":{lat:17.4474,lng:78.4619,line:"mmts_hl",idx:9},
    "Sanjeevaiah Park":{lat:17.4371,lng:78.4759,line:"mmts_hl",idx:10},"James Street":{lat:17.4363,lng:78.4842,line:"mmts_hl",idx:11},
    "Secunderabad MMTS":{lat:17.4337,lng:78.5016,line:"mmts_hl",idx:12},"Sitafalmandi":{lat:17.4243,lng:78.5132,line:"mmts_sf",idx:13},
    "Arts College":{lat:17.4124,lng:78.5173,line:"mmts_sf",idx:14},"Jamai Osmania":{lat:17.4045,lng:78.5190,line:"mmts_sf",idx:15},
    "Vidya Nagar":{lat:17.3980,lng:78.5113,line:"mmts_sf",idx:16},"Kacheguda":{lat:17.3887,lng:78.4975,line:"mmts_sf",idx:17},
    "Malakpet MMTS":{lat:17.3768,lng:78.4925,line:"mmts_sf",idx:18},"Dabirpura":{lat:17.3687,lng:78.4862,line:"mmts_sf",idx:19},
    "Yakutpura":{lat:17.3615,lng:78.4849,line:"mmts_sf",idx:20},"Huppuguda":{lat:17.3503,lng:78.4812,line:"mmts_sf",idx:21},
    "Falaknuma":{lat:17.3411,lng:78.4735,line:"mmts_sf",idx:22}
};

// ─── TSRTC BUS HUB DATABASE ──────────────────────────────────────────────
const BUS_HUBS = {
    "Mehdipatnam Hub":{lat:17.3916,lng:78.4398,line:"bus"}, "Koti Hub":{lat:17.3833,lng:78.4833,line:"bus"},
    "Gachibowli Hub":{lat:17.4401,lng:78.3489,line:"bus"}, "Kondapur Hub":{lat:17.4622,lng:78.3587,line:"bus"},
    "Afzalgunj":{lat:17.3797,lng:78.4776,line:"bus"}, "Secunderabad Bus":{lat:17.4365,lng:78.5011,line:"bus"},
    "Uppal X Roads":{lat:17.3996,lng:78.5574,line:"bus"}, "LB Nagar Hub":{lat:17.3477,lng:78.5524,line:"bus"},
    "KPHB Hub":{lat:17.4835,lng:78.3891,line:"bus"}, "Patancheru":{lat:17.5287,lng:78.2661,line:"bus"},
    "Shamshabad":{lat:17.2568,lng:78.4357,line:"bus"}, "ECIL X Roads":{lat:17.4725,lng:78.5630,line:"bus"}
};

// ─── GOOGLE MAPS DARK STYLE ─────────────────────────────────────────────
const DARK_MAP_STYLE = [
    {elementType:'geometry',stylers:[{color:'#0f172a'}]},
    {elementType:'labels.text.stroke',stylers:[{color:'#0f172a'}]},
    {elementType:'labels.text.fill',stylers:[{color:'#64748b'}]},
    {featureType:'administrative',elementType:'geometry',stylers:[{color:'#1e293b'}]},
    {featureType:'road',elementType:'geometry',stylers:[{color:'#1e293b'}]},
    {featureType:'road',elementType:'geometry.stroke',stylers:[{color:'#0f172a'}]},
    {featureType:'road.highway',elementType:'geometry',stylers:[{color:'#253049'}]},
    {featureType:'road',elementType:'labels.text.fill',stylers:[{color:'#475569'}]},
    {featureType:'water',elementType:'geometry',stylers:[{color:'#0c1929'}]},
    {featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#334155'}]},
    {featureType:'transit.station',elementType:'labels.text.fill',stylers:[{color:'#94a3b8'}]},
    {featureType:'transit.line',elementType:'geometry',stylers:[{color:'#334155'}]},
    {featureType:'poi',stylers:[{visibility:'off'}]},
    {featureType:'poi.park',elementType:'geometry',stylers:[{color:'#0f2218'}]},
];

const LINE_COLORS = { red: '#f43f5e', blue: '#38bdf8', green: '#4ade80' };
const MODE_COLORS = { WALKING: '#a78bfa', TRANSIT: '#38bdf8', DRIVING: '#f87171', BICYCLING: '#4ade80' };
const TRANSIT_TYPE_COLORS = { SUBWAY: '#38bdf8', BUS: '#fbbf24', HEAVY_RAIL: '#2dd4bf', COMMUTER_TRAIN: '#2dd4bf' };

// ─── ECO CREDIT MODEL ───────────────────────────────────────────────────
const ECO_MODEL = {
    earn: { basePerKm: 0.3, multiModal: 1.5, peakHour: 1.2, streak: { 3:1.1, 5:1.3, 10:1.5 } },
    caps: { perTrip: 8, daily: 20, weekly: 100, monthly: 350 },
    cooldownMin: 20,
    co2: { car: 0.192, auto: 0.065, metro: 0.022, bus: 0.032, ebike: 0.005, walk: 0 },
    catalog: [
        { brand:"Chai Point", item:"₹20 off Chai", cost:250, icon:"☕" },
        { brand:"Niloufer Cafe", item:"Free Irani Chai", cost:400, icon:"🫖" },
        { brand:"Karachi Bakery", item:"₹75 Biscuit Box", cost:900, icon:"🍪" },
        { brand:"HMRL Metro", item:"₹30 Fare Credit", cost:350, icon:"🚇" },
        { brand:"TSRTC", item:"Day Pass Voucher", cost:1200, icon:"🚌" },
        { brand:"Swiggy", item:"₹50 Food Credit", cost:600, icon:"🍱" },
        { brand:"BookMyShow", item:"₹150 Movie Voucher", cost:1800, icon:"🎬" }
    ]
};

// ─── PASS TYPES ──────────────────────────────────────────────────────────
const PASS_TYPES = [
    { id:'single', name:'Single Trip', price:'₹10-75', desc:'One journey', gradient:'linear-gradient(135deg,#667eea,#764ba2)', icon:'🎫' },
    { id:'day', name:'Day Pass', price:'₹99', desc:'Unlimited 24hrs', gradient:'linear-gradient(135deg,#f093fb,#f5576c)', icon:'☀️', popular:true },
    { id:'weekly', name:'Weekly', price:'₹399', desc:'7 days unlimited', gradient:'linear-gradient(135deg,#a18cd1,#fbc2eb)', icon:'📅' },
    { id:'monthly', name:'Monthly', price:'₹999', desc:'30 days unlimited', gradient:'linear-gradient(135deg,#43e97b,#38f9d7)', icon:'🗓️', best:true },
];

// ─── LOCALIZATION ────────────────────────────────────────────────────────
const TRANSLATIONS = {
    en: {
        tab_plan: "Plan", tab_pass: "Pass", tab_eco: "Eco", tab_live: "Live",
        search_from: "Where from?", search_to: "Where to?",
        search_btn: "Find Best Routes", book_btn: "Get HydraPass for Selected",
        pass_type_title: "Select Pass Type", active_pass_title: "Your Active Pass",
        eco_pts: "Eco Points", co2_saved: "CO₂ Saved",
        day_streak: "Day Streak", daily_cap: "Daily Cap",
        rewards_store: "Rewards Store", coach_density: "Coach Density"
    },
    te: {
        tab_plan: "ప్లాన్", tab_pass: "పాస్", tab_eco: "ఎకో", tab_live: "లైవ్",
        search_from: "ఎక్కడి నుండి?", search_to: "ఎక్కడికి?",
        search_btn: "ఉత్తమ మార్గాలను కనుగొనండి", book_btn: "ఎంచుకున్న దానికి హైడ్రాపాస్ పొందండి",
        pass_type_title: "పాస్ రకాన్ని ఎంచుకోండి", active_pass_title: "మీ యాక్టివ్ పాస్",
        eco_pts: "ఎకో పాయింట్లు", co2_saved: "CO₂ ఆదా చేయబడింది",
        day_streak: "డే స్ట్రీక్", daily_cap: "రోజువారీ పరిమితి",
        rewards_store: "రివార్డ్స్ స్టోర్", coach_density: "కోచ్ రద్దీ"
    },
    hi: {
        tab_plan: "योजना", tab_pass: "पास", tab_eco: "इको", tab_live: "लाइव",
        search_from: "कहाँ से?", search_to: "कहाँ तक?",
        search_btn: "सर्वोत्तम मार्ग खोजें", book_btn: "चयनित के लिए हाइड्रापास प्राप्त करें",
        pass_type_title: "पास प्रकार चुनें", active_pass_title: "आपका सक्रिय पास",
        eco_pts: "इको पॉइंट्स", co2_saved: "CO₂ बचाया गया",
        day_streak: "डे स्ट्रीक", daily_cap: "दैनिक सीमा",
        rewards_store: "रिवॉर्ड्स स्टोर", coach_density: "कोच घनत्व"
    }
};

function setLanguage(lang) {
    localStorage.setItem('ht_lang', lang);
    const selectEl = document.getElementById('lang-switcher');
    if (selectEl) selectEl.value = lang;
    
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });
}

// ─── APP STATE ───────────────────────────────────────────────────────────
let map, directionsService, originAutocomplete, destAutocomplete;
let originPlace = null, destPlace = null;
let activePolylines = [], activeMarkers = [];
let destinationCoords = null;
let selectedRouteIdx = 0;
let isMonsoonMode = false;
let isSafeMode = false;

// Simulated Mock Data
const HYDERABAD = { lat: 17.3850, lng: 78.4867 };

let wallet = {
    points: parseInt(localStorage.getItem('ht_pts')) || 0,
    co2: parseFloat(localStorage.getItem('ht_co2')) || 0,
    ptsToday: parseInt(localStorage.getItem('ht_ptsd')) || 0,
    lastTrip: parseInt(localStorage.getItem('ht_lt')) || 0,
    streak: parseInt(localStorage.getItem('ht_str')) || 0,
    trips: JSON.parse(localStorage.getItem('ht_trips') || '[]')
};

// ─── GOOGLE MAPS INIT (called by API callback) ──────────────────────────
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 17.4100, lng: 78.4500 },
        zoom: 12,
        mapId: "DEMO_MAP_ID",
        isFractionalZoomEnabled: true,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
        gestureHandling: 'greedy',
        mapTypeControl: false,
        fullscreenControl: false,
    });

    directionsService = new google.maps.DirectionsService();
    drawNetworkLines();
    setupAutocomplete();
    initBLE();
    renderStore();
    renderPassTypes();
    updateWalletUI();
    resetDailyCaps();
    setLanguage(localStorage.getItem('ht_lang') || 'en');

    showToast('HydraTransit Ready', 'Google Maps loaded — search any address in Hyderabad.');
}

// ─── NETWORK POLYLINES ON MAP ─────────────────────────────────────────
function drawNetworkLines() {
    // Metro Lines
    ['red', 'blue', 'green'].forEach(line => {
        const coords = Object.values(METRO_STATIONS)
            .filter(s => s.line === line)
            .sort((a, b) => a.idx - b.idx)
            .map(s => ({ lat: s.lat, lng: s.lng }));
        new google.maps.Polyline({
            path: coords, map,
            strokeColor: LINE_COLORS[line],
            strokeWeight: 3, strokeOpacity: 0.6,
            geodesic: true
        });
    });
    // MMTS Line (simplified)
    const mmtsCoords = Object.values(MMTS_STATIONS)
        .sort((a, b) => a.idx - b.idx)
        .map(s => ({ lat: s.lat, lng: s.lng }));
    new google.maps.Polyline({
        path: mmtsCoords, map,
        strokeColor: '#00897B',
        strokeWeight: 2, strokeOpacity: 0.5,
        geodesic: true
    });

    // Station markers
    const drawn = new Set();
    
    // Draw Metro
    Object.entries(METRO_STATIONS).forEach(([name, s]) => {
        if (name === 'Ameerpet B' || name === 'MGBS' || name === 'JBS Parade Ground') return;
        const k = `${s.lat},${s.lng}`;
        if (drawn.has(k)) return;
        drawn.add(k);
        new google.maps.Marker({
            position: { lat: s.lat, lng: s.lng }, map,
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 4, fillColor: LINE_COLORS[s.line], fillOpacity: 0.9, strokeColor: '#fff', strokeWeight: 1 },
            title: name
        });
    });

    // Draw MMTS
    Object.entries(MMTS_STATIONS).forEach(([name, s]) => {
        new google.maps.Marker({
            position: { lat: s.lat, lng: s.lng }, map,
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 3, fillColor: '#00897B', fillOpacity: 0.8, strokeColor: '#fff', strokeWeight: 1 },
            title: name
        });
    });

    // Draw Bus Hubs
    Object.entries(BUS_HUBS).forEach(([name, s]) => {
        new google.maps.Marker({
            position: { lat: s.lat, lng: s.lng }, map,
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 3, fillColor: '#7B1FA2', fillOpacity: 0.8, strokeColor: '#fff', strokeWeight: 1 },
            title: name
        });
    });
}

// ─── GOOGLE PLACES AUTOCOMPLETE ──────────────────────────────────────────
function setupAutocomplete() {
    const bounds = new google.maps.LatLngBounds(
        { lat: 17.15, lng: 78.15 }, { lat: 17.65, lng: 78.75 }
    );
    const opts = {
        bounds, componentRestrictions: { country: 'in' },
        fields: ['geometry', 'name', 'formatted_address'],
        strictBounds: false
    };

    originAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('origin-input'), opts
    );
    destAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('dest-input'), opts
    );

    originAutocomplete.addListener('place_changed', () => {
        originPlace = originAutocomplete.getPlace();
    });
    destAutocomplete.addListener('place_changed', () => {
        destPlace = destAutocomplete.getPlace();
    });
}

// ─── TAB SWITCHING ───────────────────────────────────────────────────────
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
    if (tabId === 'ble') scanBLE();
}

// ─── ROUTE SEARCH ────────────────────────────────────────────────────────
async function triggerSearch() {
    const originVal = document.getElementById('origin-input').value;
    const destVal = document.getElementById('dest-input').value;
    
    if (!originVal || !destVal) {
        showToast('Missing Locations', 'Please enter both origin and destination.');
        return;
    }

    const geocoder = new google.maps.Geocoder();
    let o = originPlace?.geometry?.location;
    let d = destPlace?.geometry?.location;

    // Geocode origin if not selected from suggestions
    if (!o) {
        try {
            const res = await geocoder.geocode({ address: originVal + ', Hyderabad' });
            o = res.results[0].geometry.location;
            originPlace = { geometry: { location: o }, name: originVal };
        } catch (e) {
            showToast('Origin Not Found', 'Could not locate the origin address.');
            return;
        }
    }

    // Geocode destination if not selected from suggestions
    if (!d) {
        try {
            const res = await geocoder.geocode({ address: destVal + ', Hyderabad' });
            d = res.results[0].geometry.location;
            destPlace = { geometry: { location: d }, name: destVal };
        } catch (e) {
            showToast('Destination Not Found', 'Could not locate the destination address.');
            return;
        }
    }

    // Show loading skeleton
    const container = document.getElementById('routes-list');
    container.innerHTML = `
        <div class="skeleton-card">
            <div class="skel-line" style="width:60%; height:16px; margin-bottom:8px;"></div>
            <div class="skel-line" style="width:40%; height:12px;"></div>
            <div style="display:flex; justify-content:space-between; margin-top:20px;">
                <div class="skel-line" style="width:80px; height:20px;"></div>
                <div class="skel-line" style="width:60px; height:20px;"></div>
            </div>
        </div>
        <div class="skeleton-card" style="animation-delay: 0.1s">
            <div class="skel-line" style="width:50%; height:16px; margin-bottom:8px;"></div>
            <div class="skel-line" style="width:30%; height:12px;"></div>
        </div>
    `;

    clearMapOverlays();
    currentRoutes = [];
    selectedRouteIdx = -1;

    // Parallel requests for Transit and Driving
    const pTransit = new Promise((resolve) => {
        directionsService.route({
            origin: o, destination: d,
            travelMode: google.maps.TravelMode.TRANSIT,
            transitOptions: { modes: ['SUBWAY','BUS','TRAIN','RAIL'] },
            provideRouteAlternatives: true
        }, (res, status) => resolve({res, status}));
    });

    const pDriving = new Promise((resolve) => {
        directionsService.route({
            origin: o, destination: d,
            travelMode: google.maps.TravelMode.DRIVING
        }, (res, status) => resolve({res, status}));
    });

    Promise.all([pTransit, pDriving]).then(async ([transit, driving]) => {
        currentRoutes = [];

        // Parse transit routes
        if (transit.status === 'OK') {
            transit.res.routes.forEach((route, i) => {
                currentRoutes.push(parseTransitRoute(route, i));
            });
        }
        
        // Always add our robust custom fallback routes (because Google often ignores MMTS entirely)
        const syntheticRoutes = await generateAllSyntheticRoutes(o, d);
        syntheticRoutes.forEach(r => currentRoutes.push(r));

        // Parse driving route
        if (driving.status === 'OK') {
            currentRoutes.push(parseDrivingRoute(driving.res.routes[0]));
        }

        if (currentRoutes.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fa-solid fa-route"></i><p>No transit routes found between these locations in Hyderabad.</p></div>';
            showToast('No Routes', 'Google Maps could not find a transit route here.');
            return;
        }

        // Tag Best and Eco
        processAndSortRoutes();
        renderRouteCards();
        selectRoute(0);
        showToast('Routes Found', 'Displaying fastest and eco-friendly options.');
    }).catch(e => {
        console.error(e);
        container.innerHTML = `<div class="empty-state" style="text-align:left; color:#f87171;"><i class="fa-solid fa-triangle-exclamation"></i><p>Error calculating routes:</p><pre style="font-size:10px; white-space:pre-wrap;">${e.stack || e.message || e}</pre></div>`;
    });
}

function processAndSortRoutes() {
    // Separate baseline (driving) from transit
    const transitRoutes = currentRoutes.filter(r => !r.baseline);
    const drivingRoute = currentRoutes.find(r => r.baseline);

    if (transitRoutes.length > 0) {
        // Find Fastest
        let fastestIdx = 0; let minDur = Infinity;
        // Find Eco
        let ecoBestIdx = 0; let maxCo2 = -1;
        // Find Cheapest
        let cheapestIdx = 0; let minFare = Infinity;

        transitRoutes.forEach((r, i) => {
            r.recommended = false; r.fastest = false; r.cheapest = false; r.bestOverall = false;
            if (r.durationValue < minDur) { minDur = r.durationValue; fastestIdx = i; }
            
            const co2 = parseFloat(r.co2Saved);
            if (co2 > maxCo2) { maxCo2 = co2; ecoBestIdx = i; }

            const fValue = r.fare === 'Free' ? 0 : parseInt(r.fare.replace(/\D/g, '')) || 0;
            if (fValue < minFare) { minFare = fValue; cheapestIdx = i; }
        });

        transitRoutes[fastestIdx].fastest = true;
        if (maxCo2 > 0) transitRoutes[ecoBestIdx].recommended = true;
        transitRoutes[cheapestIdx].cheapest = true;

        // Calculate Best Overall
        let bestOverallIdx = 0;
        let bestScore = Infinity;
        transitRoutes.forEach((r, i) => {
            const fValue = r.fare === 'Free' ? 0 : parseInt(r.fare.replace(/\D/g, '')) || 0;
            const co2 = parseFloat(r.co2Saved);
            
            // Penalize Auto Usage heavily
            let cabCount = 0;
            let cabDist = 0;
            let walkDist = 0;
            let metroDist = 0;
            r.segments.forEach(s => { 
                if (s.type === 'cab') { cabCount++; cabDist += s.dist; } 
                if (s.type === 'walk') { walkDist += s.dist; }
                if (s.type === 'metro') { metroDist += s.dist; }
            });
            const cabPenalty = (cabCount * 100) + (cabDist * 10); // Massive penalty for autos

            let monsoonPenalty = 0;
            if (isMonsoonMode) {
                // Massive penalty for walking and cabs during heavy rain
                monsoonPenalty = (walkDist * 100) + (cabDist * 150);
                // Bonus for taking metro (dry, safe)
                monsoonPenalty -= (metroDist * 10);
                
                // Simulated surge pricing for cabs
                if (cabDist > 0 && fValue > 0) {
                    const surgeFare = Math.round(fValue * 1.5);
                    r.fare = `₹${surgeFare}`;
                }
            }

            let safePenalty = 0;
            if (isSafeMode) {
                // Penalty for walking (to avoid dark/unsafe areas)
                safePenalty = (walkDist * 150);
                
                // Dynamically rename buses to She Shuttles for the demo
                r.segments.forEach(s => {
                    if (s.type === 'bus') {
                        s.name = "Cyberabad She Shuttle";
                        s.color = "#ec4899"; // pink color
                    }
                });
            }

            const score = (r.durationValue / 60) * 2 + fValue - (co2 * 10) + cabPenalty + monsoonPenalty + safePenalty;
            if (score < bestScore) {
                bestScore = score;
                bestOverallIdx = i;
            }
        });
        transitRoutes[bestOverallIdx].bestOverall = true;
        if (isMonsoonMode) {
            transitRoutes[bestOverallIdx].rainSafe = true;
        }
        if (isSafeMode) {
            transitRoutes[bestOverallIdx].safeRoute = true;
        }

        // Sort: Best Overall, then Fastest, then Eco, then others
        transitRoutes.sort((a, b) => {
            if (a.bestOverall) return -1;
            if (b.bestOverall) return 1;
            if (a.fastest) return -1;
            if (b.fastest) return 1;
            return a.durationValue - b.durationValue;
        });

        currentRoutes = [...transitRoutes, ...(drivingRoute ? [drivingRoute] : [])];
        currentRoutes.forEach((r, i) => r.idx = i);
    }
}

// ─── PARSE GOOGLE TRANSIT RESPONSE ───────────────────────────────────────
function parseTransitRoute(route, idx) {
    const leg = route.legs[0];
    const segments = [];
    let totalTransitKm = 0;
    const polylinePaths = [];

    leg.steps.forEach(step => {
        const distKm = step.distance.value / 1000;
        const path = step.path || google.maps.geometry?.encoding?.decodePath(step.polyline?.points) || [];

        if (step.travel_mode === 'TRANSIT') {
            const td = step.transit_details || {};
            const lineObj = td.line || {};
            const vehicle = lineObj.vehicle || {};
            const vType = vehicle.type || 'BUS';
            const lineName = lineObj.short_name || lineObj.name || 'Transit';
            const lineColor = lineObj.color || TRANSIT_TYPE_COLORS[vType] || '#38bdf8';
            totalTransitKm += distKm;

            segments.push({
                type: vType === 'SUBWAY' ? 'metro' : vType === 'BUS' ? 'bus' : 'train',
                name: lineName,
                fullName: lineObj.name || lineName,
                from: td.departure_stop?.name || 'Origin',
                to: td.arrival_stop?.name || 'Destination',
                stops: td.num_stops || 0,
                depTime: td.departure_time?.text || 'Now',
                arrTime: td.arrival_time?.text || 'Later',
                dist: distKm,
                color: lineColor,
                headSign: td.headsign || ''
            });
            polylinePaths.push({ path: step.path, color: lineColor, weight: 6 });
        } else if (step.travel_mode === 'WALKING') {
            if (distKm > 0.05) {
                segments.push({
                    type: 'walk', name: `Walk ${Math.round(distKm*1000)}m`,
                    dist: distKm, duration: step.duration.text
                });
                polylinePaths.push({ path: step.path, color: '#a78bfa', weight: 3, dash: true });
            }
        }
    });

    const totalDist = leg.distance.value / 1000;
    const co2Car = totalDist * ECO_MODEL.co2.car;
    const co2Transit = totalTransitKm * ECO_MODEL.co2.metro;
    const co2Saved = Math.max(0, co2Car - co2Transit);
    const isMultiModal = segments.filter(s => s.type !== 'walk').length >= 2;
    const pts = calcPoints(totalTransitKm, isMultiModal);

    return {
        type: 'transit', idx,
        title: segments.filter(s=>s.type!=='walk').map(s=>`${s.type==='metro'?'🚇':s.type==='bus'?'🚌':'🚆'} ${s.name}`).join(' → ') || 'Transit',
        subtitle: `${leg.departure_time.text} → ${leg.arrival_time.text}`,
        duration: leg.duration.text,
        distance: totalDist.toFixed(1) + ' km',
        fare: estimateFare(segments),
        segments, polylinePaths,
        co2Saved: co2Saved.toFixed(2),
        points: pts,
        recommended: false, // Set in processAndSortRoutes
        fastest: false,
        depTime: leg.departure_time.text,
        arrTime: leg.arrival_time.text,
        durationValue: leg.duration.value, // for sorting
        rawRoute: route
    };
}

function parseDrivingRoute(route) {
    const leg = route.legs[0];
    const totalDist = leg.distance.value / 1000;
    return {
        type: 'driving', idx: 99,
        title: '🚗 Private Cab (Ola/Uber)',
        subtitle: 'Door-to-door, high emission',
        duration: leg.duration.text,
        durationValue: leg.duration.value,
        distance: totalDist.toFixed(1) + ' km',
        fare: '₹' + Math.round(50 + totalDist * 14),
        segments: [{ type: 'cab', name: 'Private Ride', dist: totalDist }],
        polylinePaths: [{ path: route.overview_path, color: '#f87171', weight: 4, dash: true }],
        co2Saved: '0', points: 0, baseline: true,
        rawRoute: route
    };
}

function getLiveTransitDetails(type, fromName, toName) {
    let routeNum = '';
    const etaMins = Math.floor(Math.random() * 12) + 1;
    
    if (type === 'bus') {
        const busRoutes = ['219', '9X', '113M', '1Z', '10H', '47L', '222A', '18C', '11W'];
        routeNum = 'Bus ' + busRoutes[(fromName.length + toName.length) % busRoutes.length];
    } else if (type === 'metro') {
        const lines = ['Red Line Metro', 'Blue Line Metro', 'Green Line Metro'];
        routeNum = lines[(fromName.length) % lines.length];
    } else if (type === 'train') {
        const lines = ['HL Line (MMTS)', 'FL Line (MMTS)', 'UL Line (MMTS)'];
        routeNum = lines[(toName.length) % lines.length];
    }
    
    return { routeNum, liveETA: `Live: ${etaMins} min${etaMins>1?'s':''} away` };
}

function formatDuration(mins) {
    if (mins < 60) return `${mins} min`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
}

function estimateFare(segments) {
    let total = 0;
    segments.forEach(s => {
        if (s.type === 'metro') {
            if (s.dist <= 2) total += 10; else if (s.dist <= 6) total += 20;
            else if (s.dist <= 12) total += 30; else if (s.dist <= 20) total += 45;
            else total += 60;
        } else if (s.type === 'bus') {
            total += Math.round(Math.min(10 + s.dist * 1.5, 55));
        } else if (s.type === 'train') {
            total += Math.round(5 + s.dist * 0.5);
        } else if (s.type === 'cab') {
            total += Math.round(30 + s.dist * 15); // Realistic Uber/Ola Auto rates (Base ₹30 + ₹15/km)
        }
    });
    return total === 0 ? 'Free' : '₹' + total;
}

function calcCO2Saved(totalDist, segments) {
    const carBaseline = totalDist * ECO_MODEL.co2.car;
    let actualEmissions = 0;
    segments.forEach(s => {
        if (s.type === 'cab') actualEmissions += s.dist * ECO_MODEL.co2.auto;
        else if (s.type === 'bus') actualEmissions += s.dist * ECO_MODEL.co2.bus;
        else if (s.type === 'metro' || s.type === 'train') actualEmissions += s.dist * ECO_MODEL.co2.metro;
    });
    return (carBaseline - actualEmissions).toFixed(2);
}

function calcRoutePoints(segments, isMultiModal) {
    let greenDist = 0;
    segments.forEach(s => { if (s.type !== 'cab') greenDist += s.dist; });
    return calcPoints(greenDist, isMultiModal);
}

function calcPoints(distKm, isMultiModal) {
    let pts = distKm * ECO_MODEL.earn.basePerKm;
    if (isMultiModal) pts *= ECO_MODEL.earn.multiModal;
    const hr = new Date().getHours();
    if ((hr >= 7 && hr <= 9) || (hr >= 17 && hr <= 20)) pts *= ECO_MODEL.earn.peakHour;
    const s = wallet.streak;
    if (s >= 10) pts *= ECO_MODEL.earn.streak[10];
    else if (s >= 5) pts *= ECO_MODEL.earn.streak[5];
    else if (s >= 3) pts *= ECO_MODEL.earn.streak[3];
    return Math.min(Math.round(pts), ECO_MODEL.caps.perTrip);
}

// ─── RENDER ROUTE CARDS ──────────────────────────────────────────────────
function renderRouteCards() {
    const container = document.getElementById('routes-list');
    if (currentRoutes.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fa-solid fa-triangle-exclamation"></i><p>No transit routes found. Try different locations.</p></div>';
        return;
    }
    container.innerHTML = currentRoutes.map((r, i) => `
        <div class="route-card glass-card ${r.bestOverall?'recommended':''} ${r.baseline?'baseline':''}"
             onclick="selectRoute(${i})" style="animation-delay:${i*80}ms">
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;">
                ${r.bestOverall && !r.rainSafe && !r.safeRoute ? '<div class="route-badge" style="position:relative; top:0; right:0; margin:0; background: linear-gradient(135deg, #FFD700, #F7931A); color:#000;">🌟 Best Overall</div>' : ''}
                ${r.rainSafe ? '<div class="route-badge" style="position:relative; top:0; right:0; margin:0; background: #3B82F6; color:#FFF;">☔ Rain Safe</div>' : ''}
                ${r.safeRoute ? '<div class="route-badge" style="position:relative; top:0; right:0; margin:0; background: #34A853; color:#FFF;">🛡️ Safe Route</div>' : ''}
                ${r.recommended ? '<div class="route-badge eco" style="position:relative; top:0; right:0; margin:0;">🌿 Eco Best</div>' : ''}
                ${r.fastest ? '<div class="route-badge fastest" style="position:relative; top:0; right:0; margin:0;">⚡ Fastest</div>' : ''}
                ${r.cheapest ? '<div class="route-badge" style="position:relative; top:0; right:0; margin:0; background:#10b981; color:#fff;">💰 Cheapest</div>' : ''}
                ${r.baseline ? '<div class="route-badge warn" style="position:relative; top:0; right:0; margin:0;">⚠ Baseline</div>' : ''}
            </div>
            <div class="route-header">
                <div>
                    <div class="route-title">${r.title}</div>
                    <div class="route-sub">${r.subtitle}</div>
                </div>
                <div class="route-price-block">
                    <span class="route-price">${r.fare}</span>
                    <span class="route-time"><i class="fa-regular fa-clock"></i> ${r.duration}</span>
                </div>
            </div>
            ${r.type === 'transit' ? renderTimeline(r.segments) : ''}
            <div class="route-meta">
                <span><i class="fa-solid fa-road"></i> ${r.distance}</span>
                ${parseFloat(r.co2Saved) > 0 ? `<span class="eco-chip"><i class="fa-solid fa-leaf"></i> -${r.co2Saved}kg CO₂ <span class="pts-chip">+${r.points}pts</span></span>` : '<span class="no-eco"><i class="fa-solid fa-car"></i> No credits</span>'}
            </div>
        </div>
    `).join('');
}

function renderTimeline(segments) {
    return '<div class="journey-timeline">' + segments.map((s, i) => {
        const icon = s.type === 'metro' ? 'fa-train-subway' : s.type === 'bus' ? 'fa-bus' : s.type === 'train' ? 'fa-train' : s.type === 'cab' ? 'fa-taxi' : 'fa-person-walking';
        const dotClass = s.type === 'walk' ? 'walk' : s.type === 'cab' ? 'walk' : s.type;
        const isLast = i === segments.length - 1;
        let detail = '';
        if (s.type !== 'walk' && s.type !== 'cab') {
            const isLive = s.depTime && s.depTime.includes('Live');
            const liveBadge = isLive ? `<span class="live-dot pulse" style="display:inline-block;width:8px;height:8px;background:#10b981;border-radius:50%;margin-right:4px;animation:pulse 1.5s infinite;"></span>` : '';
            detail = `<div class="tl-transit-info">
                <span class="tl-line-badge" style="background:${s.color || '#38bdf8'}">${s.name || s.type}</span>
                <span class="tl-detail">${s.from} → ${s.to}</span>
                <span class="tl-stops" style="${isLive?'color:#10b981;font-weight:600;':''}">${liveBadge} ${s.stops} stops · ${s.depTime}</span>
            </div>`;
        } else {
            detail = `<span class="tl-walk-text" style="${s.type==='cab'?'color:#fbbf24;':''}">${s.name} (${s.duration || ''})</span>`;
        }
        return `<div class="tl-leg">
            <div class="tl-track"><div class="tl-dot ${dotClass}"></div>${!isLast ? '<div class="tl-line"></div>' : ''}</div>
            <div class="tl-content"><i class="fa-solid ${icon} tl-icon"></i>${detail}</div>
        </div>`;
    }).join('') + '</div>';
}

// ─── SELECT ROUTE & DRAW ON MAP ──────────────────────────────────────────
function selectRoute(idx) {
    selectedRouteIdx = idx;
    document.querySelectorAll('.route-card').forEach((c, i) => {
        c.classList.toggle('selected', i === idx);
    });
    const route = currentRoutes[idx];
    drawRouteOnMap(route);
    updatePassForRoute(route);

    // Enable booking if not baseline
    const btn = document.getElementById('book-btn');
    btn.disabled = route.baseline;
    btn.style.opacity = route.baseline ? '0.3' : '1';
    btn.style.cursor = route.baseline ? 'not-allowed' : 'pointer';
}

function clearMapOverlays() {
    activePolylines.forEach(p => p.setMap(null));
    activeMarkers.forEach(m => m.setMap(null));
    activePolylines = [];
    activeMarkers = [];
}

function drawRouteOnMap(route) {
    clearMapOverlays();
    const bounds = new google.maps.LatLngBounds();

    route.polylinePaths.forEach(pp => {
        if (!pp.path || pp.path.length === 0) return;
        const opts = {
            path: pp.path, map,
            strokeColor: pp.color || '#38bdf8',
            strokeWeight: pp.weight || 5,
            strokeOpacity: 0.85,
        };
        if (pp.dash) {
            opts.strokeOpacity = 0;
            opts.icons = [{
                icon: { path: 'M 0,-1 0,1', strokeOpacity: 0.7, strokeColor: pp.color, scale: 3 },
                offset: '0', repeat: '12px'
            }];
        }
        const poly = new google.maps.Polyline(opts);
        activePolylines.push(poly);
        pp.path.forEach(p => bounds.extend(p));
    });

    // Origin/Dest markers
    if (originPlace?.geometry) {
        const m = new google.maps.Marker({
            position: originPlace.geometry.location, map,
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: '#4ade80', fillOpacity: 1, strokeColor: '#fff', strokeWeight: 2 },
            title: 'Origin'
        });
        activeMarkers.push(m);
        bounds.extend(originPlace.geometry.location);
    }
    if (destPlace?.geometry) {
        const m = new google.maps.Marker({
            position: destPlace.geometry.location, map,
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: '#f43f5e', fillOpacity: 1, strokeColor: '#fff', strokeWeight: 2 },
            title: 'Destination'
        });
        activeMarkers.push(m);
        bounds.extend(destPlace.geometry.location);
    }

    const currentCenter = map.getCenter();
    if (currentCenter) {
        map.panTo(bounds.getCenter());
        setTimeout(() => {
            map.fitBounds(bounds, { padding: { top: 60, bottom: 60, left: 60, right: 60 } });
        }, 200);
    } else {
        map.fitBounds(bounds, { padding: { top: 60, bottom: 60, left: 60, right: 60 } });
    }
}

// ─── HYDRAPASS TICKET ────────────────────────────────────────────────────
function updatePassForRoute(route) {
    const inv = document.getElementById('pass-invoice');
    if (route.baseline) {
        inv.innerHTML = '<div class="invoice-row"><span>Private rides are not eligible for HydraPass</span></div>';
        return;
    }
    const segs = route.segments.filter(s => s.type !== 'walk');
    inv.innerHTML = `
        <div class="invoice-row"><span class="inv-label">Route</span><span>${segs.map(s=>s.name||s.type).join(' → ')}</span></div>
        <div class="invoice-row"><span class="inv-label">Departure</span><span>${route.depTime || route.subtitle}</span></div>
        <div class="invoice-row"><span class="inv-label">Distance</span><span>${route.distance}</span></div>
        <div class="invoice-row"><span class="inv-label">CO₂ Saved</span><span style="color:var(--color-green)">${route.co2Saved} kg</span></div>
        <div class="invoice-row total"><span>Total Fare</span><span style="color:var(--color-cyan)">${route.fare}</span></div>
    `;
}

function renderPassTypes() {
    const c = document.getElementById('pass-type-grid');
    if (!c) return;
    c.innerHTML = PASS_TYPES.map(p => `
        <div class="pass-option ${p.id === selectedPassType ? 'selected' : ''}" onclick="selectPass('${p.id}')">
            ${p.popular ? '<div class="pass-tag popular">Popular</div>' : ''}
            ${p.best ? '<div class="pass-tag best">Best Value</div>' : ''}
            <div class="pass-card-mini" style="background:${p.gradient}">
                <span class="pass-icon">${p.icon}</span>
                <span class="pass-name">${p.name}</span>
                <span class="pass-price">${p.price}</span>
            </div>
            <span class="pass-desc">${p.desc}</span>
        </div>
    `).join('');
}

function selectPass(id) {
    selectedPassType = id;
    renderPassTypes();
}

function purchasePass() {
    const route = currentRoutes[selectedRouteIdx];
    if (!route || route.baseline) return;

    // Cooldown check
    const now = Date.now();
    const msSinceLast = now - wallet.lastTrip;
    if (msSinceLast < ECO_MODEL.cooldownMin * 60000 && wallet.lastTrip > 0) {
        const wait = Math.ceil((ECO_MODEL.cooldownMin * 60000 - msSinceLast) / 60000);
        showToast('Cooldown', `Next credit in ${wait} min`);
    }

    switchTab('pass');
    const passId = 'HT-' + Date.now().toString(36).toUpperCase();

    // Award points (capped)
    let pts = route.points;
    if (wallet.ptsToday + pts > ECO_MODEL.caps.daily) {
        pts = Math.max(0, ECO_MODEL.caps.daily - wallet.ptsToday);
    }

    wallet.points += pts;
    wallet.co2 += parseFloat(route.co2Saved);
    wallet.ptsToday += pts;
    wallet.lastTrip = now;

    // Save trip history
    wallet.trips.unshift({
        id: passId, date: new Date().toISOString(),
        route: route.title, fare: route.fare,
        co2: route.co2Saved, pts,
        segments: route.segments.filter(s=>s.type!=='walk').map(s=>s.name).join(' → ')
    });
    if (wallet.trips.length > 20) wallet.trips = wallet.trips.slice(0, 20);
    saveWallet();
    updateWalletUI();

    // Generate ticket card
    generateTicket(passId, route, pts);
    showToast('Hydra-Pass Issued! 🎫', `${passId} — +${pts} eco points earned`);
}

function generateTicket(passId, route, pts) {
    const segs = route.segments.filter(s => s.type !== 'walk');
    const mainSeg = segs[0] || {};
    const modeGradient = mainSeg.type === 'bus'
        ? 'linear-gradient(135deg,#f093fb,#f5576c)'
        : mainSeg.type === 'train'
        ? 'linear-gradient(135deg,#4facfe,#00f2fe)'
        : 'linear-gradient(135deg,#667eea,#764ba2)';
    const modeLabel = mainSeg.type === 'bus' ? 'BUS' : mainSeg.type === 'train' ? 'MMTS' : 'METRO';

    const ticketArea = document.getElementById('ticket-card-area');
    ticketArea.innerHTML = `
        <div class="hydra-ticket revealing" style="--mode-gradient:${modeGradient}">
            <div class="ticket-status active"><span class="status-dot"></span> ACTIVE</div>
            <div class="ticket-header-row">
                <div class="ticket-brand"><i class="fa-solid fa-route"></i> HydraTransit</div>
                <div class="ticket-mode-badge">${modeLabel}</div>
            </div>
            <div class="ticket-route-row">
                <div class="ticket-station">
                    <span class="stn-name">${mainSeg.from || originPlace?.name || 'Origin'}</span>
                </div>
                <div class="ticket-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="ticket-station dest">
                    <span class="stn-name">${mainSeg.to || destPlace?.name || 'Destination'}</span>
                </div>
            </div>
            ${segs.length > 0 ? `<div class="ticket-line-info" style="color:${mainSeg.color||'#fff'}">
                <span class="line-dot" style="background:${mainSeg.color||'#fff'}"></span>
                ${mainSeg.fullName || mainSeg.name || ''} · ${mainSeg.stops||''} stops
            </div>` : ''}
            <div class="ticket-details-grid">
                <div><span class="td-label">DATE</span><span class="td-val">${new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</span></div>
                <div><span class="td-label">TIME</span><span class="td-val">${route.depTime || new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</span></div>
                <div><span class="td-label">FARE</span><span class="td-val fare-val">${route.fare}</span></div>
                <div><span class="td-label">PASS</span><span class="td-val">${PASS_TYPES.find(p=>p.id===selectedPassType)?.name || 'Single'}</span></div>
            </div>
            <div class="ticket-divider"></div>
            <div class="ticket-qr-area">
                <div class="qr-glow-ring"></div>
                <canvas id="qr-canvas" width="140" height="140"></canvas>
                <div class="qr-scan-line"></div>
            </div>
            <div class="ticket-id">${passId}</div>
            <div class="ticket-eco-footer">
                <i class="fa-solid fa-leaf"></i> ${route.co2Saved} kg CO₂ saved · +${pts} eco points
            </div>
        </div>
    `;
    setTimeout(() => drawQR(passId), 100);
}

function drawQR(passId) {
    const canvas = document.getElementById('qr-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const s = 140;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, s, s);

    // Position anchors
    drawAnchor(ctx, 8, 8, 30);
    drawAnchor(ctx, s - 38, 8, 30);
    drawAnchor(ctx, 8, s - 38, 30);

    // Data modules (seeded from passId)
    let seed = passId.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const rng = () => { seed = (seed * 16807 + 7) % 2147483647; return seed / 2147483647; };
    ctx.fillStyle = '#1a1a2e';
    for (let x = 40; x < s - 8; x += 6) {
        for (let y = 8; y < s - 8; y += 6) {
            if (x < 40 && y < 40) continue;
            if (x > s - 42 && y < 40) continue;
            if (x < 40 && y > s - 42) continue;
            if (rng() > 0.4) ctx.fillRect(x, y, 4, 4);
        }
    }
    // Center brand
    ctx.fillStyle = '#667eea';
    ctx.fillRect(s/2-12, s/2-12, 24, 24);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HT', s/2, s/2+3);
}

function drawAnchor(ctx, x, y, s) {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(x, y, s, s);
    ctx.fillStyle = '#fff';
    ctx.fillRect(x+4, y+4, s-8, s-8);
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(x+8, y+8, s-16, s-16);
}

// ─── BLE RADAR ───────────────────────────────────────────────────────────
function initBLE() {
    const coaches = ['C1 Front','C2','C3','C4 Mid','C5','C6 Rear'];
    document.getElementById('coach-list').innerHTML = coaches.map(c => {
        const p = Math.floor(Math.random()*70)+15;
        return coachRow(c, p);
    }).join('');
}

function coachRow(name, pct) {
    const cls = pct < 45 ? 'low' : pct < 75 ? 'mid' : 'high';
    return `<div class="coach-row"><span class="coach-id">${name}</span>
        <div class="bar-track"><div class="bar-fill bar-${cls}" style="width:${pct}%"></div></div>
        <span class="bar-pct bar-${cls}-text">${pct}%</span></div>`;
}

async function scanBLE() {
    const t = document.getElementById('ble-timer');
    t.textContent = 'Connecting to BLE...';
    try {
        if (!navigator.bluetooth) throw new Error("No BLE available on this browser/OS.");
        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        t.textContent = 'Connected: ' + (device.name || 'HYDMETRO_BLE');
        showToast('BLE Radar Active', 'Successfully connected to physical coach beacon.');
        
        const coaches = ['C1 Front (Women)','C2','C3','C4 Mid','C5','C6 Rear'];
        document.getElementById('coach-list').innerHTML = coaches.map(c => coachRow(c, Math.floor(Math.random()*50)+10)).join('');
    } catch (e) {
        let n = 3;
        const iv = setInterval(() => {
            n--;
            if (n <= 0) {
                clearInterval(iv);
                t.textContent = 'Connected (Mock)';
                const coaches = ['C1 Front (Women)','C2','C3','C4 Mid','C5','C6 Rear'];
                document.getElementById('coach-list').innerHTML = coaches.map(c => coachRow(c, Math.floor(Math.random()*85)+5)).join('');
                showToast('BLE Radar Active', 'Using Mock Radar (Bluetooth disabled or denied)');
            } else {
                t.textContent = `Scanning... ${n}s`;
            }
        }, 800);
    }
}

// ─── ECO CREDITS WALLET ──────────────────────────────────────────────────
function renderStore() {
    const c = document.getElementById('store-list');
    if (!c) return;
    c.innerHTML = ECO_MODEL.catalog.map(it => `
        <div class="store-item">
            <div class="store-info"><h4>${it.icon} ${it.brand}</h4><p>${it.item}</p></div>
            <div class="store-cost" onclick="redeem('${it.brand}',${it.cost})">${it.cost} PTS</div>
        </div>
    `).join('');
}

function updateWalletUI() {
    const p = document.getElementById('user-pts');
    const c = document.getElementById('user-co2');
    const d = document.getElementById('daily-cap');
    const s = document.getElementById('streak-val');
    if (p) p.textContent = wallet.points;
    if (c) c.textContent = wallet.co2.toFixed(1);
    if (d) d.textContent = `${wallet.ptsToday}/${ECO_MODEL.caps.daily}`;
    if (s) s.textContent = wallet.streak;
}

function redeem(brand, cost) {
    if (wallet.points < cost) {
        showToast('Insufficient', `Need ${cost - wallet.points} more pts`);
        return;
    }
    wallet.points -= cost;
    saveWallet();
    updateWalletUI();
    showToast('Redeemed! 🎉', `${brand} voucher claimed`);
}

function saveWallet() {
    localStorage.setItem('ht_pts', wallet.points);
    localStorage.setItem('ht_co2', wallet.co2);
    localStorage.setItem('ht_ptsd', wallet.ptsToday);
    localStorage.setItem('ht_lt', wallet.lastTrip);
    localStorage.setItem('ht_str', wallet.streak);
    localStorage.setItem('ht_trips', JSON.stringify(wallet.trips));
}

function resetDailyCaps() {
    const last = localStorage.getItem('ht_date');
    const today = new Date().toDateString();
    if (last !== today) {
        if (last) { const d = (new Date(today) - new Date(last)) / 86400000; wallet.streak = d <= 1 ? wallet.streak + 1 : 0; }
        wallet.ptsToday = 0;
        localStorage.setItem('ht_date', today);
        saveWallet();
    }
}

// ─── TOAST ───────────────────────────────────────────────────────────────
function showToast(title, desc) {
    const t = document.getElementById('toast');
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-desc').textContent = desc;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
}

// ─── CUSTOM FALLBACK ROUTING ENGINE ──────────────────────────────────────
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

async function getRoadLeg(from, to, mode) {
    try {
        const res = await new Promise((resolve) => directionsService.route({
            origin: from, destination: to, travelMode: google.maps.TravelMode[mode]
        }, (r, s) => resolve({res: r, status: s})));
        if (res.status === 'OK') {
            const leg = res.res.routes[0].legs[0];
            return {
                dist: leg.distance.value / 1000,
                duration: Math.ceil(leg.duration.value / 60),
                durationText: leg.duration.text,
                path: res.res.routes[0].overview_path
            };
        }
    } catch(e) {}
    
    // Fallback to straight line
    const lat1 = typeof from.lat === 'function' ? from.lat() : from.lat;
    const lng1 = typeof from.lng === 'function' ? from.lng() : from.lng;
    const lat2 = typeof to.lat === 'function' ? to.lat() : to.lat;
    const lng2 = typeof to.lng === 'function' ? to.lng() : to.lng;
    const dist = getDistance(lat1, lng1, lat2, lng2) * 1.3;
    const speed = mode === 'WALKING' ? 5 : 25; // km/h
    const dur = Math.ceil((dist / speed) * 60);
    return {
        dist: dist, duration: dur, durationText: dur + ' min',
        path: [{lat:lat1,lng:lng1}, {lat:lat2,lng:lng2}]
    };
}

function findNearestByDB(latLng, db, mode) {
    let best = null, minDist = Infinity;
    const lat = typeof latLng.lat === 'function' ? latLng.lat() : latLng.lat;
    const lng = typeof latLng.lng === 'function' ? latLng.lng() : latLng.lng;
    Object.entries(db).forEach(([name, s]) => {
        const d = getDistance(lat, lng, s.lat, s.lng);
        if (d < minDist) { minDist = d; best = { name, mode, ...s }; }
    });
    return { ...best, dist: minDist };
}

function getStationsOnLine(line, startIdx, endIdx) {
    let all = [];
    if (line.startsWith('mmts')) {
        all = Object.entries(MMTS_STATIONS).map(([n,s]) => ({name:n, ...s}));
    } else {
        all = Object.entries(METRO_STATIONS).filter(([n, s]) => s.line === line).map(([n,s]) => ({name:n, ...s}));
    }
    all.sort((a,b) => a.idx - b.idx);
    const min = Math.min(startIdx, endIdx);
    const max = Math.max(startIdx, endIdx);
    let path = all.filter(s => s.idx >= min && s.idx <= max);
    if (startIdx > endIdx) path.reverse();
    return path;
}

async function buildSyntheticRoute(o, d, s1, s2, modeClass) {
    if (!s1 || !s2 || s1.name === s2.name) return null;

    const startMode = s1.dist > 1.5 ? 'DRIVING' : 'WALKING';
    const endMode = s2.dist > 1.5 ? 'DRIVING' : 'WALKING';

    const [leg1, leg2] = await Promise.all([
        getRoadLeg(o, {lat: s1.lat, lng: s1.lng}, startMode),
        getRoadLeg({lat: s2.lat, lng: s2.lng}, d, endMode)
    ]);

    let transitDist = 0, transitMins = 0;
    let segments = [], polylinePaths = [];
    
    if (leg1.dist > 0.05) {
        let startDurStr = leg1.durationText;
        let legType = startMode === 'WALKING' ? 'walk' : 'cab';
        let legName = `${startMode === 'WALKING' ? 'Walk' : 'Auto'} to ${s1.name}`;
        if (startMode === 'DRIVING') {
            if (leg1.dist > 3) {
                legType = 'bus'; legName = `Feeder Bus to ${s1.name}`;
                leg1.duration = Math.ceil(leg1.dist * 4) + 5; startDurStr = `${leg1.duration} mins (Feeder)`;
            } else { leg1.duration += 10; startDurStr += ' (+10m Uber Wait)'; }
        }
        segments.push({ type: legType, name: legName, dist: leg1.dist, duration: startDurStr });
        polylinePaths.push({ path: leg1.path, color: startMode==='WALKING'?'#a78bfa':legType==='bus'?'#38bdf8':'#fbbf24', weight: 3, dash: true });
    }

    if (s1.mode === s2.mode && (s1.mode === 'metro' || s1.mode === 'train') && s1.line === s2.line) {
        const stns = getStationsOnLine(s1.line, s1.idx, s2.idx);
        let legPath = stns.map(s => ({lat: s.lat, lng: s.lng}));
        for(let i=1; i<stns.length; i++) transitDist += getDistance(stns[i-1].lat, stns[i-1].lng, stns[i].lat, stns[i].lng);
        transitMins = Math.ceil(transitDist * (s1.mode==='train'?1.5:2));
        const color = s1.mode === 'metro' ? LINE_COLORS[s1.line] : '#00897B';
        const live = getLiveTransitDetails(s1.mode, s1.name, s2.name);
        segments.push({
            type: s1.mode, name: live.routeNum,
            fullName: (s1.mode==='metro' ? s1.line + ' Line Metro' : 'MMTS Train'),
            from: s1.name, to: s2.name, stops: stns.length-1,
            depTime: live.liveETA, arrTime: '+' + transitMins + ' min',
            dist: transitDist, color: color
        });
        polylinePaths.push({ path: legPath, color: color, weight: 6 });
    } else {
        const tLeg = await getRoadLeg({lat: s1.lat, lng: s1.lng}, {lat: s2.lat, lng: s2.lng}, 'DRIVING');
        transitDist = tLeg.dist;
        let pMode = s1.mode;
        if (s2.mode === 'train') pMode = 'train';
        if (s2.mode === 'metro' && s1.mode === 'bus') pMode = 'metro';
        const color = pMode === 'metro' ? (LINE_COLORS[s2.line]||LINE_COLORS[s1.line]||'#f43f5e') : pMode === 'train' ? '#00897B' : '#7B1FA2';
        transitMins = Math.ceil(transitDist * (pMode==='train'?1.5:pMode==='metro'?2:3));
        const live = getLiveTransitDetails(pMode, s1.name, s2.name);
        segments.push({
            type: pMode, name: live.routeNum,
            fullName: 'Multi-Modal Transport',
            from: s1.name, to: s2.name, stops: Math.ceil(transitDist/1.5),
            depTime: live.liveETA, arrTime: '+' + transitMins + ' min',
            dist: transitDist, color: color
        });
        polylinePaths.push({ path: tLeg.path, color: color, weight: 6 });
    }

    if (leg2.dist > 0.05) {
        let endDurStr = leg2.durationText;
        let legType = endMode === 'WALKING' ? 'walk' : 'cab';
        let legName = `${endMode === 'WALKING' ? 'Walk' : 'Auto'} from ${s2.name}`;
        if (endMode === 'DRIVING') {
            if (leg2.dist > 3) {
                legType = 'bus'; legName = `Feeder Bus from ${s2.name}`;
                leg2.duration = Math.ceil(leg2.dist * 4) + 5; endDurStr = `${leg2.duration} mins (Feeder)`;
            } else { leg2.duration += 10; endDurStr += ' (+10m Uber Wait)'; }
        }
        segments.push({ type: legType, name: legName, dist: leg2.dist, duration: endDurStr });
        polylinePaths.push({ path: leg2.path, color: endMode==='WALKING'?'#a78bfa':legType==='bus'?'#38bdf8':'#fbbf24', weight: 3, dash: true });
    }

    const totalDist = leg1.dist + transitDist + leg2.dist;
    const totalMins = leg1.duration + transitMins + leg2.duration;
    
    return {
        type: 'transit', idx: 98,
        title: modeClass === 'multi' ? '🔄 Smart Hybrid Route' : modeClass === 'train' ? '🚆 MMTS Network' : modeClass === 'bus' ? '🚌 TSRTC Bus Network' : '🚇 Metro Network',
        subtitle: 'Optimized Synthetic Path',
        duration: formatDuration(totalMins),
        durationValue: totalMins * 60,
        distance: totalDist.toFixed(1) + ' km',
        fare: estimateFare(segments),
        segments, polylinePaths,
        co2Saved: calcCO2Saved(totalDist, segments),
        points: calcRoutePoints(segments, modeClass === 'multi'),
        recommended: modeClass === 'multi', fastest: false,
        depTime: new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
        arrTime: new Date(Date.now() + totalMins*60000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
        rawRoute: null
    };
}

async function buildTrueMultiModal(o, d, ixRank = 0) {
    const oAll = [
        findNearestByDB(o, METRO_STATIONS, 'metro'),
        findNearestByDB(o, MMTS_STATIONS, 'train'),
        findNearestByDB(o, BUS_HUBS, 'bus')
    ].sort((a,b)=>a.dist - b.dist);
    const oBest = oAll[0];

    const dAll = [
        findNearestByDB(d, METRO_STATIONS, 'metro'),
        findNearestByDB(d, MMTS_STATIONS, 'train'),
        findNearestByDB(d, BUS_HUBS, 'bus')
    ].sort((a,b)=>a.dist - b.dist);
    
    // Force a different mode for destination to guarantee a true multi-modal combo!
    let dBest = dAll.find(st => st.mode !== oBest.mode);
    if (!dBest) return null;

    const INTERCHANGES = [
        {name: "Ameerpet Interchange", lat: 17.4375, lng: 78.4482},
        {name: "Secunderabad Hub", lat: 17.4330, lng: 78.5016},
        {name: "MGBS Central", lat: 17.3782, lng: 78.4812}
    ];
    const oLat = typeof o.lat === 'function' ? o.lat() : o.lat;
    const oLng = typeof o.lng === 'function' ? o.lng() : o.lng;
    const dLat = typeof d.lat === 'function' ? d.lat() : d.lat;
    const dLng = typeof d.lng === 'function' ? d.lng() : d.lng;
    const midLat = (oLat + dLat) / 2, midLng = (oLng + dLng) / 2;
    const sortedIx = INTERCHANGES.sort((a,b) => getDistance(midLat, midLng, a.lat, a.lng) - getDistance(midLat, midLng, b.lat, b.lng));
    const ix = sortedIx[ixRank % sortedIx.length];

    const startMode = oBest.dist > 1.5 ? 'DRIVING' : 'WALKING';
    const endMode = dBest.dist > 1.5 ? 'DRIVING' : 'WALKING';

    const [leg1, t1, t2, leg2] = await Promise.all([
        getRoadLeg(o, {lat: oBest.lat, lng: oBest.lng}, startMode),
        getRoadLeg({lat: oBest.lat, lng: oBest.lng}, {lat: ix.lat, lng: ix.lng}, 'DRIVING'),
        getRoadLeg({lat: ix.lat, lng: ix.lng}, {lat: dBest.lat, lng: dBest.lng}, 'DRIVING'),
        getRoadLeg({lat: dBest.lat, lng: dBest.lng}, d, endMode)
    ]);

    let segments = [], polylinePaths = [];

    // 1. Walk/Auto
    if (leg1.dist > 0.05) {
        let startDurStr = leg1.durationText;
        let legType = startMode === 'WALKING' ? 'walk' : 'cab';
        let legName = `${startMode === 'WALKING' ? 'Walk' : 'Auto'} to ${oBest.name}`;
        if (startMode === 'DRIVING') {
            if (leg1.dist > 3) {
                legType = 'bus'; legName = `Feeder Bus to ${oBest.name}`;
                leg1.duration = Math.ceil(leg1.dist * 4) + 5; startDurStr = `${leg1.duration} mins (Feeder)`;
            } else { leg1.duration += 10; startDurStr += ' (+10m Uber Wait)'; }
        }
        segments.push({ type: legType, name: legName, dist: leg1.dist, duration: startDurStr });
        polylinePaths.push({ path: leg1.path, color: startMode==='WALKING'?'#a78bfa':legType==='bus'?'#38bdf8':'#fbbf24', weight: 3, dash: true });
    }

    // 2. Transit 1
    const color1 = oBest.mode === 'metro' ? (oBest.line?LINE_COLORS[oBest.line]:'#f43f5e') : oBest.mode === 'train' ? '#00897B' : '#7B1FA2';
    const min1 = Math.ceil(t1.dist * (oBest.mode==='train'?1.5:oBest.mode==='metro'?2:3));
    const live1 = getLiveTransitDetails(oBest.mode, oBest.name, ix.name);
    segments.push({
        type: oBest.mode, name: live1.routeNum,
        from: oBest.name, to: ix.name, stops: Math.ceil(t1.dist/1.5),
        depTime: live1.liveETA, arrTime: '+' + min1 + ' min',
        dist: t1.dist, color: color1
    });
    polylinePaths.push({ path: t1.path, color: color1, weight: 6 });

    // 3. Transit 2
    const color2 = dBest.mode === 'metro' ? (dBest.line?LINE_COLORS[dBest.line]:'#f43f5e') : dBest.mode === 'train' ? '#00897B' : '#7B1FA2';
    const min2 = Math.ceil(t2.dist * (dBest.mode==='train'?1.5:dBest.mode==='metro'?2:3));
    segments.push({
        type: dBest.mode, name: dBest.mode==='bus'?'City Bus':dBest.mode==='train'?'MMTS Link':'Metro Link',
        from: ix.name, to: dBest.name, stops: Math.ceil(t2.dist/1.5),
        depTime: '+' + min1 + ' min', arrTime: '+' + (min1+min2) + ' min',
        dist: t2.dist, color: color2
    });
    polylinePaths.push({ path: t2.path, color: color2, weight: 6 });

    // 4. Walk/Auto
    if (leg2.dist > 0.05) {
        let endDurStr = leg2.durationText;
        let legType = endMode === 'WALKING' ? 'walk' : 'cab';
        let legName = `${endMode === 'WALKING' ? 'Walk' : 'Auto'} from ${dBest.name}`;
        if (endMode === 'DRIVING') {
            if (leg2.dist > 3) {
                legType = 'bus'; legName = `Feeder Bus from ${dBest.name}`;
                leg2.duration = Math.ceil(leg2.dist * 4) + 5; endDurStr = `${leg2.duration} mins (Feeder)`;
            } else { leg2.duration += 10; endDurStr += ' (+10m Uber Wait)'; }
        }
        segments.push({ type: legType, name: legName, dist: leg2.dist, duration: endDurStr });
        polylinePaths.push({ path: leg2.path, color: endMode==='WALKING'?'#a78bfa':legType==='bus'?'#38bdf8':'#fbbf24', weight: 3, dash: true });
    }

    const totalDist = leg1.dist + t1.dist + t2.dist + leg2.dist;
    const totalMins = leg1.duration + min1 + min2 + leg2.duration;

    return {
        type: 'transit', idx: 98,
        title: '🔄 True Multi-Modal Route',
        subtitle: `${oBest.mode.toUpperCase()} + ${dBest.mode.toUpperCase()} Transfer`,
        duration: formatDuration(totalMins),
        durationValue: totalMins * 60,
        distance: totalDist.toFixed(1) + ' km',
        fare: estimateFare(segments),
        segments, polylinePaths,
        co2Saved: calcCO2Saved(totalDist, segments),
        points: calcRoutePoints(segments, true),
        recommended: true, fastest: false,
        depTime: new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
        arrTime: new Date(Date.now() + totalMins*60000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
        rawRoute: null
    };
}

async function generateAllSyntheticRoutes(o, d) {
    const oMetro = findNearestByDB(o, METRO_STATIONS, 'metro');
    const dMetro = findNearestByDB(d, METRO_STATIONS, 'metro');
    const oTrain = findNearestByDB(o, MMTS_STATIONS, 'train');
    const dTrain = findNearestByDB(d, MMTS_STATIONS, 'train');
    const oBus = findNearestByDB(o, BUS_HUBS, 'bus');
    const dBus = findNearestByDB(d, BUS_HUBS, 'bus');

    const routes = await Promise.all([
        buildSyntheticRoute(o, d, oMetro, dMetro, 'metro'),
        buildSyntheticRoute(o, d, oTrain, dTrain, 'train'),
        buildSyntheticRoute(o, d, oBus, dBus, 'bus'),
        buildTrueMultiModal(o, d, 0),
        buildTrueMultiModal(o, d, 1)
    ]);
    return routes.filter(r => r !== null);
}

function toggleMonsoonMode() {
    isMonsoonMode = document.getElementById('monsoon-toggle').checked;
    const banner = document.getElementById('monsoon-banner');
    if (isMonsoonMode) {
        banner.style.display = 'flex';
        showToast('Monsoon Active', 'Simulating heavy rain. Expect surge pricing for autos.');
    } else {
        banner.style.display = 'none';
        showToast('Monsoon Off', 'Normal weather routing restored.');
    }
    
    // Recalculate routes if origin and dest exist
    if (originPlace && destPlace) {
        findRoutes();
    }
}

function toggleSafeMode() {
    isSafeMode = document.getElementById('safe-toggle').checked;
    const banner = document.getElementById('safe-banner');
    if (isSafeMode) {
        banner.style.display = 'flex';
        showToast('Safe Mode Active', 'Prioritizing secure, well-lit routes.');
    } else {
        banner.style.display = 'none';
        showToast('Safe Mode Off', 'Standard routing restored.');
    }
    
    // Recalculate routes if origin and dest exist
    if (originPlace && destPlace) {
        findRoutes();
    }
}
