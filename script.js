// Solar System Data
const solarSystemData = {
    sun: {
        name: "Sun",
        type: "Star",
        color: "#ffdd00",
        radius: 70,
        description: "The Sun is the star at the center of our Solar System. It's a nearly perfect sphere of hot plasma, heated by nuclear fusion reactions in its core. It accounts for about 99.86% of the total mass of the Solar System.",
        facts: {
            "Diameter": "1,391,000 km",
            "Mass": "1.989 × 10³⁰ kg",
            "Surface Temperature": "5,500°C",
            "Core Temperature": "15,000,000°C",
            "Age": "4.6 billion years",
            "Composition": "Hydrogen (74%), Helium (24%)"
        }
    },
    planets: [
        {
            name: "Mercury",
            color: "#a9a9a9",
            radius: 12,
            orbitRadius: 120,
            orbitPeriod: 88,
            rotationPeriod: 59,
            description: "Mercury is the smallest and innermost planet in the Solar System. It's named after the Roman messenger god. It has no natural satellites and its surface is heavily cratered.",
            facts: {
                "Diameter": "4,879 km",
                "Distance from Sun": "57.9 million km",
                "Orbital Period": "88 Earth days",
                "Day Length": "59 Earth days",
                "Surface Temperature": "-173°C to 427°C",
                "Moons": "0"
            }
        },
        {
            name: "Venus",
            color: "#ffcc99",
            radius: 18,
            orbitRadius: 160,
            orbitPeriod: 225,
            rotationPeriod: 243,
            description: "Venus is the second planet from the Sun and Earth's closest planetary neighbor. It's named after the Roman goddess of love and beauty. Venus has the densest atmosphere of the four terrestrial planets.",
            facts: {
                "Diameter": "12,104 km",
                "Distance from Sun": "108.2 million km",
                "Orbital Period": "225 Earth days",
                "Day Length": "243 Earth days",
                "Surface Temperature": "462°C",
                "Moons": "0"
            }
        },
        {
            name: "Earth",
            color: "#6b93d6",
            radius: 20,
            orbitRadius: 200,
            orbitPeriod: 365,
            rotationPeriod: 1,
            description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is covered with water. Its atmosphere protects life by absorbing ultraviolet solar radiation.",
            facts: {
                "Diameter": "12,756 km",
                "Distance from Sun": "149.6 million km",
                "Orbital Period": "365.25 days",
                "Day Length": "24 hours",
                "Surface Temperature": "-89°C to 58°C",
                "Moons": "1 (The Moon)"
            }
        },
        {
            name: "Mars",
            color: "#ff7b7b",
            radius: 16,
            orbitRadius: 240,
            orbitPeriod: 687,
            rotationPeriod: 1.03,
            description: "Mars is the fourth planet from the Sun and is often called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface. Mars has two small moons: Phobos and Deimos.",
            facts: {
                "Diameter": "6,792 km",
                "Distance from Sun": "227.9 million km",
                "Orbital Period": "687 Earth days",
                "Day Length": "24.6 hours",
                "Surface Temperature": "-140°C to 30°C",
                "Moons": "2 (Phobos & Deimos)"
            }
        },
        {
            name: "Jupiter",
            color: "#ffcc99",
            radius: 45,
            orbitRadius: 320,
            orbitPeriod: 4333,
            rotationPeriod: 0.41,
            description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It's a gas giant with a mass one-thousandth that of the Sun. Jupiter is known for its Great Red Spot, a giant storm.",
            facts: {
                "Diameter": "142,984 km",
                "Distance from Sun": "778.5 million km",
                "Orbital Period": "12 Earth years",
                "Day Length": "9.9 hours",
                "Surface Temperature": "-108°C",
                "Moons": "79 (known)"
            }
        },
        {
            name: "Saturn",
            color: "#fad5a5",
            radius: 40,
            orbitRadius: 400,
            orbitPeriod: 10759,
            rotationPeriod: 0.45,
            hasRings: true,
            description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It's known for its prominent ring system that consists of nine continuous main rings.",
            facts: {
                "Diameter": "120,536 km",
                "Distance from Sun": "1.4 billion km",
                "Orbital Period": "29.5 Earth years",
                "Day Length": "10.7 hours",
                "Surface Temperature": "-139°C",
                "Moons": "82 (known)"
            }
        },
        {
            name: "Uranus",
            color: "#99e6ff",
            radius: 30,
            orbitRadius: 480,
            orbitPeriod: 30687,
            rotationPeriod: 0.72,
            description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is unique for rotating on its side.",
            facts: {
                "Diameter": "51,118 km",
                "Distance from Sun": "2.9 billion km",
                "Orbital Period": "84 Earth years",
                "Day Length": "17.2 hours",
                "Surface Temperature": "-197°C",
                "Moons": "27"
            }
        },
        {
            name: "Neptune",
            color: "#4d94ff",
            radius: 29,
            orbitRadius: 560,
            orbitPeriod: 60190,
            rotationPeriod: 0.67,
            description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. It's the fourth-largest planet by diameter and the third-largest by mass. Neptune has the strongest winds in the Solar System.",
            facts: {
                "Diameter": "49,528 km",
                "Distance from Sun": "4.5 billion km",
                "Orbital Period": "165 Earth years",
                "Day Length": "16.1 hours",
                "Surface Temperature": "-201°C",
                "Moons": "14"
            }
        }
    ]
};

// Application State
let state = {
    rotationEnabled: true,
    showOrbits: true,
    showLabels: false,
    animationSpeed: 1,
    scale: 1,
    rotationX: 20,
    rotationY: 0,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    selectedObject: 'sun'
};

// DOM Elements
const solarSystem = document.getElementById('solarSystem');
const speedControl = document.getElementById('speedControl');
const speedValue = document.getElementById('speedValue');
const selectedObjectElement = document.getElementById('selectedObject');
const objectTypeElement = document.getElementById('objectType');
const objectDescriptionElement = document.getElementById('objectDescription');
const objectDetailsElement = document.getElementById('objectDetails');
const objectStatsElement = document.getElementById('objectStats');
const objectIconElement = document.getElementById('objectIcon');

// Initialize the Solar System
function initSolarSystem() {
    createSun();
    createPlanets();
    setupEventListeners();
    updateInfoPanel(solarSystemData.sun);
    animate();
}

// Create Sun
function createSun() {
    const sun = document.createElement('div');
    sun.className = 'sun';
    sun.dataset.name = 'sun';
    sun.addEventListener('click', () => selectObject('sun'));
    solarSystem.appendChild(sun);
}

// Create Planets and Orbits
function createPlanets() {
    solarSystemData.planets.forEach((planet, index) => {
        // Create orbit
        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        orbit.dataset.planet = planet.name.toLowerCase();
        orbit.style.width = `${planet.orbitRadius * 2}px`;
        orbit.style.height = `${planet.orbitRadius * 2}px`;
        orbit.style.left = `-${planet.orbitRadius}px`;
        orbit.style.top = `-${planet.orbitRadius}px`;
        
        // Create planet
        const planetElement = document.createElement('div');
        planetElement.className = `planet ${planet.name.toLowerCase()}`;
        planetElement.dataset.name = planet.name.toLowerCase();
        planetElement.style.width = `${planet.radius}px`;
        planetElement.style.height = `${planet.radius}px`;
        planetElement.style.backgroundColor = planet.color;
        planetElement.style.animation = `rotate ${planet.orbitPeriod / state.animationSpeed}s linear infinite`;
        
        // Add click event
        planetElement.addEventListener('click', () => selectObject(planet.name.toLowerCase()));
        
        // Create label
        const label = document.createElement('div');
        label.className = 'planet-label';
        label.textContent = planet.name;
        label.style.top = `${-planet.radius - 20}px`;
        planetElement.appendChild(label);
        
        // Add rings for Saturn
        if (planet.hasRings) {
            const rings = document.createElement('div');
            rings.className = 'rings';
            planetElement.appendChild(rings);
        }
        
        orbit.appendChild(planetElement);
        solarSystem.appendChild(orbit);
    });
}

// Select an object (planet or sun)
function selectObject(objectName) {
    // Remove selected class from all planets
    document.querySelectorAll('.planet').forEach(p => p.classList.remove('selected'));
    
    // Add selected class to clicked object
    if (objectName === 'sun') {
        document.querySelector('.sun').classList.add('selected');
    } else {
        document.querySelector(`.planet[data-name="${objectName}"]`).classList.add('selected');
    }
    
    state.selectedObject = objectName;
    
    // Update info panel
    if (objectName === 'sun') {
        updateInfoPanel(solarSystemData.sun);
    } else {
        const planet = solarSystemData.planets.find(p => p.name.toLowerCase() === objectName);
        updateInfoPanel(planet);
    }
}

// Update Info Panel
function updateInfoPanel(object) {
    selectedObjectElement.textContent = object.name;
    objectTypeElement.textContent = object.type || 'Planet';
    objectDescriptionElement.innerHTML = `<p>${object.description}</p>`;
    
    // Update facts
    objectDetailsElement.innerHTML = `
        <h3><i class="fas fa-info-circle"></i> Quick Facts</h3>
        <div class="facts-grid">
            ${Object.entries(object.facts).map(([key, value]) => `
                <div class="fact">
                    <span class="fact-label">${key}</span>
                    <span class="fact-value">${value}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    // Update stats
    if (object.name === 'Sun') {
        objectStatsElement.innerHTML = `
            <div class="stat">
                <span class="stat-label">Planets</span>
                <span class="stat-value">8</span>
            </div>
            <div class="stat">
                <span class="stat-label">Dwarf Planets</span>
                <span class="stat-value">5</span>
            </div>
            <div class="stat">
                <span class="stat-label">Moons</span>
                <span class="stat-value">200+</span>
            </div>
        `;
        
        objectIconElement.innerHTML = `<div class="sun-icon"></div>`;
    } else {
        objectStatsElement.innerHTML = `
            <div class="stat">
                <span class="stat-label">Orbit Period</span>
                <span class="stat-value">${object.orbitPeriod} days</span>
            </div>
            <div class="stat">
                <span class="stat-label">Day Length</span>
                <span class="stat-value">${object.rotationPeriod} days</span>
            </div>
            <div class="stat">
                <span class="stat-label">Diameter</span>
                <span class="stat-value">${object.facts['Diameter']}</span>
            </div>
        `;
        
        objectIconElement.innerHTML = `
            <div class="planet-icon" style="
                width: 80px;
                height: 80px;
                background: radial-gradient(circle at 30% 30%, ${object.color}, ${darkenColor(object.color, 30)});
                border-radius: 50%;
                box-shadow: 0 0 20px ${object.color}80;
            "></div>
        `;
    }
}

// Helper function to darken color
function darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (
        0x1000000 +
        (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)
    ).toString(16).slice(1);
}

// Setup Event Listeners
function setupEventListeners() {
    // Control buttons
    document.getElementById('toggleRotation').addEventListener('click', toggleRotation);
    document.getElementById('toggleOrbits').addEventListener('click', toggleOrbits);
    document.getElementById('toggleLabels').addEventListener('click', toggleLabels);
    document.getElementById('resetView').addEventListener('click', resetView);
    document.getElementById('zoomIn').addEventListener('click', () => zoom(1.2));
    document.getElementById('zoomOut').addEventListener('click', () => zoom(0.8));
    
    // Speed control
    speedControl.addEventListener('input', updateSpeed);
    
    // Mouse controls for rotation
    solarSystem.parentElement.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
    
    // Mouse wheel for zoom
    solarSystem.parentElement.addEventListener('wheel', handleZoom);
    
    // Touch events for mobile
    solarSystem.parentElement.addEventListener('touchstart', handleTouchStart);
    solarSystem.parentElement.addEventListener('touchmove', handleTouchMove);
}

// Control Functions
function toggleRotation() {
    state.rotationEnabled = !state.rotationEnabled;
    const btn = document.getElementById('toggleRotation');
    btn.classList.toggle('active');
    btn.innerHTML = state.rotationEnabled ? 
        '<i class="fas fa-play"></i> Rotation' : 
        '<i class="fas fa-pause"></i> Rotation';
    
    updateAnimations();
}

function toggleOrbits() {
    state.showOrbits = !state.showOrbits;
    const btn = document.getElementById('toggleOrbits');
    btn.classList.toggle('active');
    
    document.querySelectorAll('.orbit').forEach(orbit => {
        orbit.style.display = state.showOrbits ? 'block' : 'none';
    });
}

function toggleLabels() {
    state.showLabels = !state.showLabels;
    const btn = document.getElementById('toggleLabels');
    btn.classList.toggle('active');
    
    document.querySelectorAll('.planet-label').forEach(label => {
        label.classList.toggle('visible', state.showLabels);
    });
}

function updateSpeed() {
    state.animationSpeed = speedControl.value / 100;
    speedValue.textContent = `${state.animationSpeed.toFixed(1)}x`;
    updateAnimations();
}

function updateAnimations() {
    document.querySelectorAll('.planet').forEach((planet, index) => {
        const planetData = solarSystemData.planets[index];
        planet.style.animation = state.rotationEnabled ? 
            `rotate ${planetData.orbitPeriod / state.animationSpeed}s linear infinite` : 
            'none';
    });
}

function resetView() {
    state.scale = 1;
    state.rotationX = 20;
    state.rotationY = 0;
    updateSolarSystemTransform();
}

function zoom(factor) {
    state.scale *= factor;
    state.scale = Math.max(0.5, Math.min(3, state.scale));
    updateSolarSystemTransform();
}

function handleZoom(e) {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    zoom(factor);
}

// Mouse Drag Functions
function startDrag(e) {
    state.isDragging = true;
    state.lastMouseX = e.clientX;
    state.lastMouseY = e.clientY;
    solarSystem.parentElement.style.cursor = 'grabbing';
}

function drag(e) {
    if (!state.isDragging) return;
    
    const deltaX = e.clientX - state.lastMouseX;
    const deltaY = e.clientY - state.lastMouseY;
    
    state.rotationY += deltaX * 0.5;
    state.rotationX = Math.max(-90, Math.min(90, state.rotationX - deltaY * 0.5));
    
    state.lastMouseX = e.clientX;
    state.lastMouseY = e.clientY;
    
    updateSolarSystemTransform();
}

function stopDrag() {
    state.isDragging = false;
    solarSystem.parentElement.style.cursor = 'grab';
}

// Touch Events
function handleTouchStart(e) {
    if (e.touches.length === 1) {
        state.isDragging = true;
        state.lastMouseX = e.touches[0].clientX;
        state.lastMouseY = e.touches[0].clientY;
    }
}

function handleTouchMove(e) {
    if (!state.isDragging || e.touches.length !== 1) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - state.lastMouseX;
    const deltaY = touch.clientY - state.lastMouseY;
    
    state.rotationY += deltaX * 0.5;
    state.rotationX = Math.max(-90, Math.min(90, state.rotationX - deltaY * 0.5));
    
    state.lastMouseX = touch.clientX;
    state.lastMouseY = touch.clientY;
    
    updateSolarSystemTransform();
}

// Update Solar System Transform
function updateSolarSystemTransform() {
    solarSystem.style.transform = `
        translate(-50%, -50%) 
        rotateX(${state.rotationX}deg) 
        rotateY(${state.rotationY}deg)
        scale(${state.scale})
    `;
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    // Additional animations can be added here
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initSolarSystem);