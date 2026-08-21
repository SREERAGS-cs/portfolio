// Main JavaScript for Portfolio Website

(function (root) {
    const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

    function isImageHref(href) {
        if (typeof href !== 'string') return false;
        const path = href.split('?')[0].split('#')[0].toLowerCase();
        return IMAGE_EXTENSIONS.some(ext => path.endsWith(ext));
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showFeedback(element, text, colorClass) {
        if (!element) return;
        element.textContent = text;
        element.className = 'mt-4 text-center ' + colorClass;
    }

    function initMobileMenu(doc) {
        const mobileMenuBtn = doc.getElementById('mobile-menu-btn');
        const mobileMenu = doc.getElementById('mobile-menu');

        if (!mobileMenuBtn || !mobileMenu) return false;

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        return true;
    }

    function initScrollAnimations(doc, win) {
        if (typeof win.IntersectionObserver !== 'function') return null;

        const observer = new win.IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target); // Only animate once
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        doc.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        return observer;
    }

    function initCertificateModal(doc) {
        const modal = doc.getElementById('image-modal');
        const modalImg = doc.getElementById('modal-image');
        const closeBtn = doc.getElementById('modal-close');

        if (!modal || !modalImg || !closeBtn) return false;

        const closeModal = () => {
            modal.classList.add('opacity-0');
            modalImg.classList.remove('scale-100');
            modalImg.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modalImg.src = '';
            }, 300); // Wait for transition
        };

        doc.querySelectorAll('.view-certificate').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!isImageHref(href)) return;
                e.preventDefault();
                modalImg.src = href;
                modal.classList.remove('hidden');
                // Small delay to allow display:flex to apply before opacity transition
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modalImg.classList.remove('scale-95');
                    modalImg.classList.add('scale-100');
                }, 10);
            });
        });

        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        doc.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });

        return true;
    }

    function initContactForm(doc) {
        const contactForm = doc.getElementById('contact-form');
        if (!contactForm) return false;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = doc.getElementById('name').value.trim();
            const email = doc.getElementById('email').value.trim();
            const message = doc.getElementById('message').value.trim();
            const formMessage = doc.getElementById('form-message');

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

        return true;
    }

    function initPortfolio(doc, win) {
        const targetDoc = doc || document;
        const targetWin = win || (typeof window !== 'undefined' ? window : undefined);
        initMobileMenu(targetDoc);
        initScrollAnimations(targetDoc, targetWin);
        initCertificateModal(targetDoc);
        initContactForm(targetDoc);
    }

    const api = {
        isImageHref,
        isValidEmail,
        showFeedback,
        initMobileMenu,
        initScrollAnimations,
        initCertificateModal,
        initContactForm,
        initPortfolio
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else if (root) {
        root.Portfolio = api;
        root.document.addEventListener('DOMContentLoaded', () => initPortfolio(root.document, root));
    }
})(typeof window !== 'undefined' ? window : null);
