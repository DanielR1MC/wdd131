const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

// Array de ejercicios con la propiedad 'equipment' agregada
const exercises = [
    {
        id: 1,
        name: "Bench Press",
        category: "upper",
        equipment: "barbell",
        muscle: "Chest / Pectorals",
        difficulty: "Intermediate",
        description: "A fundamental compound movement for building chest, shoulder, and tricep strength.",
        steps: ["Lie flat on the bench.", "Grip the bar slightly wider than shoulder-width.", "Lower the bar to mid-chest.", "Press up explosively until arms are extended."]
    },
    {
        id: 2,
        name: "Lat Pulldown",
        category: "upper",
        equipment: "machine",
        muscle: "Back / Latissimus Dorsi",
        difficulty: "Beginner",
        description: "Focuses on developing back width and upper body pulling strength.",
        steps: ["Adjust seat pad to secure thighs.", "Grip bar with hands wider than shoulders.", "Pull bar down to upper chest.", "Control the weight back to top position."]
    },
    {
        id: 3,
        name: "Dumbbell Bicep Curl",
        category: "arms",
        equipment: "dumbbell",
        muscle: "Biceps",
        difficulty: "Beginner",
        description: "Classic isolation exercise to build biceps size and arm peak.",
        steps: ["Stand upright holding dumbbells at sides.", "Keep elbows close to your torso.", "Curl weights up towards shoulders.", "Lower smoothly back to starting position."]
    },
    {
        id: 4,
        name: "Barbell Squat",
        category: "lower",
        equipment: "barbell",
        muscle: "Quadriceps & Glutes",
        difficulty: "Advanced",
        description: "The primary compound movement for lower body mass and strength.",
        steps: ["Position bar on upper back muscles.", "Keep feet shoulder-width apart.", "Bend knees and hips to lower thighs parallel to floor.", "Drive through heels to stand back up."]
    }
];

// Variables globales para guardar los filtros seleccionados
let activeCategory = "all";
let activeEquipment = "all";

// Función para renderizar tarjetas en el DOM
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

        // Evento para abrir/cerrar el acordeón
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

// Aplicar combinación de ambos filtros
function applyFilters() {
    const filtered = exercises.filter(ex => {
        const matchesCategory = (activeCategory === "all") || (ex.category === activeCategory);
        const matchesEquipment = (activeEquipment === "all") || (ex.equipment === activeEquipment);
        return matchesCategory && matchesEquipment;
    });

    displayExercises(filtered);
}

// Inicializar la interacción
document.addEventListener("DOMContentLoaded", () => {
    displayExercises(exercises);

    // Manejador Fila 1: Categorías
    const categoryBtns = document.querySelectorAll("[data-category]");
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            applyFilters();
        });
    });

    // Manejador Fila 2: Equipamiento
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