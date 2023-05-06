const currentTimeElement = document.getElementById("current-time");

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  currentTimeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
