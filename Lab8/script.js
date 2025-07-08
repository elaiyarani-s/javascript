
// Scroll to top button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function () {
  scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
};
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Dark mode toggle
const toggleButton = document.getElementById('toggle-theme');
const home = document.getElementById('home');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains("dark-mode")){
    home.style.background = "linear-gradient(33deg, rgba(28,28,40,1) 0%, rgba(18,28,38,1) 100%)";
    document.getElementById("icon").src = "images/sun.png"; 
  } else {
    document.getElementById("icon").src= "images/moon.png"
    home.style.background = "linear-gradient(33deg, rgba(242,242,255,1) 0%, rgba(235,249,255,1) 100%)";
  }
});
//  Toggle project descriptions on image click
document.querySelectorAll('.project-img').forEach(img => {
  img.addEventListener('click', () => {
    const desc = img.closest('.card').querySelector('.project-desc');
    desc.style.display = (desc.style.display === 'block') ? 'none' : 'block';
  });
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
sections.forEach(section => observer.observe(section));

const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  document.querySelectorAll(".project-card").forEach(card => {
    if (value === "all" || card.dataset.tech === value) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});




