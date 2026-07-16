const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;

const menuButton = document.querySelector('#menu');
const navList = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navList.classList.toggle('show');
});