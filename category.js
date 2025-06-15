const countdown = document.getElementById('countdown');
// Offer ends 5 days from when the page is loaded.
// If you want a fixed date, change this to: new Date('June 30, 2025 23:59:59 EAT');
const offerEnd = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

function updateCountdown() {
  const now = new Date();
  const timeLeft = offerEnd - now;

  if (timeLeft <= 0) {
    countdown.textContent = 'Offer expired';
    clearInterval(countdownInterval); // Stop the interval once expired
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdown.textContent = `Offer ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Initial call to display the countdown immediately
updateCountdown();

// Update every second and store the interval ID
const countdownInterval = setInterval(updateCountdown, 1000);