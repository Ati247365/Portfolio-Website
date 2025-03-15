// Hide content initially and show it after a delay
const content = document.getElementById('content');
const spinner = document.getElementById('loading-spinner');

// Show content after 0 seconds (adjust as needed)
setTimeout(() => {
  spinner.style.display = 'none'; // Hide spinner
  content.classList.remove('hidden'); // Show content
}, 0);

// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
});

// Typewriter Effect for Home Section
const typewriterText = "Welcome to My Profile";
const typewriterElement = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
  if (index < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(index); // Add one character at a time
    index++;
    setTimeout(typeWriter, 100); // Adjust typing speed here (100ms per character)
  }
}

typeWriter(); // Start the typewriter effect

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block'; // Show button when scrolled down
  } else {
    scrollToTopButton.style.display = 'none'; // Hide button when at the top
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scroll to top
  });
});

