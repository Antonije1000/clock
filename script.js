const clockDisplayed = document.createElement('h1');
function displayClock(h, m, s) {
  clockDisplayed.innerHTML = `${h}:${m}:${s}`;
  document.body.appendChild(clockDisplayed);
}
setInterval(() => {
  const hour = String(new Date().getHours()).padStart(2, '0');
  const minute = String(new Date().getMinutes()).padStart(2, '0');
  const second = String(new Date().getSeconds()).padStart(2, '0');
  displayClock(hour, minute, second);
}, 1000);
document.body.style.display = 'flex';
document.body.style.flexDirection = 'row';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.fontSize = '64px';
document.body.style.overflowY = 'hidden';
