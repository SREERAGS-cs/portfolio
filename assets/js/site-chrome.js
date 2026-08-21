// Shared site chrome: navigation, footer and social links.
//
// Every page declares placeholders instead of repeating the markup:
//   <div data-site-nav></div>
//   <div data-site-footer></div>
//   <div data-social-links="github,linkedin,twitter"></div>
//
// The visual variant comes from <body data-theme="classic|tailwind">.
(function () {
    'use strict';

    var NAV_LINKS = [
        { href: 'index.html', label: 'Home' },
        { href: 'about.html', label: 'About' },
        { href: 'projects.html', label: 'Projects' },
        { href: 'certifications.html', label: 'Certifications' },
        { href: 'downloads.html', label: 'Downloads' },
        { href: 'contact.html', label: 'Contact', cta: true }
    ];

    var LOGO = 'Sreerag<span>.</span>S';

    var DEFAULT_COPY = '&copy; 2026 <span>Sreerag</span>. All Rights Reserved.';

    var SOCIAL_ICONS = {
        github: {
            label: 'GitHub',
            path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
        },
        linkedin: {
            label: 'LinkedIn',
            path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
        },
        twitter: {
            label: 'Twitter',
            path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
        },
        google: {
            label: 'Google',
            path: 'M2.003 2.485c-.013.856.262 1.956 1.722 2.054.492.033.492-.68.001-.715-1.202-.083-1.055-.91-.013-1.126.96-.199 2.503.22 3.612 1.455 1.057 1.176 1.879 2.68 2.036 4.757.065.862-1.31.868-1.378-.002-.152-2.072-.946-3.486-1.995-4.654-.959-1.069-2.228-1.545-3.076-1.472-1.295.111-1.127 1.012.012 1.08.491.029.489.742-.002.713-1.232-.072-1.579-1.03-1.46-2.16.039-.371.189-.705.539-.93zm19.997 19.515h-10c-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 2.613 0 5.093 1.002 6.945 2.846.126.125.132.321.018.461l-1.492 1.503c-.114.116-.301.126-.418.016-1.325-1.237-3.097-1.926-5.053-1.926-4.08 0-7.398 3.32-7.398 7.4s3.318 7.4 7.398 7.4c3.316 0 6.014-2.186 6.953-5.2h-4.953c-.161 0-.291-.132-.291-.293v-2.115c0-.161.13-.293.291-.293h7.697c.164 0 .296.136.296.302.006.12.009.28.009.431 0 4.629-3.327 7.962-7.854 7.962'
        }
    };

    var TW = {
        link: 'text-lightSlate hover:text-cyan px-4 py-2 rounded-md text-sm font-medium transition',
        linkActive: 'text-cyan px-4 py-2 rounded-md text-sm font-medium transition bg-white/5',
        cta: 'border border-cyan/50 text-cyan hover:bg-cyan/10 ml-2 px-4 py-2 rounded text-sm font-medium transition',
        ctaActive: 'border border-cyan/50 text-cyan bg-white/5 ml-2 px-4 py-2 rounded text-sm font-medium transition',
        mobileLink: 'text-lightSlate hover:text-cyan block px-3 py-2 rounded-md text-base font-medium',
        mobileLinkActive: 'text-cyan block px-3 py-2 rounded-md text-base font-medium',
        mobileCtaExtra: ' border-t border-cyan/10 mt-2 pt-4'
    };

    function currentPage() {
        var file = window.location.pathname.split('/').pop();
        return file || 'index.html';
    }

    function isActive(link) {
        return link.href === currentPage();
    }

    function classicNav() {
        var desktop = NAV_LINKS.map(function (link) {
            var classes = [];
            if (link.cta) classes.push('cta');
            if (isActive(link)) classes.push('active');
            return '<a href="' + link.href + '"' +
                (classes.length ? ' class="' + classes.join(' ') + '"' : '') +
                '>' + link.label + '</a>';
        }).join('');

        var mobile = NAV_LINKS.map(function (link) {
            return '<a href="' + link.href + '"' + (isActive(link) ? ' class="active"' : '') +
                '>' + link.label + '</a>';
        }).join('');

        return '<nav>' +
            '<div class="nav-inner">' +
            '<a href="index.html" class="nav-logo">' + LOGO + '</a>' +
            '<div class="nav-links">' + desktop + '</div>' +
            '<button class="hamburger" type="button" data-menu-toggle aria-label="Toggle menu"' +
            ' aria-expanded="false" aria-controls="site-mobile-menu">' +
            '<span></span><span></span><span></span>' +
            '</button>' +
            '</div>' +
            '<div class="site-mobile-menu" id="site-mobile-menu">' + mobile + '</div>' +
            '</nav>';
    }

    function tailwindNav() {
        var desktop = NAV_LINKS.map(function (link) {
            var cls = link.cta
                ? (isActive(link) ? TW.ctaActive : TW.cta)
                : (isActive(link) ? TW.linkActive : TW.link);
            return '<a href="' + link.href + '" class="' + cls + '">' + link.label + '</a>';
        }).join('');

        var mobile = NAV_LINKS.map(function (link) {
            var cls = isActive(link) ? TW.mobileLinkActive : TW.mobileLink;
            if (link.cta) cls += TW.mobileCtaExtra;
            return '<a href="' + link.href + '" class="' + cls + '">' + link.label + '</a>';
        }).join('');

        return '<nav class="fixed w-full z-50 bg-navy/90 backdrop-blur-sm border-b border-white/5">' +
            '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' +
            '<div class="flex items-center justify-between h-20">' +
            '<div class="flex-shrink-0">' +
            '<a href="index.html" class="text-2xl font-serif font-bold text-white">' +
            'Sreerag<span class="text-cyan">.</span>S</a>' +
            '</div>' +
            '<div class="hidden md:block"><div class="ml-10 flex items-baseline space-x-2">' + desktop + '</div></div>' +
            '<div class="-mr-2 flex md:hidden">' +
            '<button type="button" data-menu-toggle aria-label="Toggle menu" aria-expanded="false"' +
            ' aria-controls="site-mobile-menu"' +
            ' class="inline-flex items-center justify-center p-2 rounded-md text-cyan hover:bg-white/5 focus:outline-none">' +
            '<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">' +
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />' +
            '</svg></button>' +
            '</div>' +
            '</div></div>' +
            '<div class="site-mobile-menu bg-lightNavy border-b border-cyan/10" id="site-mobile-menu">' +
            '<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">' + mobile + '</div>' +
            '</div>' +
            '</nav>';
    }

    function socialLinksHtml(names, variant) {
        return names.map(function (name) {
            var icon = SOCIAL_ICONS[name];
            if (!icon) return '';
            if (variant === 'labelled') {
                return '<a href="#" class="social-link text-slate hover:text-cyan flex flex-col items-center"' +
                    ' aria-label="' + icon.label + '">' +
                    '<svg class="h-8 w-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="' + icon.path + '" /></svg>' +
                    '<span class="text-xs font-mono">' + icon.label + '</span></a>';
            }
            return '<a href="#" class="social-link" aria-label="' + icon.label + '">' +
                '<svg fill="currentColor" viewBox="0 0 24 24"><path d="' + icon.path + '" /></svg></a>';
        }).join('');
    }

    function classicFooter(options) {
        var socials = options.socials
            ? '<div class="social-links">' + socialLinksHtml(options.socials, 'icon') + '</div>'
            : '';
        return '<footer><div class="footer-inner">' + socials +
            '<p class="footer-copy">' + options.copy + '</p>' +
            '</div></footer>';
    }

    function tailwindFooter(options) {
        return '<footer class="bg-lightNavy py-8 text-center border-t border-cyan/10">' +
            '<p class="text-sm font-mono text-slate">' + options.copy + '</p>' +
            '</footer>';
    }

    function themeOf(el) {
        return el.getAttribute('data-theme') || document.body.getAttribute('data-theme') || 'classic';
    }

    function replace(el, html) {
        el.outerHTML = html;
    }

    function mount() {
        var navSlot = document.querySelector('[data-site-nav]');
        if (navSlot) {
            replace(navSlot, themeOf(navSlot) === 'tailwind' ? tailwindNav() : classicNav());
        }

        var footerSlot = document.querySelector('[data-site-footer]');
        if (footerSlot) {
            var socials = footerSlot.getAttribute('data-social-links');
            var options = {
                copy: footerSlot.getAttribute('data-copy') || DEFAULT_COPY,
                socials: socials ? socials.split(',') : null
            };
            replace(footerSlot, themeOf(footerSlot) === 'tailwind'
                ? tailwindFooter(options)
                : classicFooter(options));
        }

        Array.prototype.forEach.call(document.querySelectorAll('[data-social-links]:not([data-site-footer])'), function (slot) {
            var names = (slot.getAttribute('data-social-links') || '').split(',');
            slot.innerHTML = socialLinksHtml(names, slot.getAttribute('data-social-variant') || 'icon');
        });
    }

    mount();
})();
