document.getElementById('siBtn').addEventListener('click', function() {
    document.getElementById('countdown').style.display = 'block';
    setInterval(updateCountdown, 1000);
});

function updateCountdown() {
    const now = new Date();
    const valentinesDay = new Date(now.getFullYear(), 1, 14); // 14 de febrero
    if (now.getMonth() === 1 && now.getDate() > 14) {
        valentinesDay.setFullYear(valentinesDay.getFullYear() + 1);
    }
    const diff = valentinesDay - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
document.getElementById('secretBtn').addEventListener('click', function() {
    alert("¡Eres la persona más especial en mi vida! ❤️");
});

