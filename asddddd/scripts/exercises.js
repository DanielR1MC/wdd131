const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;


const exercises = [
    // ================= UPPER BODY (1 - 10) =================
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
        name: "Incline Dumbbell Press",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Upper Chest",
        difficulty: "Intermediate",
        description: "Targets upper chest fibers while offering a full range of motion.",
        steps: [
            "Set bench to a 30-45 degree angle.",
            "Hold dumbbells at shoulder level with palms facing forward.",
            "Press weights straight up until arms extend overhead.",
            "Lower dumbbells back slowly to starting position."
        ]
    },
    {
        id: 3,
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
    {
        id: 5,
        name: "Chest Fly Machine (Pec Deck)",
        category: "upper",
        equipment: "machine",
        muscle: "Chest / Pectorals",
        difficulty: "Beginner",
        description: "Isolates chest muscles with constant tension throughout the arc.",
        steps: [
            "Adjust seat height so handles are aligned with chest.",
            "Grip handles and bring pads together in front of chest.",
            "Squeeze chest at peak contraction, then slowly open arms."
        ]
    },
    {
        id: 6,
        name: "Dumbbell Bent-Over Row",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Middle Back / Rhomboids",
        difficulty: "Intermediate",
        description: "Builds back thickness and improves shoulder posture.",
        steps: [
            "Hinge at hips with torso near parallel to floor.",
            "Hold dumbbells with arms hanging extended.",
            "Pull weights toward waist squeezing shoulder blades.",
            "Lower dumbbells under control."
        ]
    },
    {
        id: 7,
        name: "Barbell Bent-Over Row",
        category: "upper",
        equipment: "barbell",
        muscle: "Upper & Middle Back",
        difficulty: "Intermediate",
        description: "Heavy back builder targeting lats, traps, and posterior shoulders.",
        steps: [
            "Hinge forward at hips keeping spine neutral.",
            "Grip bar slightly wider than shoulder width.",
            "Pull bar to lower sternum/belly button.",
            "Lower bar under control."
        ]
    },
    {
        id: 8,
        name: "Dumbbell Shoulder Press",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Shoulders / Deltoids",
        difficulty: "Beginner",
        description: "Develops shoulder mass and stability with independent arm movement.",
        steps: [
            "Sit or stand holding dumbbells at shoulder height.",
            "Press weights straight overhead without arching back.",
            "Lower weights smoothly back to ear height."
        ]
    },
    {
        id: 9,
        name: "Seated Cable Row",
        category: "upper",
        equipment: "machine",
        muscle: "Lats & Middle Back",
        difficulty: "Beginner",
        description: "Machine row variation providing constant resistance for back development.",
        steps: [
            "Sit with knees slightly bent and grip handle attachment.",
            "Pull handle toward torso while driving elbows backward.",
            "Squeeze back muscles and return smoothly."
        ]
    },
    {
        id: 10,
        name: "Dumbbell Lateral Raise",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Side Deltoids",
        difficulty: "Beginner",
        description: "Key isolation exercise for building shoulder width and side delts.",
        steps: [
            "Stand with dumbbells at sides, slight bend in elbows.",
            "Raise arms out to sides until parallel to floor.",
            "Pause briefly at peak and lower with control."
        ]
    },

    // ================= ARMS (11 - 20) =================
    {
        id: 11,
        name: "Dumbbell Bicep Curl",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Biceps Brachii",
        difficulty: "Beginner",
        description: "Classic isolation exercise to build bicep peak and arm strength.",
        steps: [
            "Stand upright holding dumbbells at sides, palms forward.",
            "Keep elbows locked close to torso.",
            "Curl weights up towards shoulders.",
            "Lower smoothly back to start position."
        ]
    },
    {
        id: 12,
        name: "Tricep Cable Pushdown",
        category: "arms",
        equipment: "machine",
        muscle: "Triceps",
        difficulty: "Beginner",
        description: "Cable movement targeting full tricep lockout and muscle control.",
        steps: [
            "Attach bar or rope to high cable pulley.",
            "Keep elbows fixed close to body.",
            "Push handle down until arms are fully extended.",
            "Return to 90-degree bend with control."
        ]
    },
    {
        id: 13,
        name: "Barbell Preacher Curl",
        category: "arms",
        equipment: "barbell",
        muscle: "Biceps",
        difficulty: "Intermediate",
        description: "Isolates biceps by locking shoulders against preacher pad.",
        steps: [
            "Rest upper arms flat on preacher bench pad.",
            "Grip EZ-bar or straight bar with underhand grip.",
            "Curl bar upward toward chin level.",
            "Lower weight back down under complete control."
        ]
    },
    {
        id: 14,
        name: "Hammer Curls",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Forearms & Brachialis",
        difficulty: "Beginner",
        description: "Neutral-grip curl targeting brachialis and forearm thickness.",
        steps: [
            "Hold dumbbells with palms facing each other.",
            "Keep upper arms still and curl weights upward.",
            "Pause at peak and lower under control."
        ]
    },
    {
        id: 15,
        name: "Skull Crushers (Lying Triceps Extension)",
        category: "arms",
        equipment: "barbell",
        muscle: "Triceps (Long Head)",
        difficulty: "Intermediate",
        description: "Effective lying movement for developing tricep mass.",
        steps: [
            "Lie on flat bench holding EZ-bar above chest.",
            "Bend elbows to lower bar toward forehead.",
            "Extend elbows to press weight back up."
        ]
    },
    {
        id: 16,
        name: "Dumbbell Overhead Tricep Extension",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Triceps",
        difficulty: "Beginner",
        description: "Stretches and builds tricep long head from overhead position.",
        steps: [
            "Hold one dumbbell with both hands overhead.",
            "Lower dumbbell behind head by bending elbows.",
            "Extend arms straight back up to start."
        ]
    },
    {
        id: 17,
        name: "Machine Bicep Curl",
        category: "arms",
        equipment: "machine",
        muscle: "Biceps",
        difficulty: "Beginner",
        description: "Guided bicep isolation with consistent resistance curve.",
        steps: [
            "Adjust seat height so arms rest comfortably on pads.",
            "Grip handles and curl upward towards face.",
            "Slowly extend arms back down."
        ]
    },
    {
        id: 18,
        name: "Barbell Standing Curl",
        category: "arms",
        equipment: "barbell",
        muscle: "Biceps",
        difficulty: "Intermediate",
        description: "Primary overload exercise for overall bicep size.",
        steps: [
            "Stand holding barbell with underhand grip.",
            "Keep core tight and curl bar toward chest.",
            "Lower bar down slowly without swinging body."
        ]
    },
    {
        id: 19,
        name: "Concentration Curl",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Biceps (Peak)",
        difficulty: "Intermediate",
        description: "Strict isolation exercise focusing on bicep peak.",
        steps: [
            "Sit on bench, elbow braced against inner thigh.",
            "Curl dumbbell toward chest.",
            "Squeeze at top and lower weight slowly."
        ]
    },
    {
        id: 20,
        name: "Cable Tricep Overhead Extension",
        category: "arms",
        equipment: "machine",
        muscle: "Triceps",
        difficulty: "Intermediate",
        description: "Continuous cable tension stretching triceps overhead.",
        steps: [
            "Attach rope to low/mid cable pulley.",
            "Turn away from pulley and hold rope behind head.",
            "Extend arms forward overhead and control back."
        ]
    },

    // ================= LOWER BODY (21 - 30) =================
    {
        id: 21,
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
        id: 22,
        name: "Leg Press",
        category: "lower",
        equipment: "machine",
        muscle: "Quadriceps & Glutes",
        difficulty: "Beginner",
        description: "Machine exercise allowing heavy leg training with back support.",
        steps: [
            "Sit on machine with feet shoulder-width on platform.",
            "Release safety lock and lower weight to 90 degrees.",
            "Press platform back up without locking knees."
        ]
    },
    {
        id: 23,
        name: "Dumbbell Goblet Squat",
        category: "lower",
        equipment: "dumbbell",
        muscle: "Quads & Core",
        difficulty: "Beginner",
        description: "Great beginner-friendly squat variation for lower body mobility.",
        steps: [
            "Hold a single dumbbell vertically against chest.",
            "Squat deep between knees keeping torso tall.",
            "Drive through feet to return to standing."
        ]
    },
    {
        id: 24,
        name: "Romanian Deadlift",
        category: "lower",
        equipment: "barbell",
        muscle: "Hamstrings & Glutes",
        difficulty: "Intermediate",
        description: "Hip-hinge movement focused on hamstring flexibility and posterior chain.",
        steps: [
            "Hold bar at thigh height with soft knees.",
            "Push hips backward while lowering bar down shins.",
            "Squeeze glutes to drive hips forward to stand tall."
        ]
    },
    {
        id: 25,
        name: "Dumbbell Romanian Deadlift",
        category: "lower",
        equipment: "dumbbell",
        muscle: "Hamstrings & Glutes",
        difficulty: "Beginner",
        description: "Accessible hamstring hinge using dumbbells for natural hand placement.",
        steps: [
            "Hold dumbbells in front of thighs.",
            "Hinge hips back and lower weights along legs.",
            "Engage glutes and pull back up to standing."
        ]
    },
    {
        id: 26,
        name: "Leg Extension Machine",
        category: "lower",
        equipment: "machine",
        muscle: "Quadriceps",
        difficulty: "Beginner",
        description: "Direct quad isolation movement targeting front thigh muscle definition.",
        steps: [
            "Sit on machine with pad against lower shins.",
            "Extend legs upward until fully straight.",
            "Pause at peak and lower under control."
        ]
    },
    {
        id: 27,
        name: "Lying Leg Curl Machine",
        category: "lower",
        equipment: "machine",
        muscle: "Hamstrings",
        difficulty: "Beginner",
        description: "Isolates hamstring flexion for back-of-leg development.",
        steps: [
            "Lie face down on machine with pad above ankles.",
            "Curl legs up toward glutes.",
            "Lower pad back down smoothly."
        ]
    },
    {
        id: 28,
        name: "Dumbbell Walking Lunges",
        category: "lower",
        equipment: "dumbbell",
        muscle: "Quads, Glutes & Balance",
        difficulty: "Intermediate",
        description: "Unilateral movement improving leg strength and hip stability.",
        steps: [
            "Hold dumbbells at sides and step forward.",
            "Lower back knee toward floor into lunge position.",
            "Push up and step forward into next lunge."
        ]
    },
    {
        id: 29,
        name: "Barbell Hip Thrust",
        category: "lower",
        equipment: "barbell",
        muscle: "Glutes",
        difficulty: "Intermediate",
        description: "Top glute isolation exercise for strength and hip power.",
        steps: [
            "Upper back supported against bench, barbell across hips.",
            "Drive hips upward until torso and thighs form straight line.",
            "Squeeze glutes at top and lower under control."
        ]
    },
    {
        id: 30,
        name: "Seated Calf Raise",
        category: "lower",
        equipment: "machine",
        muscle: "Calves / Soleus",
        difficulty: "Beginner",
        description: "Targets lower leg development and calf endurance.",
        steps: [
            "Sit on machine with pad secured on lower thighs.",
            "Lower heels down fully to stretch calves.",
            "Push up on toes as high as possible."
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