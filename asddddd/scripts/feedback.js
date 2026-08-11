document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Updates
    const currentYear = new Date().getFullYear();
    const currentYearElem = document.getElementById("currentyear");
    const lastModifiedElem = document.getElementById("lastModified");

    if (currentYearElem) currentYearElem.textContent = currentYear;
    if (lastModifiedElem) lastModifiedElem.innerHTML = document.lastModified;

    // 2. SUGGESTION FORM (Card Izquierda)
    const suggestionForm = document.getElementById("suggestionForm");
    const suggestionSuccess = document.getElementById("suggestionSuccess");

    if (suggestionForm) {
        suggestionForm.addEventListener("submit", (e) => {
            e.preventDefault();
            suggestionSuccess.classList.remove("hidden");
            suggestionForm.reset();

            setTimeout(() => {
                suggestionSuccess.classList.add("hidden");
            }, 4000);
        });
    }

    // 3. EXERCISE RATINGS CARD (Card Derecha)
    const ratingListContainer = document.getElementById("exercise-rating-list") || document.getElementById("exerciseRatingList");
    const ratingSearchInput = document.getElementById("ratingSearchInput");

    // Base de datos de calificaciones locales (Simulada/Persistida)
    let communityRatings = JSON.parse(localStorage.getItem("fitguide_community_ratings")) || {};

    // Calificaciones base fijas de la página (Official Page Rating)
    const officialRatings = {
        1: 4.8, 2: 4.7, 3: 4.6, 4: 4.5, 5: 4.8,
        6: 4.4, 7: 4.2, 8: 4.1, 9: 4.6, 10: 4.3,
        11: 4.5, 12: 4.6, 13: 4.3, 14: 4.4, 15: 4.2,
        16: 4.7, 17: 4.5, 18: 4.4, 19: 4.3, 20: 4.2,
        21: 5.0, 22: 4.9, 23: 4.8, 24: 4.6, 25: 4.7,
        26: 4.2, 27: 4.3, 28: 4.4, 29: 4.5, 30: 4.1
    };

    function renderRatingList(filterText = "") {
        if (!ratingListContainer) return;
        ratingListContainer.innerHTML = "";

        // Verificación de disponibilidad de array exercises de exercises.js
        const exerciseData = (typeof exercises !== "undefined") ? exercises : [];

        const filtered = exerciseData.filter(ex => 
            ex.name.toLowerCase().includes(filterText.toLowerCase().trim())
        );

        if (filtered.length === 0) {
            ratingListContainer.innerHTML = "<p style='text-align:center; color:#888;'>No exercises found.</p>";
            return;
        }

        filtered.forEach(ex => {
            const card = document.createElement("div");
            card.className = "rating-item-card";

            const officialScore = officialRatings[ex.id] || 4.5;
            const commData = communityRatings[ex.id] || { score: officialScore, count: 1 };

            card.innerHTML = `
                <h4>${ex.name}</h4>
                <div class="ratings-display">
                    <span><strong>Page Rating:</strong> ★ ${officialScore.toFixed(1)}</span>
                    <span><strong>Community:</strong> ★ ${commData.score.toFixed(1)} (${commData.count})</span>
                </div>
                <div class="user-vote-control">
                    <span>Your Rating:</span>
                    <select class="star-select" data-id="${ex.id}">
                        <option value="" disabled selected>Rate</option>
                        <option value="0.5">0.5 ★</option>
                        <option value="1.0">1.0 ★</option>
                        <option value="1.5">1.5 ★</option>
                        <option value="2.0">2.0 ★</option>
                        <option value="2.5">2.5 ★</option>
                        <option value="3.0">3.0 ★</option>
                        <option value="3.5">3.5 ★</option>
                        <option value="4.0">4.0 ★</option>
                        <option value="4.5">4.5 ★</option>
                        <option value="5.0">5.0 ★</option>
                    </select>
                </div>
            `;

            const select = card.querySelector(".star-select");
            select.addEventListener("change", (e) => {
                const userVal = parseFloat(e.target.value);
                const currentData = communityRatings[ex.id] || { score: officialScore, count: 1 };
                
                const newCount = currentData.count + 1;
                const newScore = ((currentData.score * currentData.count) + userVal) / newCount;

                communityRatings[ex.id] = { score: newScore, count: newCount };
                localStorage.setItem("fitguide_community_ratings", JSON.stringify(communityRatings));

                renderRatingList(ratingSearchInput ? ratingSearchInput.value : "");
            });

            ratingListContainer.appendChild(card);
        });
    }

    if (ratingSearchInput) {
        ratingSearchInput.addEventListener("input", (e) => {
            renderRatingList(e.target.value);
        });
    }

    renderRatingList();

    // 4. PUBLIC COMMENTS FEED (Card Inferior)
    const publicCommentForm = document.getElementById("publicCommentForm");
    const commentsFeed = document.getElementById("commentsFeed");

    // Comentarios iniciales por defecto
    const defaultComments = [
        { name: "Carlos M.", date: "2026-03-20", text: "Great library! The biomechanics section helped me improve my squat depth." },
        { name: "Andrea P.", date: "2026-03-21", text: "Very clear descriptions and execution steps. Would love to see core exercises added next!" }
    ];

    let commentsList = JSON.parse(localStorage.getItem("fitguide_public_comments")) || defaultComments;

    function renderComments() {
        if (!commentsFeed) return;
        commentsFeed.innerHTML = "";

        commentsList.forEach(item => {
            const card = document.createElement("article");
            card.className = "comment-card";
            card.innerHTML = `
                <div class="comment-header">
                    <span>${item.name}</span>
                    <span class="comment-date">${item.date}</span>
                </div>
                <div class="comment-body">${item.text}</div>
            `;
            commentsFeed.appendChild(card);
        });
    }

    if (publicCommentForm) {
        publicCommentForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = document.getElementById("userName");
            const commentInput = document.getElementById("userComment");

            const newComment = {
                name: nameInput.value.trim(),
                date: new Date().toISOString().split("T")[0],
                text: commentInput.value.trim()
            };

            commentsList.unshift(newComment);
            localStorage.setItem("fitguide_public_comments", JSON.stringify(commentsList));

            publicCommentForm.reset();
            renderComments();
        });
    }

    renderComments();
});