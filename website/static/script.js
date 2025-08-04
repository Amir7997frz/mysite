function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for contacting us! We will get back to you shortly.');
  this.reset();
});
