// Add any interactivity here
console.log("Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navLinks");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
});

// Simple slider with autoplay, prev/next and dots
document.addEventListener('DOMContentLoaded', function () {
  const slidesContainer = document.querySelector('.hero.slider .slides');
  const slides = Array.from(document.querySelectorAll('.hero.slider .slide'));
  const prevBtn = document.querySelector('.hero.slider .slider-btn.prev');
  const nextBtn = document.querySelector('.hero.slider .slider-btn.next');
  const dotsContainer = document.querySelector('.hero.slider .dots');

  if (!slidesContainer || slides.length === 0) return;

  let current = 0;
  const total = slides.length;
  let interval = null;
  const delay = 4000; // 4s per slide

  // create dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = (i === 0) ? 'active' : '';
    b.setAttribute('aria-label', `Go to slide ${i + 1}`);
    b.addEventListener('click', () => {
      goTo(i);
      restartAutoplay();
    });
    dotsContainer.appendChild(b);
  });

  const dots = Array.from(dotsContainer.children);

  function update() {
    slidesContainer.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() {
    current = (current + 1) % total;
    update();
  }
  function prev() {
    current = (current - 1 + total) % total;
    update();
  }
  function goTo(i) {
    current = ((i % total) + total) % total;
    update();
  }

  function startAutoplay() {
    interval = setInterval(next, delay);
  }
  function stopAutoplay() {
    clearInterval(interval);
    interval = null;
  }
  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  nextBtn && nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });
  prevBtn && prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });

  // pause on hover
  const heroEl = document.querySelector('.hero.slider');
  heroEl.addEventListener('mouseenter', stopAutoplay);
  heroEl.addEventListener('mouseleave', startAutoplay);

  // init
  update();
  startAutoplay();

  // optional: make slider responsive to resize (keeps CSS percentages so no extra code needed)
});

function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "260774336596"; // 🔁 replace with your WhatsApp number

    const text =
        `Hello Mumaya Beauty Care,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Subject: ${subject}%0A%0A` +
        `Message:%0A${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
}










