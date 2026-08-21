// Shared behaviour for every page. Each initialiser is a no-op when the
// elements it targets are absent, so the same script can be loaded everywhere.
(function () {
    'use strict';

    var IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

    function initMobileMenu() {
        var menu = document.getElementById('site-mobile-menu');
        var toggles = document.querySelectorAll('[data-menu-toggle]');
        if (!menu || !toggles.length) return;

        Array.prototype.forEach.call(toggles, function (toggle) {
            toggle.addEventListener('click', function () {
                var open = menu.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(open));
            });
        });
    }

    function reveal(el) {
        el.classList.add('visible');
    }

    function initReveal() {
        var elements = document.querySelectorAll('.fade-in');
        if (!elements.length) return;

        if (!('IntersectionObserver' in window)) {
            Array.prototype.forEach.call(elements, reveal);
            return;
        }

        var observer = new IntersectionObserver(function (entries, self) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var index = Number(entry.target.dataset.revealIndex || 0);
                setTimeout(function () { reveal(entry.target); }, 80 * index);
                self.unobserve(entry.target);
            });
        }, { threshold: 0.1 });

        Array.prototype.forEach.call(elements, function (el, i) {
            el.dataset.revealIndex = String(i);
            observer.observe(el);
        });
    }

    function isImageLink(href) {
        return IMAGE_EXTENSIONS.some(function (ext) {
            return href.toLowerCase().indexOf(ext, href.length - ext.length) !== -1;
        });
    }

    function initImageModal() {
        var modal = document.getElementById('image-modal');
        var image = document.getElementById('modal-image');
        var closeButton = document.getElementById('modal-close');
        if (!modal || !image || !closeButton) return;

        function open(href) {
            image.src = href;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(function () {
                modal.classList.remove('opacity-0');
                image.classList.remove('scale-95');
            });
        }

        function close() {
            modal.classList.add('opacity-0');
            image.classList.add('scale-95');
            document.body.style.overflow = '';
            setTimeout(function () {
                modal.classList.add('hidden');
                image.src = '';
            }, 300);
        }

        Array.prototype.forEach.call(document.querySelectorAll('.view-certificate'), function (link) {
            link.addEventListener('click', function (event) {
                var href = link.getAttribute('href');
                if (!href || !isImageLink(href)) return;
                event.preventDefault();
                open(href);
            });
        });

        closeButton.addEventListener('click', close);
        modal.addEventListener('click', function (event) {
            if (event.target === modal) close();
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !modal.classList.contains('hidden')) close();
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function initContactForm() {
        var form = document.getElementById('contact-form');
        if (!form) return;

        var feedback = document.getElementById('form-message');

        function showFeedback(text, colorClass) {
            if (!feedback) return;
            feedback.textContent = text;
            feedback.className = 'mt-4 text-center ' + colorClass;
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                showFeedback('Please fill in all fields.', 'text-red-500');
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback('Please enter a valid email address.', 'text-red-500');
                return;
            }

            showFeedback('Sending...', 'text-cyan');
            setTimeout(function () {
                showFeedback('Message sent successfully!', 'text-green-500');
                form.reset();
            }, 1500);
        });
    }

    function initScrollHint() {
        var hint = document.querySelector('.scroll-hint');
        if (!hint) return;

        window.addEventListener('scroll', function () {
            hint.style.opacity = window.scrollY > 60 ? '0' : '';
        });
    }

    function init() {
        initMobileMenu();
        initReveal();
        initImageModal();
        initContactForm();
        initScrollHint();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
