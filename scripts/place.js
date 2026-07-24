const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;

const temperature = 31;
const windSpeed = 12;
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1) + " °C";
const chillElement = document.getElementById("chill");

if (temperature <= 10 && windSpeed > 4.8) {
    chillElement.textContent = calculateWindChill(temperature, windSpeed);
} else {
    chillElement.textContent = "N/A";
}