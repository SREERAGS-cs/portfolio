// Main JavaScript for Portfolio Website

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

    if (certLinks.length && !(modal && modalImg && closeBtn)) {
        console.error('Certificate modal markup is incomplete (#image-modal, #modal-image or #modal-close missing); falling back to opening certificates directly.');
    }

    if (modal && modalImg && closeBtn) {
        const modalError = document.getElementById('modal-error');

        modalImg.addEventListener('error', () => {
            const failed = modalImg.getAttribute('src');
            if (!failed) return;
            console.error(`Failed to load certificate image: ${failed}`);
            if (modalError) {
                modalError.textContent = 'This certificate image could not be loaded.';
                modalError.classList.remove('hidden');
            }
        });

        // Open Modal
        certLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && (href.endsWith('.jpg') || href.endsWith('.jpeg') || href.endsWith('.png') || href.endsWith('.webp'))) {
                    e.preventDefault();
                    if (modalError) {
                        modalError.textContent = '';
                        modalError.classList.add('hidden');
                    }
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
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const formMessage = document.getElementById('form-message');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        if (!nameInput || !emailInput || !messageInput || !formMessage) {
            console.error('Contact form is missing required elements (#name, #email, #message or #form-message); submit handling is disabled.');
        } else {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const message = messageInput.value.trim();

                if (!name || !email || !message) {
                    showFeedback(formMessage, 'Please fill in all fields.', 'text-red-500');
                    return;
                }

                if (!isValidEmail(email)) {
                    showFeedback(formMessage, 'Please enter a valid email address.', 'text-red-500');
                    return;
                }

                const endpoint = contactForm.dataset.endpoint || contactForm.getAttribute('action');
                if (!endpoint) {
                    console.error('Contact form has no data-endpoint or action attribute; the message was not sent.');
                    showFeedback(formMessage, 'Sorry, this form is not connected to a mail service yet. Please reach out over one of the links below.', 'text-red-500');
                    return;
                }

                showFeedback(formMessage, 'Sending...', 'text-cyan');
                if (submitBtn) submitBtn.disabled = true;

                try {
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, email, message })
                    });

                    if (!response.ok) {
                        throw new Error(`Contact endpoint responded with ${response.status} ${response.statusText}`);
                    }

                    showFeedback(formMessage, 'Message sent successfully!', 'text-green-500');
                    contactForm.reset();
                } catch (error) {
                    console.error('Failed to send contact message:', error);
                    showFeedback(formMessage, 'Your message could not be sent. Please try again or email me directly.', 'text-red-500');
                } finally {
                    if (submitBtn) submitBtn.disabled = false;
                }
            });
        }
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
