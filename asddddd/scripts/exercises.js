const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;


const exercises = [
    // --- UPPER BODY ---
    {
        id: 1,
        name: "Bench Press",
        category: "upper",
        equipment: "barbell",
        muscle: "Chest / Pectorals",
        difficulty: "Intermediate",
        description: "A fundamental compound movement for building chest, shoulder, and tricep strength.",
        steps: [
            "Lie flat on the bench with feet firm on the floor.",
            "Grip the bar slightly wider than shoulder-width.",
            "Lower the bar controlled to mid-chest level.",
            "Press up explosively until arms are extended."
        ]
    },
    {
        id: 2,
        name: "Lat Pulldown",
        category: "upper",
        equipment: "machine",
        muscle: "Back / Latissimus Dorsi",
        difficulty: "Beginner",
        description: "Focuses on developing back width and upper body pulling strength.",
        steps: [
            "Adjust seat pad to secure thighs firmly.",
            "Grip the bar with hands wider than shoulders.",
            "Pull the bar down towards upper chest while squeezing shoulder blades.",
            "Control the weight smoothly back to top position."
        ]
    },
    {
        id: 3,
        name: "Incline Dumbbell Press",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Upper Chest",
        difficulty: "Intermediate",
        description: "Targets upper chest fibers while offering full range of motion.",
        steps: [
            "Set bench to a 30-45 degree angle.",
            "Hold dumbbells at shoulder level with palms facing forward.",
            "Press weights straight up until arms extend overhead.",
            "Lower dumbbells back slowly to starting position."
        ]
    },
    {
        id: 4,
        name: "Overhead Barbell Press",
        category: "upper",
        equipment: "barbell",
        muscle: "Shoulders / Deltoids",
        difficulty: "Advanced",
        description: "Core shoulder exercise for overhead strength and upper body stability.",
        steps: [
            "Rack barbell at upper chest height and grip shoulder-width apart.",
            "Unrack and press the bar overhead, locking out at top.",
            "Keep core tight and lower bar back to collarbone level."
        ]
    },

    // --- ARMS ---
    {
        id: 5,
        name: "Dumbbell Bicep Curl",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Biceps Brachii",
        difficulty: "Beginner",
        description: "Classic isolation exercise to build bicep peak and arm strength.",
        steps: [
            "Stand upright holding dumbbells at sides, palms facing forward.",
            "Keep elbows close to your torso.",
            "Curl weights up towards shoulders while contracting biceps.",
            "Lower smoothly back to starting position."
        ]
    },
    {
        id: 6,
        name: "Tricep Cable Pushdown",
        category: "arms",
        equipment: "machine",
        muscle: "Triceps",
        difficulty: "Beginner",
        description: "Cable movement targeting full tricep extension and muscle control.",
        steps: [
            "Attach bar or rope to a high cable pulley.",
            "Keep elbows locked to your sides.",
            "Push handle down until arms are fully extended.",
            "Return to 90-degree bend with control."
        ]
    },
    {
        id: 7,
        name: "Barbell Preacher Curl",
        category: "arms",
        equipment: "barbell",
        muscle: "Biceps",
        difficulty: "Intermediate",
        description: "Isolates biceps by locking shoulders and upper arms against preacher pad.",
        steps: [
            "Sit at preacher bench with upper arms resting flat on pad.",
            "Grip EZ-bar or straight bar with underhand grip.",
            "Curl bar upwards towards chin.",
            "Lower weight back down under complete control."
        ]
    },
    {
        id: 8,
        name: "Hammer Curls",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Forearms & Brachialis",
        difficulty: "Beginner",
        description: "Neutral-grip curl targeting brachialis and forearm thickness.",
        steps: [
            "Hold dumbbells with palms facing each other.",
            "Keep upper arms still and curl dumbbells upward.",
            "Pause at the top and lower under control."
        ]
    },

    // --- LOWER BODY ---
    {
        id: 9,
        name: "Barbell Squat",
        category: "lower",
        equipment: "barbell",
        muscle: "Quadriceps & Glutes",
        difficulty: "Advanced",
        description: "The primary compound movement for overall lower body mass and strength.",
        steps: [
            "Position bar across upper back muscles.",
            "Keep feet shoulder-width apart, toes slightly out.",
            "Bend knees and hips to lower thighs parallel to floor.",
            "Drive through heels to stand back up."
        ]
    },
    {
        id: 10,
        name: "Leg Press",
        category: "lower",
        equipment: "machine",
        muscle: "Quadriceps & Glutes",
        difficulty: "Beginner",
        description: "Machine exercise allowing heavy quad and glute training with back support.",
        steps: [
            "Sit on machine with feet shoulder-width apart on platform.",
            "Release safety lock and lower weight until knees form 90 degrees.",
            "Press platform back up without fully locking knees at top."
        ]
    },
    {
        id: 11,
        name: "Dumbbell Goblet Squat",
        category: "lower",
        equipment: "dumbbell",
        muscle: "Quads & Core",
        difficulty: "Beginner",
        description: "Great beginner-friendly squat variation for mobility and leg strength.",
        steps: [
            "Hold a single dumbbell vertically against your chest.",
            "Keep chest tall and squat down between knees.",
            "Drive through feet to return to standing."
        ]
    },
    {
        id: 12,
        name: "Romanian Deadlift",
        category: "lower",
        equipment: "barbell",
        muscle: "Hamstrings & Glutes",
        difficulty: "Intermediate",
        description: "Hip-hinge movement focused on developing hamstring flexibility and posterior chain strength.",
        steps: [
            "Hold bar at thigh height with soft knees.",
            "Push hips backward while lowering bar down along shins.",
            "Squeeze glutes and drive hips forward to stand tall."
        ]
    }
];

let activeCategory = "all";
let activeEquipment = "all";

function displayExercises(items) {
    const grid = document.getElementById("exercise-grid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #666;'>No exercises match the selected combination.</p>";
        return;
    }

    items.forEach(ex => {
        const card = document.createElement("article");
        card.className = "ex-card";
        
        card.innerHTML = `
            <div class="ex-header">
                <div class="ex-title">
                    <h3>${ex.name}</h3>
                    <span class="ex-badge">${ex.muscle} • ${ex.difficulty}</span>
                </div>
                <span class="toggle-icon">+</span>
            </div>
            <div class="ex-body">
                <p>${ex.description}</p>
                <strong>Execution Steps:</strong>
                <ul>
                    ${ex.steps.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
        `;

        const header = card.querySelector(".ex-header");
        const body = card.querySelector(".ex-body");
        const icon = card.querySelector(".toggle-icon");

        header.addEventListener("click", () => {
            const isOpen = body.classList.toggle("open");
            icon.textContent = isOpen ? "−" : "+";
        });

        grid.appendChild(card);
    });
}

function applyFilters() {
    const filtered = exercises.filter(ex => {
        const matchesCategory = (activeCategory === "all") || (ex.category === activeCategory);
        const matchesEquipment = (activeEquipment === "all") || (ex.equipment === activeEquipment);
        return matchesCategory && matchesEquipment;
    });

    displayExercises(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    displayExercises(exercises);

    const categoryBtns = document.querySelectorAll("[data-category]");
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            applyFilters();
        });
    });

    const equipmentBtns = document.querySelectorAll("[data-equipment]");
    equipmentBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            equipmentBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeEquipment = btn.getAttribute("data-equipment");
            applyFilters();
        });
    });
});