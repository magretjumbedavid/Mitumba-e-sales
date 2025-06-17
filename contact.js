
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.querySelector('i').classList.toggle('fa-bars');
  navToggle.querySelector('i').classList.toggle('fa-xmark');
});


const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formMsg.textContent = 'Thank you for contacting us! We will get back to you soon.';
  formMsg.style.color = '#34a853';
  setTimeout(() => { formMsg.textContent = ""; }, 5000);
  contactForm.reset();
});


const subscribeBtn = document.getElementById('subscribe-btn');
const subscribeMsg = document.getElementById('subscribe-message');
subscribeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const input = contactForm.querySelector('.newsletter');
  if (!input.value.trim()) {
    subscribeMsg.textContent = "Please enter your email or phone!";
    subscribeMsg.style.color = "#c0392b";
    return;
  }
  subscribeMsg.textContent = "Subscribed! 🎉";
  subscribeMsg.style.color = "#34a853";
  setTimeout(() => { subscribeMsg.textContent = ""; }, 4000);
  input.value = '';
});

