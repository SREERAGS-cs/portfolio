/ Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Certificate Modal Logic
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementById('modal-close');
    const certLinks = document.querySelectorAll('.view-certificate');

    if (modal && modalImg && closeBtn) {
        // Open Modal
        certLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && (href.endsWith('.jpg') || href.endsWith('.jpeg') || href.endsWith('.png') || href.endsWith('.webp'))) {
                    e.preventDefault();
                    modalImg.src = href;
                    modal.classList.remove('hidden');
                    // Small delay to allow display:flex to apply before opacity transition
                    setTimeout(() => {
                        modal.classList.remove('opacity-0');
                        modalImg.classList.remove('scale-95');
                        modalImg.classList.add('scale-100');
                    }, 10);
                }
            });
        });

        // Close Modal Function
        const closeModal = () => {
            modal.classList.add('opacity-0');
            modalImg.classList.remove('scale-100');
            modalImg.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modalImg.src = '';
            }, 300); // Wait for transition
        };

        // Close on Button Click
        closeBtn.addEventListener('click', closeModal);

        // Close on Outside Click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // Form Validation (Only on contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('form-message');

            if (!name || !email || !message) {
                showFeedback(formMessage, 'Please fill in all fields.', 'text-red-500');
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback(formMessage, 'Please enter a valid email address.', 'text-red-500');
                return;
            }

            // Simulate form submission
            showFeedback(formMessage, 'Sending...', 'text-cyan');
            setTimeout(() => {
                showFeedback(formMessage, 'Message sent successfully!', 'text-green-500');
                contactForm.reset();
            }, 1500);
        });
    }

    function showFeedback(element, text, colorClass) {
        element.textContent = text;
        element.className = 'mt-4 text-center ' + colorClass;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
