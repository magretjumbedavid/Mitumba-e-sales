const countdown = document.getElementById('countdown');
const offerEnd = new Date(Date.now() + 5 * 24 * 60 * 60 *1000);

function updateCountdown() {
  const now = new Date();
  const timeLeft = offerEnd - now;

  if (timeLeft <= 0) {
    countdown.textContent = 'Offer expired';
    clearInterval(countdownInterval); 
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdown.textContent = `Offer ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}


updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);