document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.querySelector('.main-nav');
    const subNav = document.querySelector('.sub-nav');
    const heroSection = document.querySelector('.hero-section');
    const heroHeight = heroSection.offsetHeight;

    // --- 1. Sticky/Dynamic Navigation ---
    // The design shows one header on the hero and a slightly different one sticking 
    // to the top on scroll. We can achieve this by showing/hiding the two navs.

    function handleScroll() {
        if (window.scrollY > heroHeight - 80) { // -80 for nav height offset
            // When user scrolls past the hero section
            subNav.style.position = 'fixed';
            subNav.style.top = '0';
            subNav.style.backgroundColor = 'var(--color-dark)';
            mainNav.style.opacity = '0';
            mainNav.style.pointerEvents = 'none';
        } else {
            // When user is in the hero section
            subNav.style.position = 'relative'; // Or 'absolute' depending on layout
            mainNav.style.opacity = '1';
            mainNav.style.pointerEvents = 'auto';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    // --- 2. Smooth Scroll for Navigation Links (Basic JS approach) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- 3. Dynamic Section Loading (Blueprint for Full-Stack) ---
    // In a full-stack app, this is where you would fetch data:

    /* async function loadPortfolioData() {
        try {
            const response = await fetch('/api/portfolio'); // Backend endpoint
            const data = await response.json();
            
            // Logic to dynamically populate the timeline items, skills, etc.
            // Example: data.experience.forEach(item => { ... append HTML ... });

        } catch (error) {
            console.error('Failed to load portfolio data:', error);
        }
    }

    loadPortfolioData();
    */
});

// --- 4. Contact Form Submission Handler ---
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    try {
        // This endpoint MUST be created in your Node.js/Express backend (server.js)
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Message sent successfully! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Failed to send message. Please try again or email me directly.');
        }

    } catch (error) {
        console.error('Submission error:', error);
        alert('An error occurred. Please check your connection.');
    }
});