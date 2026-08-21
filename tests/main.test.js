import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import portfolio from '../main.js';

const {
    isImageHref,
    isValidEmail,
    showFeedback,
    initMobileMenu,
    initScrollAnimations,
    initCertificateModal,
    initContactForm,
    initPortfolio
} = portfolio;

describe('isImageHref', () => {
    it.each(['a.jpg', 'a.JPEG', 'dir/b.png', 'c.webp', 'd.png?v=2', 'e.jpg#top'])(
        'accepts %s',
        (href) => expect(isImageHref(href)).toBe(true)
    );

    it.each(['a.pdf', 'a.jpg.pdf', 'about.html', '', 'jpg'])(
        'rejects %s',
        (href) => expect(isImageHref(href)).toBe(false)
    );

    it('rejects non-string values', () => {
        expect(isImageHref(null)).toBe(false);
        expect(isImageHref(undefined)).toBe(false);
        expect(isImageHref(42)).toBe(false);
    });
});

describe('isValidEmail', () => {
    it.each(['a@b.co', 'first.last@sub.domain.org', 'user+tag@example.com'])(
        'accepts %s',
        (email) => expect(isValidEmail(email)).toBe(true)
    );

    it.each(['', 'plain', 'a@b', 'a@@b.com', 'a b@c.com', '@b.com', 'a@.com '])(
        'rejects %s',
        (email) => expect(isValidEmail(email)).toBe(false)
    );
});

describe('showFeedback', () => {
    it('sets text and colour class', () => {
        const el = document.createElement('p');
        el.className = 'stale';
        showFeedback(el, 'Sending...', 'text-cyan');
        expect(el.textContent).toBe('Sending...');
        expect(el.className).toBe('mt-4 text-center text-cyan');
    });

    it('is a no-op for a missing element', () => {
        expect(() => showFeedback(null, 'x', 'text-cyan')).not.toThrow();
    });
});

describe('initMobileMenu', () => {
    it('toggles the hidden class on click', () => {
        document.body.innerHTML = `
            <button id="mobile-menu-btn"></button>
            <nav id="mobile-menu" class="hidden"></nav>`;
        expect(initMobileMenu(document)).toBe(true);

        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.click();
        expect(menu.classList.contains('hidden')).toBe(false);
        btn.click();
        expect(menu.classList.contains('hidden')).toBe(true);
    });

    it('returns false when the markup is absent', () => {
        document.body.innerHTML = '<button id="mobile-menu-btn"></button>';
        expect(initMobileMenu(document)).toBe(false);
    });
});

describe('initScrollAnimations', () => {
    class FakeObserver {
        constructor(callback) {
            this.callback = callback;
            this.observed = [];
            this.unobserved = [];
            FakeObserver.instances.push(this);
        }

        observe(el) {
            this.observed.push(el);
        }

        unobserve(el) {
            this.unobserved.push(el);
        }
    }
    FakeObserver.instances = [];

    beforeEach(() => {
        FakeObserver.instances = [];
    });

    it('observes every fade-in element', () => {
        document.body.innerHTML = `
            <div class="fade-in" id="one"></div>
            <div class="fade-in" id="two"></div>
            <div id="three"></div>`;

        const observer = initScrollAnimations(document, { IntersectionObserver: FakeObserver });
        expect(observer.observed.map(el => el.id)).toEqual(['one', 'two']);
    });

    it('marks intersecting elements visible once and stops observing them', () => {
        document.body.innerHTML = '<div class="fade-in" id="one"></div>';
        const observer = initScrollAnimations(document, { IntersectionObserver: FakeObserver });
        const el = document.getElementById('one');

        observer.callback([{ isIntersecting: true, target: el }], observer);
        expect(el.classList.contains('visible')).toBe(true);
        expect(observer.unobserved).toEqual([el]);
    });

    it('leaves non-intersecting elements untouched', () => {
        document.body.innerHTML = '<div class="fade-in" id="one"></div>';
        const observer = initScrollAnimations(document, { IntersectionObserver: FakeObserver });
        const el = document.getElementById('one');

        observer.callback([{ isIntersecting: false, target: el }], observer);
        expect(el.classList.contains('visible')).toBe(false);
        expect(observer.unobserved).toEqual([]);
    });

    it('returns null when IntersectionObserver is unavailable', () => {
        expect(initScrollAnimations(document, {})).toBeNull();
    });
});

describe('initCertificateModal', () => {
    const modalMarkup = `
        <a class="view-certificate" id="cert" href="certificates-1.jpg"></a>
        <a class="view-certificate" id="doc" href="resume.pdf"></a>
        <div id="image-modal" class="hidden opacity-0">
            <img id="modal-image" class="scale-95" />
            <button id="modal-close"></button>
        </div>`;

    beforeEach(() => {
        vi.useFakeTimers();
        document.body.innerHTML = modalMarkup;
        expect(initCertificateModal(document)).toBe(true);
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    const openModal = () => {
        document.getElementById('cert').click();
        vi.advanceTimersByTime(10);
    };

    it('opens the modal with the clicked image', () => {
        openModal();
        const modal = document.getElementById('image-modal');
        const img = document.getElementById('modal-image');

        expect(modal.classList.contains('hidden')).toBe(false);
        expect(modal.classList.contains('opacity-0')).toBe(false);
        expect(img.getAttribute('src')).toBe('certificates-1.jpg');
        expect(img.classList.contains('scale-100')).toBe(true);
        expect(img.classList.contains('scale-95')).toBe(false);
    });

    it('ignores links that do not point at an image', () => {
        // Stop jsdom from attempting a real navigation for the untouched link.
        const swallow = (e) => e.preventDefault();
        document.addEventListener('click', swallow);
        try {
            document.getElementById('doc').click();
            vi.advanceTimersByTime(10);
        } finally {
            document.removeEventListener('click', swallow);
        }

        expect(document.getElementById('image-modal').classList.contains('hidden')).toBe(true);
        expect(document.getElementById('modal-image').getAttribute('src')).toBeNull();
    });

    it('closes on the close button after the transition', () => {
        openModal();
        document.getElementById('modal-close').click();

        const modal = document.getElementById('image-modal');
        const img = document.getElementById('modal-image');
        expect(modal.classList.contains('opacity-0')).toBe(true);
        expect(img.classList.contains('scale-95')).toBe(true);
        expect(modal.classList.contains('hidden')).toBe(false);

        vi.advanceTimersByTime(300);
        expect(modal.classList.contains('hidden')).toBe(true);
        expect(img.getAttribute('src')).toBe('');
    });

    it('closes when clicking the backdrop but not the image', () => {
        openModal();
        document.getElementById('modal-image').click();
        vi.advanceTimersByTime(300);
        expect(document.getElementById('image-modal').classList.contains('hidden')).toBe(false);

        document.getElementById('image-modal').click();
        vi.advanceTimersByTime(300);
        expect(document.getElementById('image-modal').classList.contains('hidden')).toBe(true);
    });

    it('closes on Escape only while open', () => {
        const escape = () => document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape' }));
        const modal = document.getElementById('image-modal');

        escape();
        vi.advanceTimersByTime(300);
        expect(modal.classList.contains('opacity-0')).toBe(true);

        openModal();
        escape();
        vi.advanceTimersByTime(300);
        expect(modal.classList.contains('hidden')).toBe(true);
    });

    it('ignores other keys', () => {
        openModal();
        document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter' }));
        vi.advanceTimersByTime(300);
        expect(document.getElementById('image-modal').classList.contains('hidden')).toBe(false);
    });

    it('returns false when the modal markup is incomplete', () => {
        document.body.innerHTML = '<div id="image-modal"></div>';
        expect(initCertificateModal(document)).toBe(false);
    });
});

describe('initContactForm', () => {
    const formMarkup = `
        <form id="contact-form">
            <input id="name" />
            <input id="email" />
            <textarea id="message"></textarea>
        </form>
        <p id="form-message"></p>`;

    const fill = ({ name = '', email = '', message = '' }) => {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('message').value = message;
    };

    const submit = () => document.getElementById('contact-form')
        .dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));

    beforeEach(() => {
        vi.useFakeTimers();
        document.body.innerHTML = formMarkup;
        expect(initContactForm(document)).toBe(true);
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('prevents the default submission', () => {
        fill({ name: 'A', email: 'a@b.co', message: 'Hi' });
        const event = new window.Event('submit', { bubbles: true, cancelable: true });
        document.getElementById('contact-form').dispatchEvent(event);
        expect(event.defaultPrevented).toBe(true);
    });

    it.each([
        ['', 'a@b.co', 'Hi'],
        ['A', '', 'Hi'],
        ['A', 'a@b.co', ''],
        ['   ', 'a@b.co', 'Hi']
    ])('rejects incomplete input (%s, %s, %s)', (name, email, message) => {
        fill({ name, email, message });
        submit();
        expect(document.getElementById('form-message').textContent).toBe('Please fill in all fields.');
        expect(document.getElementById('form-message').className).toContain('text-red-500');
    });

    it('rejects an invalid email', () => {
        fill({ name: 'A', email: 'not-an-email', message: 'Hi' });
        submit();
        expect(document.getElementById('form-message').textContent).toBe('Please enter a valid email address.');
    });

    it('reports sending, then success, and resets the form', () => {
        fill({ name: ' A ', email: ' a@b.co ', message: ' Hi ' });
        submit();

        const feedback = document.getElementById('form-message');
        expect(feedback.textContent).toBe('Sending...');
        expect(feedback.className).toContain('text-cyan');

        vi.advanceTimersByTime(1500);
        expect(feedback.textContent).toBe('Message sent successfully!');
        expect(feedback.className).toContain('text-green-500');
        expect(document.getElementById('name').value).toBe('');
    });

    it('returns false when there is no contact form', () => {
        document.body.innerHTML = '';
        expect(initContactForm(document)).toBe(false);
    });
});

describe('initPortfolio', () => {
    it('wires up every feature present on the page', () => {
        document.body.innerHTML = `
            <button id="mobile-menu-btn"></button>
            <nav id="mobile-menu" class="hidden"></nav>
            <div class="fade-in"></div>
            <form id="contact-form">
                <input id="name" /><input id="email" /><textarea id="message"></textarea>
            </form>
            <p id="form-message"></p>`;

        initPortfolio(document, window);

        document.getElementById('mobile-menu-btn').click();
        expect(document.getElementById('mobile-menu').classList.contains('hidden')).toBe(false);

        document.getElementById('name').value = 'A';
        document.getElementById('contact-form')
            .dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
        expect(document.getElementById('form-message').textContent).toBe('Please fill in all fields.');
    });

    it('does not throw on a page without any of the markup', () => {
        document.body.innerHTML = '';
        expect(() => initPortfolio(document, window)).not.toThrow();
    });
});
