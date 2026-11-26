// 1. Personalized Typing Effect
const words = [
    "C++ applications.",
    "Python scripts.",
    "logical solutions.",
    "computer networks."
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}
typeEffect();


// 2. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((section) => {
    observer.observe(section);
});


// 3. Interactive Category Filter for Certifications & Awards
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove 'active' class from all buttons, add to the clicked one
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        cards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");
            if (filterValue === "all" || filterValue === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});