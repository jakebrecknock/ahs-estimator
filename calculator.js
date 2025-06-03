// Complete pricing data from the price sheet with averaged labor costs
const pricingData = {
    bathroom: {
        projects: {
            "Small remodel": { labor: (12200 + 18000) / 2, days: "5-7", crew: 2 },
            "Full renovation": { labor: (24400 + 36600) / 2, days: "10-15", crew: 2 },
            "Minor updates": { labor: 2000, days: "1-2", crew: 1 }
        },
        materials: {
            "Vents (with light)": { price: 100, unit: "each" },
            "Vents (no light)": { price: 75, unit: "each" },
            "Herringbone tile": { price: 18, unit: "sqft" },
            "Glazed wall tile": { price: 6, unit: "sqft" },
            "Floor tile": { price: 4, unit: "sqft" },
            "Single vanity": { price: 300, unit: "each" },
            "Double vanity": { price: 2000, unit: "each" },
            "Faucet": { price: 100, unit: "each" },
            "Can lighting": { price: 100, unit: "each" },
            "Heated floor": { price: 9.5, unit: "sqft" },
            "Supply lines": { price: 7, unit: "ft" },
            "GFCI outlets": { price: 75, unit: "each" },
            "Shower head": { price: 120, unit: "each" },
            "Bath spout": { price: 40, unit: "each" },
            "Bath": { price: 350, unit: "each" },
            "Toilet": { price: 400, unit: "each" }
        }
    },
    kitchen: {
        projects: {
            "Full remodel": { labor: (36600 + 61000) / 2, days: "15-25", crew: 2 },
            "Cabinet replacement only": { labor: (1320 + 12200) / 2, days: "3-5", crew: 2 },
            "Countertops + backsplash": { labor: (4880 + 9760) / 2, days: "2-4", crew: 2 },
            "Appliance/light updates": { labor: 2000, days: "1-2", crew: 1 }
        },
        materials: {
            "Stock cabinets": { price: 300, unit: "ft" },
            "Custom cabinets": { price: 900, unit: "ft" },
            "Laminate countertops": { price: 45, unit: "sqft" },
            "Quartz countertops": { price: 120, unit: "sqft" },
            "Granite countertops": { price: 110, unit: "sqft" },
            "Butcher block countertops": { price: 80, unit: "sqft" },
            "Subway tile backsplash": { price: 15, unit: "sqft" },
            "Glass tile backsplash": { price: 22, unit: "sqft" },
            "Mosaic backsplash": { price: 28, unit: "sqft" },
            "Range (Electric/Gas)": { price: 1000, unit: "each" },
            "Refrigerator (Standard)": { price: 1500, unit: "each" },
            "Dishwasher": { price: 800, unit: "each" },
            "Microwave (Over-range)": { price: 450, unit: "each" },
            "Range Hood": { price: 300, unit: "each" },
            "Undermount Sink": { price: 350, unit: "each" },
            "Farmhouse Sink": { price: 600, unit: "each" },
            "Kitchen Faucet": { price: 180, unit: "each" },
            "Pendant Lights": { price: 120, unit: "each" },
            "Recessed/Can Lights": { price: 100, unit: "each" },
            "Under Cabinet Lighting": { price: 35, unit: "ft" },
            "GFCI Outlets": { price: 75, unit: "each" },
            "Switches/Dimmers": { price: 60, unit: "each" }
        }
    },
    bedroom: {
        projects: {
            "Basic refresh (paint, lights, trim)": { labor: (1220 + 1320) / 2, days: "1-3", crew: "1-2" },
            "Closet upgrade": { labor: (1220 + 4880) / 2, days: "1-2", crew: "1-2" },
            "Flooring install": { labor: (2440 + 4880) / 2, days: "1-2", crew: 2 }
        },
        materials: {
            "Standard Reach-In closet": { price: 600, unit: "each" },
            "Walk-In Shelving/Storage": { price: 1500, unit: "each" },
            "Ceiling Fan w/ Light": { price: 200, unit: "each" },
            "Flush Mount Light": { price: 100, unit: "each" },
            "Recessed Lighting": { price: 100, unit: "each" },
            "Interior Door": { price: 200, unit: "each" },
            "Closet Bifold": { price: 180, unit: "each" },
            "Walls & Ceiling paint": { price: 2.5, unit: "sqft" },
            "Standard Molding": { price: 5, unit: "linear ft" }
        }
    },
    flooring: {
        projects: {
            "Hardwood/LVP (400-600 sqft)": { labor: (4880 + 9760) / 2, days: "2-4", crew: 2 },
            "Tile flooring": { labor: (1320 + 12200) / 2, days: "3-5", crew: 2 },
            "Carpet replacement": { labor: 2440, days: "1", crew: 2 }
        },
        materials: {
            "Solid Hardwood": { price: 10, unit: "sqft" },
            "Engineered Hardwood": { price: 8, unit: "sqft" },
            "Laminate": { price: 4.5, unit: "sqft" },
            "Luxury Vinyl Plank (LVP)": { price: 6, unit: "sqft" },
            "Porcelain Tile": { price: 6.5, unit: "sqft" },
            "Stone Tile": { price: 9, unit: "sqft" },
            "Carpet": { price: 5.5, unit: "sqft" }
        }
    },
    garage: {
        projects: {
            "Door + opener replacement": { labor: 2440, days: "1", crew: 2 },
            "Epoxy floor coating": { labor: (4880 + 1320) / 2, days: "2-3", crew: 2 },
            "Storage & lighting": { labor: 2000, days: "1-2", crew: 1 }
        },
        materials: {
            "Single Door (Manual)": { price: 900, unit: "each" },
            "Single Door (Automatic)": { price: 1300, unit: "each" },
            "Double Door (Automatic)": { price: 1900, unit: "each" },
            "Chain Drive Opener": { price: 300, unit: "each" },
            "Belt Drive Opener": { price: 450, unit: "each" },
            "Wall-mounted Shelving": { price: 400, unit: "each" },
            "Ceiling Storage Rack": { price: 300, unit: "each" },
            "LED Strip Light": { price: 120, unit: "each" },
            "Epoxy Floor Coating": { price: 6, unit: "sqft" }
        }
    },
    aircon: {
        projects: {
            "Installation (Window)": { labor: 225, days: "0.25", crew: 1 },
            "Installation (Central)": { labor: 1220, days: "1", crew: 1 },
            "Recharge": { labor: 225, days: "0.25", crew: 1 }
        },
        materials: {
            "Window Unit": { price: 375, unit: "each" },
            "Central System": { price: 3750, unit: "each" },
            "AC filter": { price: 14, unit: "each" }, // was $10
            "Refrigerant (R-22)": { price: 140, unit: "lb" }, // was $100
            "Refrigerant (R-410A)": { price: 112, unit: "lb" }, // was $80
            "Condenser pad": { price: 105, unit: "each" } // was $75
        }
    },
    roofing: {
         projects: {
            "Emergency roof patch": { labor: 680, days: "4 hours", crew: 2 },
            "Shingle replacement": { labor: 1220, days: "1 day", crew: 2 },
            "Tuckpointing (per sqft)": { labor: 335, days: "2 hours", crew: 1 },
            "AC unit service": { labor: 335, days: "2 hours", crew: 1 },
            "AC installation": { labor: 2440, days: "2 days", crew: 2 }
        },
        materials: {
            // Roofing materials (45% markup)
            "Asphalt shingles": { price: 1.45, unit: "sqft" }, 
            "Roofing nails": { price: 14.50, unit: "lb" }, 
            "Ice/water shield": { price: 0.87, unit: "sqft" }, 
            "Flashing": { price: 2.90, unit: "linear ft" }       
        }
    },
    concrete: {
        projects: {
            "Driveway (400-600 sqft)": { labor: (1320 + 12200) / 2, days: "3-5", crew: 2 },
            "Walkway or steps": { labor: (2440 + 1320) / 2, days: "1-3", crew: 2 },
            "Stamped patio": { labor: (1320 + 9760) / 2, days: "3-4", crew: 2 }
        },
        materials: {
            "Standard Pour Driveway": { price: 10, unit: "sqft" },
            "Stamped Driveway": { price: 16, unit: "sqft" },
            "Standard Walkway": { price: 8, unit: "sqft" },
            "Decorative Walkway": { price: 14, unit: "sqft" },
            "Plain Patio": { price: 9, unit: "sqft" },
            "Decorative/Stained Patio": { price: 15, unit: "sqft" },
            "Steps": { price: 350, unit: "each" }
        }
    },
    basement: {
        projects: {
            "Full finish": { labor: (36600 + 61000) / 2, days: "3-5 weeks", crew: 2 },
            "Bathroom addition": { labor: (12200 + 24400) / 2, days: "1-2 weeks", crew: 2 },
            "Minor upgrades": { labor: (2440 + 12200) / 2, days: "2-5", crew: "1-2" }
        },
        materials: {
            "Framing & Insulation": { price: 28, unit: "sqft" },
            "Drywall": { price: 4.5, unit: "sqft" },
            "Can Lights": { price: 100, unit: "each" },
            "Sump Pump System": { price: 1600, unit: "each" },
            "Dehumidifier Unit": { price: 850, unit: "each" },
            "Full Bath (with fixtures)": { price: 9000, unit: "each" }
        }
    },
    glass: {
        projects: {
            "Window replacement (≤6 windows)": { labor: (2440 + 4880) / 2, days: "1-2", crew: 2 },
            "Shower glass install": { labor: 1220, days: "0.5-1", crew: 1 },
            "Mirror install": { labor: 400, days: "0.25-0.5", crew: 1 }
        },
        materials: {
            "Standard Double-Hung Window": { price: 500, unit: "each" },
            "Picture Window": { price: 700, unit: "each" },
            "Bay Window": { price: 1600, unit: "each" },
            "Frameless Shower Enclosure": { price: 1200, unit: "each" },
            "Sliding Glass Shower Doors": { price: 850, unit: "each" },
            "Standard Vanity Mirror": { price: 200, unit: "each" },
            "Custom Cut Mirror": { price: 400, unit: "each" }
        }
    },
    decking: {
        projects: {
            "New deck (10x10-12x16)": { labor: (12200 + 24400) / 2, days: "5-10", crew: 2 },
            "Stairs/railing replacement": { labor: (2440 + 4880) / 2, days: "1-2", crew: 2 },
            "Resurfacing/staining": { labor: (1220 + 1320) / 2, days: "1-3", crew: "1-2" }
        },
        materials: {
            "Pressure-Treated Joists/Framing": { price: 12, unit: "sqft" },
            "Steel Framing": { price: 18, unit: "sqft" },
            "Pressure-Treated Lumber": { price: 16, unit: "sqft" },
            "Cedar": { price: 20, unit: "sqft" },
            "Composite": { price: 28, unit: "sqft" },
            "PVC": { price: 32, unit: "sqft" },
            "Wood Railing": { price: 40, unit: "linear ft" },
            "Composite Railing": { price: 60, unit: "linear ft" },
            "Cable Railing": { price: 90, unit: "linear ft" },
            "Basic Wood Steps": { price: 350, unit: "flight" },
            "Composite Steps": { price: 500, unit: "flight" },
            "Additional Steps": { price: 90, unit: "each" },
            "Lattice Wood Skirt": { price: 18, unit: "sqft" },
            "Composite/Decorative Skirt": { price: 25, unit: "sqft" },
            "Concrete Footings w/ support posts": { price: 250, unit: "each" },
            "Support Posts": { price: 90, unit: "each" },
            "Post Cap Lights": { price: 80, unit: "each" },
            "Stair Lights": { price: 60, unit: "each" },
            "Initial Seal/Stain (wood only)": { price: 3.5, unit: "sqft" },
            "Maintenance Recoat (wood only)": { price: 2, unit: "sqft" }
        }
    },
    misc: {
        projects: {
            "Door replacement": { labor: 400, days: "0.5-1", crew: 1 },
            "Trim/baseboard install": { labor: (2440 + 4880) / 2, days: "1-2", crew: 2 },
            "Drywall patch/paint": { labor: (225 + 1220) / 2, days: "0.25-1", crew: 1 },
            "Tuckpointing (per sqft)": { labor: 335, days: "2 hours", crew: 1 },
        },
        materials: {
            "Exterior Door (Steel)": { price: 750, unit: "each" },
            "Exterior Door (Wood)": { price: 900, unit: "each" },
            "French Doors": { price: 1200, unit: "each" },
            "Sliding Glass Door": { price: 1400, unit: "each" },
            "Drywall Patch (Small)": { price: 150, unit: "each" },
            "Drywall Patch (Large)": { price: 300, unit: "each" },
            "Caulking/Sealant Work": { price: 5, unit: "ft" },
            "Baseboard Heater Replacement": { price: 250, unit: "each" },
            "Smoke/CO Detector Install": { price: 90, unit: "each" },
            "Mortar mix": { price: 15, unit: "bag" }, 
            "Pointing trowel": { price: 22.50, unit: "each" }, 
            "Masonry brush": { price: 12, unit: "each" }   
        }
    }
};

// DOM elements
const categoryTitle = document.getElementById('category-title');
const projectSelection = document.getElementById('project-selection');
const materialSelection = document.getElementById('material-selection');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

// Current selection
let currentCategory = null;
let currentProject = null;
let selectedMaterials = {};

// Set up category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.dataset.category;
        categoryTitle.textContent = `${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Projects`;
        showProjects();
    });
});

// Show projects for selected category
function showProjects() {
    projectSelection.innerHTML = '<h2>Select Project Type</h2>';
    materialSelection.innerHTML = '';
    calculateBtn.style.display = 'none';
    resultDiv.innerHTML = '';
    selectedMaterials = {};

    const projects = pricingData[currentCategory].projects;
    for (const [projectName, projectData] of Object.entries(projects)) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-option';
        projectDiv.innerHTML = `
            <h3>${projectName}</h3>
            <p>Labor: $${projectData.labor.toLocaleString()}</p>
            <p>Duration: ${projectData.days} days | Crew: ${projectData.crew}</p>
            <button class="select-project" data-project="${projectName}">Select</button>
        `;
        projectSelection.appendChild(projectDiv);
    }

    // Set up project selection buttons
    document.querySelectorAll('.select-project').forEach(button => {
        button.addEventListener('click', () => {
            currentProject = button.dataset.project;
            showMaterials();
        });
    });
}

// Show materials for selected project
function showMaterials() {
    projectSelection.innerHTML = `<h2>Selected Project: ${currentProject}</h2>`;
    materialSelection.innerHTML = '<h2>Select Materials</h2>';
    calculateBtn.style.display = 'block';
    calculateBtn.onclick = calculateEstimate;

    const materials = pricingData[currentCategory].materials;
    for (const [materialName, materialData] of Object.entries(materials)) {
        const materialDiv = document.createElement('div');
        materialDiv.className = 'material-option';
        
        materialDiv.innerHTML = `
            <div class="material-label">
                <input type="checkbox" data-material="${materialName}" data-price="${materialData.price}">
                ${materialName} - $${materialData.price}/${materialData.unit}
            </div>
            <input type="number" min="1" value="1" class="material-quantity" style="display: none;">
        `;
        materialSelection.appendChild(materialDiv);

        // Show quantity input when checkbox is checked
        const checkbox = materialDiv.querySelector('input[type="checkbox"]');
        const quantityInput = materialDiv.querySelector('.material-quantity');
        
        checkbox.addEventListener('change', () => {
            quantityInput.style.display = checkbox.checked ? 'inline-block' : 'none';
        });
    }
}

// Calculate the estimate
function calculateEstimate() {
    const projectData = pricingData[currentCategory].projects[currentProject];
    let laborCost = projectData.labor;
    
    let materialsCost = 0;
    selectedMaterials = {};
    
    document.querySelectorAll('#material-selection input[type="checkbox"]:checked').forEach(checkbox => {
        const materialName = checkbox.dataset.material;
        const materialPrice = parseFloat(checkbox.dataset.price);
        const quantityInput = checkbox.closest('.material-option').querySelector('.material-quantity');
        
        let quantity = parseFloat(quantityInput.value) || 1;
        
        selectedMaterials[materialName] = {
            price: materialPrice,
            quantity: quantity,
            total: materialPrice * quantity,
            unit: pricingData[currentCategory].materials[materialName].unit
        };
        materialsCost += materialPrice * quantity;
    });

    const totalCost = laborCost + materialsCost;
    
    resultDiv.innerHTML = `
        <h3>Estimate Summary</h3>
        <p><strong>Project:</strong> ${currentProject}</p>
        <p><strong>Labor Cost:</strong> $${laborCost.toLocaleString()}</p>
        <p><strong>Materials Cost:</strong> $${materialsCost.toLocaleString()}</p>
        <p><strong>Total Estimated Cost:</strong> $${totalCost.toLocaleString()}</p>
        
        <h4>Selected Materials:</h4>
        <ul>
            ${Object.entries(selectedMaterials).map(([name, data]) => 
                `<li>${name} (${data.quantity} ${data.unit} @ $${data.price}/${data.unit}): $${data.total.toLocaleString()}</li>`).join('')}
        </ul>
    `;
}
