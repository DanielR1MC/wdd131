document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
  reviewCount += 1;
  localStorage.setItem("reviewCount", reviewCount);

  const counterDisplay = document.getElementById("review-counter");
  if (counterDisplay) {
    counterDisplay.textContent = reviewCount;
  }

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});