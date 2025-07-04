// ⌨️ Typewriter Animation
const typewriter = document.getElementById("typewriter");
const roles = [
  "Java Developer ",
  "Spring Boot Specialist ",
  "Backend Engineer ",
  "MongoDB + MySQL Enthusiast",
];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = roles[index];
  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
    }
  } else {
    typewriter.textContent = currentText.substring(0, charIndex++);
    if (charIndex === currentText.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// 🌙 Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  document.body.style.backgroundColor = isDark ? "#0f172a" : "";
  document.body.style.color = isDark ? "#f1f5f9" : "";
});
