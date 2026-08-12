document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
  reviewCount += 1;
  localStorage.setItem("reviewCount", reviewCount);

  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  document.getElementById("lastModified").innerHTML = document.lastModified;
});