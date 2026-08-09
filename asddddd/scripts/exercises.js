const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const searchInput = document.getElementById("searchInput");

function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const filtered = exercises.filter(ex => {
        const matchesCategory = (activeCategory === "all") || (ex.category === activeCategory);
        const matchesEquipment = (activeEquipment === "all") || (ex.equipment === activeEquipment);
        const matchesSearch = ex.name.toLowerCase().includes(query) || ex.muscle.toLowerCase().includes(query);
        return matchesCategory && matchesEquipment && matchesSearch;
    });

    displayExercises(filtered);
}

searchInput.addEventListener("input", applyFilters);

const exercises = [
    // ================= UPPER BODY (1 - 10) =================
    {
        id: 1,
        name: "Barbell Bench Press",
        category: "upper",
        equipment: "barbell",
        muscle: "Chest / Pectorals",
        difficulty: "Intermediate",
        description: "The absolute king of chest exercises for overall upper body pushing strength and mass.",
        steps: [
            "Lie flat on the bench, feet planted firmly.",
            "Grip the bar slightly wider than shoulder-width.",
            "Lower the bar under control to your mid-chest.",
            "Press the weight up explosively to full extension."
        ]
    },
    {
        id: 2,
        name: "Barbell Bent-Over Row",
        category: "upper",
        equipment: "barbell",
        muscle: "Back / Lats & Rhomboids",
        difficulty: "Advanced",
        description: "Fundamental heavy pulling movement for a thick and wide back.",
        steps: [
            "Hinge at the hips, keeping your back straight and nearly parallel to the floor.",
            "Grip the barbell with an overhand or underhand grip.",
            "Pull the bar into your belly button, squeezing your shoulder blades.",
            "Lower the weight under control."
        ]
    },
    {
        id: 3,
        name: "Overhead Barbell Press",
        category: "upper",
        equipment: "barbell",
        muscle: "Shoulders / Front Delts",
        difficulty: "Advanced",
        description: "The ultimate test of upper body vertical pushing strength.",
        steps: [
            "Unrack the bar across your front delts / clavicle.",
            "Brace your core and squeeze your glutes.",
            "Press the bar straight overhead until elbows lock out.",
            "Lower the bar back to your chest under control."
        ]
    },
    {
        id: 4,
        name: "Lat Pulldown",
        category: "upper",
        equipment: "machine",
        muscle: "Back / Lats",
        difficulty: "Beginner",
        description: "The premier machine exercise for building back width.",
        steps: [
            "Sit at the machine and adjust the knee pad.",
            "Take a wide overhand grip on the bar.",
            "Pull the bar down to your upper chest, depressing your shoulders.",
            "Let the bar stretch your lats on the way back up."
        ]
    },
    {
        id: 5,
        name: "Incline Dumbbell Press",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Upper Chest",
        difficulty: "Intermediate",
        description: "Targets the upper pectoral fibers with a deep stretch and independent arm movement.",
        steps: [
            "Set an adjustable bench to 30-45 degrees.",
            "Kick the dumbbells up to your shoulders.",
            "Press the dumbbells up and slightly inward.",
            "Lower them wide to stretch the chest."
        ]
    },
    {
        id: 6,
        name: "Seated Cable Row",
        category: "upper",
        equipment: "machine",
        muscle: "Middle Back",
        difficulty: "Beginner",
        description: "Excellent constant-tension horizontal pull for back thickness.",
        steps: [
            "Sit on the machine with feet on the platforms and knees slightly bent.",
            "Keep your torso upright and pull the V-handle to your stomach.",
            "Squeeze your back hard at the peak contraction.",
            "Extend your arms fully to stretch."
        ]
    },
    {
        id: 7,
        name: "Dumbbell Lateral Raise",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Side Deltoids",
        difficulty: "Beginner",
        description: "The undisputed best movement for building wide, capped shoulders.",
        steps: [
            "Stand holding dumbbells at your sides with a slight bend in the elbows.",
            "Raise your arms straight out to the sides until parallel with the floor.",
            "Control the eccentric on the way down."
        ]
    },
    {
        id: 8,
        name: "Pec Deck Fly",
        category: "upper",
        equipment: "machine",
        muscle: "Chest / Pectorals",
        difficulty: "Beginner",
        description: "Isolates the chest muscles with a great stretch and peak contraction.",
        steps: [
            "Sit with your back flat against the pad.",
            "Grip the handles and bring your arms together in front of you.",
            "Squeeze your chest for a second at the center.",
            "Slowly open your arms to feel the stretch."
        ]
    },
    {
        id: 9,
        name: "Single-Arm Dumbbell Row",
        category: "upper",
        equipment: "dumbbell",
        muscle: "Back / Lats",
        difficulty: "Intermediate",
        description: "Unilateral pulling movement to fix imbalances and build the lats.",
        steps: [
            "Place one knee and hand on a flat bench.",
            "Hold a dumbbell in the free hand and let it hang.",
            "Row the dumbbell up toward your hip, keeping the elbow tucked.",
            "Lower slowly until you feel a lat stretch."
        ]
    },
    {
        id: 10,
        name: "Machine Shoulder Press",
        category: "upper",
        equipment: "machine",
        muscle: "Shoulders",
        difficulty: "Beginner",
        description: "Safe and stable way to overload the front delts without worrying about balance.",
        steps: [
            "Adjust the seat so the handles are at shoulder level.",
            "Grip the handles and press straight up.",
            "Control the weight back down without letting the plates crash."
        ]
    },

    // ================= ARMS (11 - 20) =================
    // Bíceps
    {
        id: 11,
        name: "Barbell Bicep Curl",
        category: "arms",
        equipment: "barbell",
        muscle: "Biceps",
        difficulty: "Intermediate",
        description: "The classic mass builder for overall bicep size.",
        steps: [
            "Stand holding a barbell with an underhand grip.",
            "Keep your chest up and elbows pinned to your sides.",
            "Curl the weight up, squeezing the biceps.",
            "Lower the bar under control."
        ]
    },
    {
        id: 12,
        name: "Incline Dumbbell Curl",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Biceps (Long Head)",
        difficulty: "Intermediate",
        description: "Places the biceps in a deep stretch behind the torso for maximum muscle breakdown.",
        steps: [
            "Sit on an incline bench (45-60 degrees) with dumbbells hanging straight down.",
            "Keep your upper arms stationary and curl the weights.",
            "Squeeze at the top and lower to a dead hang."
        ]
    },
    {
        id: 13,
        name: "Machine Preacher Curl",
        category: "arms",
        equipment: "machine",
        muscle: "Biceps (Short Head)",
        difficulty: "Beginner",
        description: "Strict isolation exercise preventing cheating by locking the arms in place.",
        steps: [
            "Sit down and lock your armpits over the preacher pad.",
            "Grab the machine handles and curl towards your face.",
            "Lower slowly until arms are almost fully extended."
        ]
    },
    {
        id: 14,
        name: "Dumbbell Hammer Curl",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Brachialis & Forearms",
        difficulty: "Beginner",
        description: "Uses a neutral grip to target the brachialis, pushing the bicep up for a bigger peak.",
        steps: [
            "Hold dumbbells with palms facing each other.",
            "Curl the weights keeping the neutral grip.",
            "Squeeze at the top and lower under control."
        ]
    },
    {
        id: 15,
        name: "Cable Rope Curl",
        category: "arms",
        equipment: "machine",
        muscle: "Biceps",
        difficulty: "Beginner",
        description: "Provides constant tension throughout the entire range of motion.",
        steps: [
            "Attach a rope to the lowest pulley setting.",
            "Stand up and curl the rope, twisting your wrists out slightly at the top.",
            "Lower slowly against the cable resistance."
        ]
    },
    // Tríceps
    {
        id: 16,
        name: "Close-Grip Bench Press",
        category: "arms",
        equipment: "barbell",
        muscle: "Triceps",
        difficulty: "Intermediate",
        description: "The heaviest compound movement specifically for building tricep mass.",
        steps: [
            "Lie on the bench and take a grip slightly narrower than shoulder-width.",
            "Lower the bar to your lower chest, keeping elbows tucked close to your ribs.",
            "Press the bar up powerfully using your triceps."
        ]
    },
    {
        id: 17,
        name: "EZ-Bar Skull Crushers",
        category: "arms",
        equipment: "barbell",
        muscle: "Triceps",
        difficulty: "Intermediate",
        description: "Essential isolation movement for overall tricep thickness.",
        steps: [
            "Lie on a flat bench holding an EZ-bar over your forehead.",
            "Bend at the elbows to lower the weight slightly behind your head.",
            "Extend the arms back to the starting position."
        ]
    },
    {
        id: 18,
        name: "Cable Tricep Pushdown",
        category: "arms",
        equipment: "machine",
        muscle: "Triceps",
        difficulty: "Beginner",
        description: "The most common and effective tricep isolation exercise.",
        steps: [
            "Attach a rope or straight bar to a high pulley.",
            "Pin your elbows to your sides.",
            "Push the weight down until your arms are fully locked out.",
            "Control the eccentric phase on the way up."
        ]
    },
    {
        id: 19,
        name: "Overhead Dumbbell Tricep Extension",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Triceps (Long Head)",
        difficulty: "Beginner",
        description: "Targets the long head of the tricep by putting it in a fully stretched overhead position.",
        steps: [
            "Hold a single heavy dumbbell with both hands overhead.",
            "Lower the weight behind your head by bending the elbows.",
            "Press it back up to full extension."
        ]
    },
    {
        id: 20,
        name: "Cable Overhead Extension",
        category: "arms",
        equipment: "machine",
        muscle: "Triceps (Long Head)",
        difficulty: "Intermediate",
        description: "Similar to the dumbbell version but with the constant tension of a cable.",
        steps: [
            "Set a pulley at hip height with a rope attachment.",
            "Face away from the machine and pull the rope overhead.",
            "Extend your arms straight out, feeling the stretch at the bottom."
        ]
    },

    // ================= LOWER BODY (21 - 30) =================
    {
        id: 21,
        name: "Barbell Back Squat",
        category: "lower",
        equipment: "barbell",
        muscle: "Quads & Glutes",
        difficulty: "Advanced",
        description: "The absolute undisputed king of lower body muscle and strength.",
        steps: [
            "Rest the barbell on your upper traps.",
            "Squat down by breaking at the hips and knees simultaneously.",
            "Hit parallel or lower, keeping your chest up.",
            "Drive through your mid-foot to stand back up."
        ]
    },
    {
        id: 22,
        name: "Romanian Deadlift (RDL)",
        category: "lower",
        equipment: "barbell",
        muscle: "Hamstrings & Glutes",
        difficulty: "Intermediate",
        description: "The best exercise for building massive hamstrings and posterior chain strength.",
        steps: [
            "Hold the bar at hip level with a slight bend in your knees.",
            "Push your hips back as far as possible, sliding the bar down your legs.",
            "Feel the deep stretch in your hamstrings, then squeeze glutes to stand."
        ]
    },
    {
        id: 23,
        name: "Barbell Hip Thrust",
        category: "lower",
        equipment: "barbell",
        muscle: "Glutes",
        difficulty: "Intermediate",
        description: "The most effective movement for isolating and building the gluteus maximus.",
        steps: [
            "Sit on the floor with your upper back against a bench and a padded barbell over your hips.",
            "Drive through your heels to thrust the barbell upward.",
            "Squeeze your glutes hard at the top lockout.",
            "Lower the hips under control."
        ]
    },
    {
        id: 24,
        name: "Leg Press",
        category: "lower",
        equipment: "machine",
        muscle: "Quads & Glutes",
        difficulty: "Beginner",
        description: "Allows for maximum heavy loading on the legs without lower back fatigue.",
        steps: [
            "Sit in the machine and place your feet shoulder-width apart.",
            "Unrack the sled and lower it until your knees hit 90 degrees.",
            "Press the weight back up without fully locking your knees out."
        ]
    },
    {
        id: 25,
        name: "Bulgarian Split Squat",
        category: "lower",
        equipment: "dumbbell",
        muscle: "Quads & Glutes",
        difficulty: "Advanced",
        description: "Brutal unilateral exercise that fixes leg imbalances and builds massive quads.",
        steps: [
            "Rest your back foot on a bench and hold dumbbells in your hands.",
            "Drop your back knee straight down toward the floor.",
            "Drive through the front heel to return to the starting position."
        ]
    },
    {
        id: 26,
        name: "Leg Extension",
        category: "lower",
        equipment: "machine",
        muscle: "Quadriceps",
        difficulty: "Beginner",
        description: "The only movement that truly isolates the rectus femoris muscle of the quad.",
        steps: [
            "Sit at the machine with the pad resting just above your ankles.",
            "Extend your legs fully to kick the weight up.",
            "Hold the squeeze for a second, then lower slowly."
        ]
    },
    {
        id: 27,
        name: "Seated Leg Curl",
        category: "lower",
        equipment: "machine",
        muscle: "Hamstrings",
        difficulty: "Beginner",
        description: "Isolates the hamstrings in a stretched position for optimal muscle growth.",
        steps: [
            "Sit in the machine and secure the thigh pad tight.",
            "Curl your legs back as far as possible.",
            "Control the weight on the way up to maintain tension."
        ]
    },
    {
        id: 28,
        name: "Dumbbell Goblet Squat",
        category: "lower",
        equipment: "dumbbell",
        muscle: "Quads & Core",
        difficulty: "Beginner",
        description: "Excellent alternative to barbell squats that naturally enforces good posture.",
        steps: [
            "Hold a single heavy dumbbell vertically against your chest.",
            "Squat straight down, keeping your torso very upright.",
            "Drive back up using your quads."
        ]
    },
    {
        id: 29,
        name: "Hack Squat",
        category: "lower",
        equipment: "machine",
        muscle: "Quadriceps",
        difficulty: "Intermediate",
        description: "Machine squat variation that provides back support for ultimate quad targeting.",
        steps: [
            "Step into the machine with your back flat against the pad.",
            "Squat down as deep as your mobility allows.",
            "Press back up aggressively through the entire foot."
        ]
    },
    {
        id: 30,
        name: "Standing Calf Raise",
        category: "lower",
        equipment: "machine",
        muscle: "Calves / Gastrocnemius",
        difficulty: "Beginner",
        description: "The absolute necessity for growing stubborn calf muscles.",
        steps: [
            "Stand with the balls of your feet on the edge of the platform.",
            "Lower your heels down to get a deep stretch.",
            "Drive up onto your toes, squeezing the calves hard at the top."
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

