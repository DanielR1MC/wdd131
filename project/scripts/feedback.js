document.addEventListener("DOMContentLoaded", () => {


    const yrElem = document.getElementById("currentyear");
    const modElem = document.getElementById("lastModified");

    if (yrElem) yrElem.textContent = new Date().getFullYear();
    if (modElem) modElem.innerHTML = `Last Modified: ${document.lastModified}`;



    const sugForm = document.getElementById("suggestionForm");
    const sugMsg = document.getElementById("suggestionSuccess");

    if (sugForm) {
        sugForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const type = document.getElementById("suggestionType").value;
            const text = document.getElementById("suggestionText").value;

            const sugList = JSON.parse(localStorage.getItem("fitguide_suggestions")) || [];
            sugList.push({ type, text, date: new Date().toLocaleDateString() });

            localStorage.setItem("fitguide_suggestions", JSON.stringify(sugList));

            sugForm.reset();
            if (sugMsg) {
                sugMsg.classList.remove("hidden");
                setTimeout(() => {
                    sugMsg.classList.add("hidden");
                }, 4000);
            }
        });
    }


    const ratingBox = document.getElementById("exerciseRatingList");
    const searchInput = document.getElementById("ratingSearchInput");

    let userRatings = JSON.parse(localStorage.getItem("fitguide_community_ratings")) || {};


    const defaultScores = {
        1: 4.8, 2: 4.7, 3: 4.6, 4: 4.5, 5: 4.8,
        6: 4.4, 7: 4.2, 8: 4.1, 9: 4.6, 10: 4.3,
        11: 4.5, 12: 4.6, 13: 4.3, 14: 4.4, 15: 4.2,
        16: 4.7, 17: 4.5, 18: 4.4, 19: 4.3, 20: 4.2,
        21: 5.0, 22: 4.9, 23: 4.8, 24: 4.6, 25: 4.7,
        26: 4.2, 27: 4.3, 28: 4.4, 29: 4.5, 30: 4.1
    };



    function renderRatingList(query = "") {
        if (!ratingBox) return;
        ratingBox.innerHTML = "";

        const filtered = exercises.filter(ex => 
            ex.name.toLowerCase().includes(query.toLowerCase().trim())
        );

        if (filtered.length === 0) {
            ratingBox.innerHTML = "<p class='no-results-msg'>No exercises found.</p>";
            return;
        }



        filtered.forEach(ex => {
            const card = document.createElement("div");
            card.className = "rating-item-card";

            const baseScore = defaultScores[ex.id] || 4.5;
            


            let commData = userRatings[ex.id];



            if (!commData || typeof commData !== "object") {
                commData = { score: baseScore, count: 1 };
            }



            card.innerHTML = `
                <h4>${ex.name}</h4>
                <div class="ratings-display">
                    <span><strong>Page Rating:</strong> ★ ${baseScore}</span>
                    <span><strong>Community:</strong> ★ ${commData.score} (${commData.count} votes)</span>
                </div>
                <div class="user-vote-control">
                    <span>Your Rating:</span>
                    <select class="star-select" id="select-${ex.id}">
                        <option value="" disabled selected>Rate</option>
                        <option value="1">1.0 ★</option>
                        <option value="2">2.0 ★</option>
                        <option value="3">3.0 ★</option>
                        <option value="4">4.0 ★</option>
                        <option value="5">5.0 ★</option>
                    </select>
                    <button type="button" class="submit-rating-btn" data-id="${ex.id}">Submit Rating</button>
                </div>
                <p class="rating-status hidden" id="status-${ex.id}">★ Rating saved!</p>
            `;



            
            const btnSub = card.querySelector(".submit-rating-btn");
            const selectElem = card.querySelector(".star-select");

            btnSub.addEventListener("click", () => {
                const val = Number(selectElem.value);

                if (!val) {
                    alert("Please select a rating before submitting.");
                    return;
                }




                const newCount = commData.count + 1;
                const newScore = Number((((commData.score * commData.count) + val) / newCount).toFixed(1));



                
                userRatings[ex.id] = { score: newScore, count: newCount };
                localStorage.setItem("fitguide_community_ratings", JSON.stringify(userRatings));

                renderRatingList(searchInput ? searchInput.value : "");
            });

            ratingBox.appendChild(card);
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderRatingList(e.target.value);
        });
    }

    renderRatingList();




    const cmtForm = document.getElementById("publicCommentForm");
    const cmtFeed = document.getElementById("commentsFeed");

    const sampleComments = [
        { id: 1, name: "Katm", date: "1 year ago", text: "Finally got my routine structured properly, great site!", likes: 1 },
        { id: 2, name: "Screened", date: "6 months ago", text: "The exercise database is really helpful.", likes: 0 }
    ];

    let commentsData = JSON.parse(localStorage.getItem("fitguide_public_comments")) || sampleComments;

    function renderComments() {
        if (!cmtFeed) return;
        cmtFeed.innerHTML = "";

        commentsData.forEach(item => {
            if (typeof item.likes !== "number" || isNaN(item.likes)) {
                item.likes = 0;
            }

            const letter = item.name ? item.name.charAt(0).toUpperCase() : "U";
            
            const card = document.createElement("article");
            card.className = "cmt-card";
            card.innerHTML = `
                <div class="usr-avatar">${letter}</div>
                <div class="cmt-body">
                    <div class="cmt-meta">
                        <span class="usr-name">${item.name}</span>
                        <span class="cmt-date">${item.date}</span>
                    </div>
                    <div class="cmt-txt">${item.text}</div>
                    <div class="cmt-actions">
                        <button class="btn-like" data-id="${item.id}">👍 <span>${item.likes}</span></button>
                    </div>
                </div>
            `;

            const likeBtn = card.querySelector(".btn-like");
            likeBtn.addEventListener("click", () => {
                item.likes = (Number(item.likes) || 0) + 1;
                localStorage.setItem("fitguide_public_comments", JSON.stringify(commentsData));
                renderComments();
            });

            cmtFeed.appendChild(card);
        });
    }

    if (cmtForm) {
        cmtForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameVal = document.getElementById("userName").value;
            const textVal = document.getElementById("userComment").value;

            const newCmt = {
                id: Date.now(),
                name: nameVal,
                date: "Today",
                text: textVal,
                likes: 0
            };

            commentsData.unshift(newCmt);
            localStorage.setItem("fitguide_public_comments", JSON.stringify(commentsData));

            cmtForm.reset();
            renderComments();
        });
    }

    renderComments();
});