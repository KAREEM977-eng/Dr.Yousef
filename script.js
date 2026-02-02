// Smooth scrolling for navbar links
const links = document.querySelectorAll('nav a');

for (const link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
}
