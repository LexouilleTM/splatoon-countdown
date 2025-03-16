let targetDate;

function startCountdown() {
    const input = document.getElementById('datetime').value;
    if (!input) return;

    targetDate = new Date(input);
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('countdown').style.display = 'block';
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    const countdownElement = document.getElementById('countdown');
    const colorPicker = document.getElementById('color-picker');
    countdownElement.style.color = colorPicker.value;

    if (diff <= 0) {
        clearInterval(updateCountdown);
        countdownElement.textContent = "00:00:00";
        startConfetti();
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startConfetti() {
    const confettiCount = 25;
    const body = document.body;
    const imagePaths = [
        './img/image1.png',
        './img/image2.png',
        './img/image3.png',
        './img/image4.png',
        './img/image5.png',
        './img/image6.png',
        './img/image7.png',
        './img/image8.png'
    ];

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('img');
            confetti.classList.add('confetti');
            confetti.src = imagePaths[i % imagePaths.length];
            confetti.style.left = Math.random() * body.clientWidth + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            body.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }, Math.random() * 4000);
    }
}
