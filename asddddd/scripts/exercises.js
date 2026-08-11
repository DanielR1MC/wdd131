const currentYear = new Date().getFullYear();
const currentYearElem = document.getElementById("currentyear");
const lastModifiedElem = document.getElementById("lastModified");

if (currentYearElem) currentYearElem.textContent = currentYear;
if (lastModifiedElem) lastModifiedElem.innerHTML = document.lastModified;

const exercises = [
    // ================= UPPER BODY (1 - 10) =================
    {
        id: 1,
        name: "Barbell Bench Press",
        category: "upper",
        pattern: "Push",
        type: "Compound",
        equipment: "barbell",
        primaryMuscle: "Chest",
        secondaryMuscles: ["Triceps", "Front Delts"],
        jointAction: "Horizontal shoulder adduction and elbow extension",
        difficulty: "Intermediate",
        description: "The fundamental horizontal push exercise for upper body strength and muscle mass.",
        steps: [
            "Lie flat on the bench with your feet planted firmly on the floor.",
            "Grip the barbell slightly wider than shoulder-width apart.",
            "Lower the bar under control to the mid-chest level.",
            "Press the bar explosively upward until your arms are fully extended."
        ]
    },
    {
        id: 2,
        name: "Barbell Bent-Over Row",
        category: "upper",
        pattern: "Pull",
        type: "Compound",
        equipment: "barbell",
        primaryMuscle: "Lats",
        secondaryMuscles: ["Traps", "Rhomboids", "Biceps", "Rear Delts"],
        jointAction: "Shoulder extension/retraction and elbow flexion",
        difficulty: "Advanced",
        description: "A staple horizontal pull exercise to build a thick and wide back.",
        steps: [
            "Hinge at the hips keeping your back flat and nearly parallel to the floor.",
            "Grip the barbell with an overhand or underhand grip.",
            "Pull the bar toward your lower abdomen while contracting your shoulder blades.",
            "Lower the weight back down while maintaining muscle tension."
        ]
    },
    {
        id: 3,
        name: "Overhead Barbell Press",
        category: "upper",
        pattern: "Push",
        type: "Compound",
        equipment: "barbell",
        primaryMuscle: "Front Delts",
        secondaryMuscles: ["Triceps", "Serratus", "Core"],
        jointAction: "Shoulder flexion/abduction and elbow extension",
        difficulty: "Advanced",
        description: "The ultimate test of vertical pushing strength for the upper body.",
        steps: [
            "Unrack the barbell at anterior deltoid level.",
            "Brace your core and glutes to stabilize your spine.",
            "Press the bar vertically overhead until your elbows lock out.",
            "Lower the bar under control back to the starting position."
        ]
    },
    {
        id: 4,
        name: "Lat Pulldown",
        category: "upper",
        pattern: "Pull",
        type: "Compound",
        equipment: "machine",
        primaryMuscle: "Lats",
        secondaryMuscles: ["Biceps", "Rhomboids", "Upper Back"],
        jointAction: "Shoulder adduction and elbow flexion",
        difficulty: "Beginner",
        description: "The premier vertical pulling exercise for building upper back width.",
        steps: [
            "Adjust the thigh pad to secure your legs in the seat.",
            "Grip the bar with a wide overhand grip.",
            "Pull the bar down toward your upper chest while depressing your shoulder blades.",
            "Slowly return the bar to the top for a full lat stretch."
        ]
    },
    {
        id: 5,
        name: "Incline Dumbbell Press",
        category: "upper",
        pattern: "Push",
        type: "Compound",
        equipment: "dumbbell",
        primaryMuscle: "Upper Chest",
        secondaryMuscles: ["Front Delts", "Triceps"],
        jointAction: "Incline horizontal shoulder adduction",
        difficulty: "Intermediate",
        description: "Targets upper chest muscle fibers with an extended range of motion.",
        steps: [
            "Set an incline bench to 30–45 degrees.",
            "Bring the dumbbells up to shoulder level.",
            "Press upward, bringing the weights slightly closer together at the top.",
            "Lower the dumbbells while flaring elbows slightly to feel a deep chest stretch."
        ]
    },
    {
        id: 6,
        name: "Seated Cable Row",
        category: "upper",
        pattern: "Pull",
        type: "Compound",
        equipment: "machine",
        primaryMuscle: "Lats & Rhomboids",
        secondaryMuscles: ["Mid Traps", "Biceps"],
        jointAction: "Shoulder extension and scapular retraction",
        difficulty: "Beginner",
        description: "Horizontal pulling movement with constant tension, ideal for back density.",
        steps: [
            "Sit with knees slightly bent and keep your torso upright.",
            "Pull the attachment toward your abdomen.",
            "Squeeze your shoulder blades together at peak contraction.",
            "Return to the start position while extending your arms fully."
        ]
    },
    {
        id: 7,
        name: "Dumbbell Lateral Raise",
        category: "upper",
        pattern: "Push",
        type: "Isolation",
        equipment: "dumbbell",
        primaryMuscle: "Side Delts",
        secondaryMuscles: ["Traps"],
        jointAction: "Shoulder abduction in the scapular plane",
        difficulty: "Beginner",
        description: "The key isolation exercise for developing shoulder width and capping delts.",
        steps: [
            "Hold dumbbells at your sides with a slight bend in your elbows.",
            "Raise your arms out to the sides until parallel to the floor.",
            "Control the weight on the way down without swinging."
        ]
    },
    {
        id: 8,
        name: "Pec Deck Fly",
        category: "upper",
        pattern: "Push",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Chest",
        secondaryMuscles: ["Front Delts"],
        jointAction: "Guided horizontal shoulder adduction",
        difficulty: "Beginner",
        description: "Isolates the chest muscles, offering constant tension and peak contraction.",
        steps: [
            "Sit with your back flat against the machine pad.",
            "Grip the handles and bring your arms together in front of your chest.",
            "Pause for a second at the center to squeeze the pectorals.",
            "Slowly open your arms back up to stretch the chest."
        ]
    },
    {
        id: 9,
        name: "Single-Arm Dumbbell Row",
        category: "upper",
        pattern: "Pull",
        type: "Compound",
        equipment: "dumbbell",
        primaryMuscle: "Lats",
        secondaryMuscles: ["Biceps", "Rear Delts"],
        jointAction: "Unilateral shoulder extension and elbow flexion",
        difficulty: "Intermediate",
        description: "Unilateral rowing movement to correct strength imbalances and build back depth.",
        steps: [
            "Place one knee and hand on a flat bench for support.",
            "Hold a dumbbell in the opposite hand hanging straight down.",
            "Pull the dumbbell up toward your hip, driving back with your elbow.",
            "Lower the weight back down to achieve a full stretch."
        ]
    },
    {
        id: 10,
        name: "Machine Shoulder Press",
        category: "upper",
        pattern: "Push",
        type: "Compound",
        equipment: "machine",
        primaryMuscle: "Front Delts",
        secondaryMuscles: ["Triceps"],
        jointAction: "Guided shoulder flexion/abduction",
        difficulty: "Beginner",
        description: "A stable option to overload shoulder muscles without requiring balance control.",
        steps: [
            "Adjust the seat height so handles align with your shoulder level.",
            "Press upward until your arms are extended without locking out elbows.",
            "Lower the handles slowly back to shoulder height."
        ]
    },

    // ================= ARMS (11 - 20) =================
    {
        id: 11,
        name: "Barbell Bicep Curl",
        category: "arms",
        pattern: "Pull",
        type: "Isolation",
        equipment: "barbell",
        primaryMuscle: "Biceps",
        secondaryMuscles: ["Brachialis", "Forearms"],
        jointAction: "Elbow flexion",
        difficulty: "Intermediate",
        description: "Classic mass-building exercise targeting the front of the upper arms.",
        steps: [
            "Stand tall with your elbows tucked close to your torso.",
            "Flex your elbows to curl the barbell up toward chest level.",
            "Squeeze the biceps at the top and lower under control."
        ]
    },
    {
        id: 12,
        name: "Incline Dumbbell Curl",
        category: "arms",
        pattern: "Pull",
        type: "Isolation",
        equipment: "dumbbell",
        primaryMuscle: "Biceps (Long Head)",
        secondaryMuscles: ["Brachialis"],
        jointAction: "Elbow flexion with shoulder in extension",
        difficulty: "Intermediate",
        description: "Places the biceps in a deep stretch behind the torso to emphasize biceps peak.",
        steps: [
            "Sit back on an incline bench (45°–60°) letting your arms hang down.",
            "Keep your upper arms stationary and curl the dumbbells up.",
            "Lower slowly until you reach a full stretch at the bottom."
        ]
    },
    {
        id: 13,
        name: "Machine Preacher Curl",
        category: "arms",
        pattern: "Pull",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Biceps (Short Head)",
        secondaryMuscles: ["Brachialis"],
        jointAction: "Elbow flexion with shoulder flexed",
        difficulty: "Beginner",
        description: "Eliminates momentum by locking the upper arms against an angled pad.",
        steps: [
            "Rest your armpits comfortably over the pad edge.",
            "Flex your arms to pull the resistance toward your face.",
            "Lower with controlled tempo until your arms are nearly extended."
        ]
    },
    {
        id: 14,
        name: "Dumbbell Hammer Curl",
        category: "arms",
        pattern: "Pull",
        type: "Isolation",
        equipment: "dumbbell",
        primaryMuscle: "Forearms & Brachialis",
        secondaryMuscles: ["Biceps"],
        jointAction: "Elbow flexion in neutral grip",
        difficulty: "Beginner",
        description: "Neutral grip targets the forearms and deep brachialis for arm thickness.",
        steps: [
            "Hold dumbbells with your palms facing each other.",
            "Curl the weights up without rotating your wrists.",
            "Squeeze at the top and lower in a controlled manner."
        ]
    },
    {
        id: 15,
        name: "Cable Rope Curl",
        category: "arms",
        pattern: "Pull",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Biceps",
        secondaryMuscles: ["Forearms"],
        jointAction: "Elbow flexion with dynamic wrist positioning",
        difficulty: "Beginner",
        description: "Provides continuous cable tension throughout the full range of motion.",
        steps: [
            "Attach a rope to the lowest pulley setting.",
            "Curl the rope up, spreading your wrists slightly apart at the top.",
            "Resist the pull of the cable as you lower back down."
        ]
    },
    {
        id: 16,
        name: "Close-Grip Bench Press",
        category: "arms",
        pattern: "Push",
        type: "Compound",
        equipment: "barbell",
        primaryMuscle: "Triceps",
        secondaryMuscles: ["Chest", "Front Delts"],
        jointAction: "Elbow extension and horizontal shoulder adduction",
        difficulty: "Intermediate",
        description: "Heavy compound exercise for building overall triceps mass and lockout power.",
        steps: [
            "Lie on the bench and grip the bar at shoulder-width.",
            "Lower the bar to your lower chest while keeping your elbows close to your torso.",
            "Press straight up, focusing drive through the triceps."
        ]
    },
    {
        id: 17,
        name: "EZ-Bar Skull Crushers",
        category: "arms",
        pattern: "Push",
        type: "Isolation",
        equipment: "barbell",
        primaryMuscle: "Triceps",
        secondaryMuscles: ["Forearms"],
        jointAction: "Elbow extension in supine position",
        difficulty: "Intermediate",
        description: "Pure triceps extension exercise essential for arm mass and power.",
        steps: [
            "Lie on a flat bench holding an EZ-bar above your chest.",
            "Bend only at the elbows to lower the bar toward your forehead.",
            "Extend your elbows back to return to the vertical position."
        ]
    },
    {
        id: 18,
        name: "Cable Tricep Pushdown",
        category: "arms",
        pattern: "Push",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Triceps",
        secondaryMuscles: ["Forearms"],
        jointAction: "Elbow extension",
        difficulty: "Beginner",
        description: "The most popular triceps isolation movement for direct tension and pump.",
        steps: [
            "Use a straight bar or rope on a high pulley.",
            "Keep your elbows pinned to your sides.",
            "Push the attachment down until your arms fully extend.",
            "Allow the bar to rise under control."
        ]
    },
    {
        id: 19,
        name: "Overhead Dumbbell Tricep Extension",
        category: "arms",
        pattern: "Push",
        type: "Isolation",
        equipment: "dumbbell",
        primaryMuscle: "Triceps (Long Head)",
        secondaryMuscles: ["Forearms"],
        jointAction: "Elbow extension with shoulder flexed overhead",
        difficulty: "Beginner",
        description: "Targets the triceps long head by placing the muscle in a stretched overhead position.",
        steps: [
            "Hold a dumbbell vertically behind your head with both hands.",
            "Lower the weight behind your neck by bending your elbows.",
            "Extend your elbows to press the weight back overhead."
        ]
    },
    {
        id: 20,
        name: "Cable Overhead Extension",
        category: "arms",
        pattern: "Push",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Triceps (Long Head)",
        secondaryMuscles: ["Forearms"],
        jointAction: "Overhead elbow extension with cable",
        difficulty: "Intermediate",
        description: "Smooth overhead tension for the long head without dead spots in resistance.",
        steps: [
            "Attach a rope to a mid-level pulley and face away from the machine.",
            "Pull the rope behind your head with elbows bent.",
            "Extend your arms forward and up until fully locked out."
        ]
    },

    // ================= LOWER BODY (21 - 30) =================
    {
        id: 21,
        name: "Barbell Back Squat",
        category: "lower",
        pattern: "Legs",
        type: "Compound",
        equipment: "barbell",
        primaryMuscle: "Quads",
        secondaryMuscles: ["Glutes", "Adductors", "Hamstrings"],
        jointAction: "Knee extension and hip extension",
        difficulty: "Advanced",
        description: "The undisputed king of lower body exercises for overall leg size and strength.",
        steps: [
            "Rest the barbell across your upper trapezius and unrack it.",
            "Descend by bending knees and flexing hips simultaneously.",
            "Squat down until thighs are parallel or below parallel to the floor.",
            "Drive through mid-foot to return to a standing position."
        ]
    },
    {
        id: 22,
        name: "Romanian Deadlift (RDL)",
        category: "lower",
        pattern: "Legs",
        type: "Compound",
        equipment: "barbell",
        primaryMuscle: "Hamstrings & Glutes",
        secondaryMuscles: ["Lower Back", "Adductors"],
        jointAction: "Hip hinge (Hip extension)",
        difficulty: "Intermediate",
        description: "Premier posterior chain movement emphasizing deep hamstring stretch.",
        steps: [
            "Hold the bar at hip height with knees soft and slightly bent.",
            "Push your hips back as the bar glides down close to your legs.",
            "Feel the hamstring stretch and drive hips forward to stand tall."
        ]
    },
    {
        id: 23,
        name: "Barbell Hip Thrust",
        category: "lower",
        pattern: "Legs",
        type: "Compound",
        equipment: "barbell",
        primaryMuscle: "Glutes",
        secondaryMuscles: ["Hamstrings", "Quads"],
        jointAction: "Pure hip extension",
        difficulty: "Intermediate",
        description: "Offers peak muscle activation for building strong and powerful glutes.",
        steps: [
            "Position your upper back against a bench with a padded bar over your hips.",
            "Drive through your heels to extend your hips toward the ceiling.",
            "Squeeze your glutes tightly at the top in full lockout.",
            "Lower hips back down under control."
        ]
    },
    {
        id: 24,
        name: "Leg Press",
        category: "lower",
        pattern: "Legs",
        type: "Compound",
        equipment: "machine",
        primaryMuscle: "Quads",
        secondaryMuscles: ["Glutes", "Adductors"],
        jointAction: "Incline knee extension and hip extension",
        difficulty: "Beginner",
        description: "High quad overload potential without heavy stress on the lower spine.",
        steps: [
            "Place feet shoulder-width apart on the footplate.",
            "Release safety catches and lower the plate to a 90-degree knee bend.",
            "Press the sled up smoothly without locking out knees hard."
        ]
    },
    {
        id: 25,
        name: "Bulgarian Split Squat",
        category: "lower",
        pattern: "Legs",
        type: "Compound",
        equipment: "dumbbell",
        primaryMuscle: "Quads & Glutes",
        secondaryMuscles: ["Hamstrings", "Core"],
        jointAction: "Unilateral knee extension and hip extension",
        difficulty: "Advanced",
        description: "Demanding single-leg exercise to fix muscular imbalances and build mass.",
        steps: [
            "Elevate your rear foot on a flat bench behind you.",
            "Hold dumbbells at sides and descend until rear knee nears the floor.",
            "Drive through the front heel to return to standing."
        ]
    },
    {
        id: 26,
        name: "Leg Extension",
        category: "lower",
        pattern: "Legs",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Quads",
        secondaryMuscles: ["Knee Stabilizers"],
        jointAction: "Pure knee extension",
        difficulty: "Beginner",
        description: "Directly isolates quad extension for peak quad development.",
        steps: [
            "Adjust the machine pad so it rests against your lower shins.",
            "Extend your legs fully upward until knees lock softly.",
            "Pause for a second at top and lower under control."
        ]
    },
    {
        id: 27,
        name: "Seated Leg Curl",
        category: "lower",
        pattern: "Legs",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Hamstrings",
        secondaryMuscles: ["Calves"],
        jointAction: "Knee flexion",
        difficulty: "Beginner",
        description: "Isolates hamstrings in a seated position for maximum stretch and load.",
        steps: [
            "Sit with thigh pad locked tightly over your upper legs.",
            "Flex knees to pull the roller pad down and back.",
            "Slowly return to start position under continuous tension."
        ]
    },
    {
        id: 28,
        name: "Dumbbell Goblet Squat",
        category: "lower",
        pattern: "Legs",
        type: "Compound",
        equipment: "dumbbell",
        primaryMuscle: "Quads",
        secondaryMuscles: ["Glutes", "Core"],
        jointAction: "Knee and hip extension with front loading",
        difficulty: "Beginner",
        description: "Great squat variation to master depth while keeping an upright posture.",
        steps: [
            "Hold a dumbbell vertically close against your chest.",
            "Squat down deep while keeping your torso upright.",
            "Push through the floor to stand back up."
        ]
    },
    {
        id: 29,
        name: "Hack Squat",
        category: "lower",
        pattern: "Legs",
        type: "Compound",
        equipment: "machine",
        primaryMuscle: "Quads",
        secondaryMuscles: ["Glutes"],
        jointAction: "Guided knee extension",
        difficulty: "Intermediate",
        description: "Fixed trajectory machine squat ideal for heavy quad isolation.",
        steps: [
            "Position back flat against pad with shoulders under supports.",
            "Lower weight deep into knees as far as your mobility allows.",
            "Drive through entire foot surface to extend back up."
        ]
    },
    {
        id: 30,
        name: "Standing Calf Raise",
        category: "lower",
        pattern: "Legs",
        type: "Isolation",
        equipment: "machine",
        primaryMuscle: "Calves",
        secondaryMuscles: ["Soleus"],
        jointAction: "Ankle plantarflexion",
        difficulty: "Beginner",
        description: "Fundamental exercise with extended knees for building calf muscle volume.",
        steps: [
            "Place balls of feet on platform edge.",
            "Lower heels down deep to stretch lower legs.",
            "Rise up onto toes with a strong top contraction."
        ]
    }
];



let activeCategory = "all";
let activeEquipment = "all";

function displayExercises(items) {
    const grid = document.getElementById("exercise-grid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #666;'>No exercises found matching your search.</p>";
        return;
    }

    items.forEach(ex => {
        const card = document.createElement("article");
        card.className = "ex-card";
        
        const diffClass = ex.difficulty.toLowerCase(); 
        const patternClass = ex.pattern.toLowerCase();

        card.innerHTML = `
            <div class="ex-header">
                <div class="ex-title">
                    <h3>${ex.name}</h3>
                    <div class="badge-group">
                        <span class="ex-badge category-badge">${ex.primaryMuscle}</span>
                        <span class="ex-badge pattern-badge ${patternClass}">${ex.pattern}</span>
                        <span class="ex-badge type-badge">${ex.type}</span>
                        <span class="difficulty-badge ${diffClass}">${ex.difficulty}</span>
                    </div>
                </div>
                <span class="toggle-icon">+</span>
            </div>
            <div class="ex-body">
                <p><strong>Description:</strong> ${ex.description}</p>
                <div class="biomechanics-info">
                    <p><strong>Primary Muscle:</strong> <span class="primary-mhh">${ex.primaryMuscle}</span></p>
                    <p><strong>Secondary Muscles:</strong> ${ex.secondaryMuscles.join(", ")}</p>
                    <p class="joint-action"><strong>Joint Action:</strong> <em>${ex.jointAction}</em></p>
                </div>
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
            icon.textContent = isOpen ? "-" : "+";
        });

        grid.appendChild(card);
    });
}

function applyFilters() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = exercises.filter(ex => {
        const matchesCategory = (activeCategory === "all") || (ex.category === activeCategory);
        const matchesEquipment = (activeEquipment === "all") || (ex.equipment === activeEquipment);
        
        const matchesSearch = ex.name.toLowerCase().includes(query) || 
                              ex.primaryMuscle.toLowerCase().includes(query) ||
                              ex.pattern.toLowerCase().includes(query) ||
                              ex.type.toLowerCase().includes(query);

        return matchesCategory && matchesEquipment && matchesSearch;
    });

    displayExercises(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    displayExercises(exercises);


    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", applyFilters);
    }



    const categoryBtns = document.querySelectorAll(".category-group .filter-btn");
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            applyFilters();
        });
    });



    const equipmentBtns = document.querySelectorAll(".equipment-group .filter-btn");
    equipmentBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            equipmentBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeEquipment = btn.getAttribute("data-equipment");
            applyFilters();
        });
    });




    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const selectedTab = btn.getAttribute("data-tab");
            const targetPanel = document.getElementById(selectedTab);
            if (targetPanel) targetPanel.classList.add("active");
        });
    });


    const toggleBioBtn = document.getElementById("toggle-bio-btn");
    const bioContent = document.getElementById("bio-content");



    if (toggleBioBtn && bioContent) {
        toggleBioBtn.addEventListener("click", () => {
            const isHidden = bioContent.classList.contains("hidden");

            if (isHidden) {
                bioContent.classList.remove("hidden");
                toggleBioBtn.classList.remove("collapsed");
                toggleBioBtn.textContent = "Hide Guide ▲";
            } else {
                bioContent.classList.add("hidden");
                toggleBioBtn.classList.add("collapsed");
                toggleBioBtn.textContent = "Show Guide ▼";

                tabBtns.forEach(b => b.classList.remove("active"));
                tabPanels.forEach(p => p.classList.remove("active"));

                const defaultTabBtn = document.querySelector('.tab-btn[data-tab="tab-1"]');
                const defaultTabPanel = document.getElementById("tab-1");

                if (defaultTabBtn) defaultTabBtn.classList.add("active");
                if (defaultTabPanel) defaultTabPanel.classList.add("active");
            }
        });
    }
});