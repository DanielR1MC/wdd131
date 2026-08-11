document.addEventListener("DOMContentLoaded", () => {
    // 1. FOOTER UPDATES
    const currentYear = new Date().getFullYear();
    const currentYearElem = document.getElementById("currentyear");
    const lastModifiedElem = document.getElementById("lastModified");

    if (currentYearElem) currentYearElem.textContent = currentYear;
    if (lastModifiedElem) lastModifiedElem.innerHTML = document.lastModified;

    // 2. SUGERENCIAS PRIVADAS
    const suggestionForm = document.getElementById("suggestionForm");
    const suggestionSuccess = document.getElementById("suggestionSuccess");

    if (suggestionForm) {
        suggestionForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const type = document.getElementById("suggestionType").value;
            const text = document.getElementById("suggestionText").value.trim();

            const savedSuggestions = JSON.parse(localStorage.getItem("fitguide_suggestions")) || [];
            savedSuggestions.push({ type, text, date: new Date().toLocaleString() });

            localStorage.setItem("fitguide_suggestions", JSON.stringify(savedSuggestions));

            suggestionForm.reset();
            if (suggestionSuccess) {
                suggestionSuccess.classList.remove("hidden");
                setTimeout(() => {
                    suggestionSuccess.classList.add("hidden");
                }, 4000);
            }
        });
    }

    // 3. EXERCISE RATINGS
    const ratingListContainer = document.getElementById("exerciseRatingList");
    const ratingSearchInput = document.getElementById("ratingSearchInput");

    let communityRatings = JSON.parse(localStorage.getItem("fitguide_community_ratings")) || {};

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
                <select class="star-select" id="select-${ex.id}">
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
                <button type="button" class="submit-rating-btn" data-id="${ex.id}">Submit Rating</button>
            </div>
            <p class="rating-status hidden" id="status-${ex.id}">★ Rating saved!</p>
        `;

        const submitBtn = card.querySelector(".submit-rating-btn");
        const select = card.querySelector(".star-select");
        const statusMsg = card.querySelector(".rating-status");

        submitBtn.addEventListener("click", () => {
            const userVal = parseFloat(select.value);

            if (isNaN(userVal)) {
                alert("Please select a rating before submitting.");
                return;
            }

            // Confirmación para evitar miss-clicks
            const confirmVote = confirm(`Are you sure you want to rate "${ex.name}" with ${userVal} stars?`);
            if (!confirmVote) return;

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

    // 4. COMENTARIOS CON ESTILO ANIME / FORO HORIZONTAL
    const publicCommentForm = document.getElementById("publicCommentForm");
    const commentsFeed = document.getElementById("commentsFeed");

    const defaultComments = [
        { id: 1, name: "Katm", date: "hace 1 año", text: "recien el 14 pq me fui a dormir", likes: 1 },
        { id: 2, name: "Screened", date: "hace 6 meses", text: "Menuda obra de arte", likes: 0 }
    ];

    let commentsList = JSON.parse(localStorage.getItem("fitguide_public_comments")) || defaultComments;

    function renderComments() {
        if (!commentsFeed) return;
        commentsFeed.innerHTML = "";

        commentsList.forEach(item => {
            const initial = item.name ? item.name.charAt(0).toUpperCase() : "U";
            
            const card = document.createElement("article");
            card.className = "anime-comment-card";
            card.innerHTML = `
                <div class="anime-avatar">${initial}</div>
                <div class="anime-comment-content">
                    <div class="anime-comment-meta">
                        <span class="anime-user-name">${item.name}</span>
                        <span class="anime-time">${item.date}</span>
                    </div>
                    <div class="anime-text">${item.text}</div>
                    <div class="anime-actions">
                        <button class="like-btn" data-id="${item.id}">👍 <span>${item.likes || 0}</span></button>
                    </div>
                </div>
            `;

            const likeBtn = card.querySelector(".like-btn");
            likeBtn.addEventListener("click", () => {
                item.likes = (item.likes || 0) + 1;
                localStorage.setItem("fitguide_public_comments", JSON.stringify(commentsList));
                renderComments();
            });

            commentsFeed.appendChild(card);
        });
    }

    if (publicCommentForm) {
        publicCommentForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = document.getElementById("userName");
            const commentInput = document.getElementById("userComment");

            const newComment = {
                id: Date.now(),
                name: nameInput.value.trim(),
                date: "hace un momento",
                text: commentInput.value.trim(),
                likes: 0
            };

            commentsList.unshift(newComment);
            localStorage.setItem("fitguide_public_comments", JSON.stringify(commentsList));

            publicCommentForm.reset();
            renderComments();
        });
    }

    renderComments();
});