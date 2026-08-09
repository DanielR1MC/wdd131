const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;




const exercises = [
    {
        id: 1,
        name: "Bench Press",
        category: "upper",
        muscle: "Chest / Pectorals",
        difficulty: "Intermediate",
        description: "A fundamental compound movement for building chest, shoulder, and tricep strength.",
        steps: ["Lie flat on the bench.", "Grip the bar slightly wider than shoulder-width.", "Lower the bar to mid-chest.", "Press up explosively until arms are extended."]
    },
    {
        id: 2,
        name: "Lat Pulldown",
        category: "upper",
        muscle: "Back / Latissimus Dorsi",
        difficulty: "Beginner",
        description: "Focuses on developing back width and upper body pulling strength.",
        steps: ["Adjust seat pad to secure thighs.", "Grip bar with hands wider than shoulders.", "Pull bar down to upper chest.", "Control the weight back to top position."]
    },
    {
        id: 3,
        name: "Dumbbell Bicep Curl",
        category: "arms",
        muscle: "Biceps",
        difficulty: "Beginner",
        description: "Classic isolation exercise to build biceps size and arm peak.",
        steps: ["Stand upright holding dumbbells at sides.", "Keep elbows close to your torso.", "Curl weights up towards shoulders.", "Lower smoothly back to starting position."]
    },
    {
        id: 4,
        name: "Barbell Squat",
        category: "lower",
        muscle: "Quadriceps & Glutes",
        difficulty: "Advanced",
        description: "The primary compound movement for lower body mass and strength.",
        steps: ["Position bar on upper back muscles.", "Keep feet shoulder-width apart.", "Bend knees and hips to lower thighs parallel to floor.", "Drive through heels to stand back up."]
    }
];

// Función para renderizar las tarjetas en la página
function displayExercises(items) {
    const grid = document.getElementById("exercise-grid");
    grid.innerHTML = "";

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

        // Evento para abrir/cerrar acordeón
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

// Inicialización y manejo de Filtros
document.addEventListener("DOMContentLoaded", () => {
    displayExercises(exercises);

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");
            if (filter === "all") {
                displayExercises(exercises);
            } else {
                const filtered = exercises.filter(e => e.category === filter);
                displayExercises(filtered);
            }
        });
    });
});