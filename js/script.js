/* ==========================================================================
   script.js: Sreerag S Portfolio
   Contents
   1. Enable JS-dependent styles
   2. Navbar: scrolled state
   3. Navbar: close mobile menu on link click
   4. Scroll-spy: highlight the current section
   5. Content visibility (instant normal display)
   6. Footer year
   7. Contact form validation
   8. Hero particles background
   ========================================================================== */

"use strict";

/* 1. ENABLE JS-DEPENDENT STYLES ------------------------------------------- */
document.documentElement.classList.add("js");


document.addEventListener("DOMContentLoaded", () => {
    initNavbarScrollState();
    initMobileMenuClose();
    initScrollSpy();
    initPresentationScroll();
    initFooterYear();
    initContactForm();
    initHeroFuturisticBackground();
    initProjectFilters();
    initCertFilters();
    initHeroTypewriter();
    initHeroProfile3DTilt();
    initAboutTabs();
});


/* 2. NAVBAR: SCROLLED STATE -----------------------------------------------
   Adds ".scrolled" once the page moves, making the navbar slightly more solid. */
function initNavbarScrollState() {
    const nav = document.querySelector(".site-nav");
    if (!nav) return;

    const update = () => {
        nav.classList.toggle("scrolled", window.scrollY > 10);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
}


/* 3. NAVBAR: CLOSE MOBILE MENU ON LINK CLICK -----------------------------
   Without this, the opened hamburger menu would cover the page after a tap. */
function initMobileMenuClose() {
    const menu = document.getElementById("navMenu");
    if (!menu || typeof bootstrap === "undefined") return;

    menu.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", () => {
            if (menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
}


/* 4. SCROLL-SPY ------------------------------------------------------------
   Marks the nav link of the section currently in view as ".active". */
function initScrollSpy() {
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".site-nav .nav-link[href^='#']");
    const deckNavItems = document.querySelectorAll(".deck-nav-item");
    if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

    const setActive = (id) => {
        links.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "true");
            } else {
                link.removeAttribute("aria-current");
            }
        });

        // Synchronize floating presentation slide deck indicator
        deckNavItems.forEach((item) => {
            const isActive = item.getAttribute("href") === `#${id}`;
            item.classList.toggle("active", isActive);
            if (isActive) {
                item.setAttribute("aria-current", "true");
            } else {
                item.removeAttribute("aria-current");
            }
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    setActive("home");
}


/* 5. PRESENTATION DECK SCROLL ANIMATIONS & PROGRESS -----------------------
   Drives smooth keynote-style presentation transitions and deck progress. */
function initPresentationScroll() {
    const revealElements = document.querySelectorAll(".reveal");
    const progressBar = document.getElementById("deckProgressBar");
    const deckNavItems = document.querySelectorAll(".deck-nav-item");

    // Scroll progress bar tracker
    const updateProgressBar = () => {
        if (!progressBar) return;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute("aria-valuenow", Math.round(progress));
    };

    window.addEventListener("scroll", updateProgressBar, { passive: true });
    updateProgressBar();

    if (!revealElements.length) return;

    // Immediately show hero elements so the opening slide is instantly crisp
    document.querySelectorAll("#home .reveal").forEach((el) => {
        el.classList.add("is-visible");
    });

    // Check if user prefers reduced motion or lacks IntersectionObserver
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealElements.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    // High performance IntersectionObserver for presentation slides
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((el) => {
        // If element is already in viewport on load, show it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("is-visible");
        } else {
            observer.observe(el);
        }
    });

    // Sync Deck Navigator with current slide
    if (deckNavItems.length) {
        const sections = document.querySelectorAll("main section[id], #home");
        const syncDeckNav = () => {
            const scrollPos = window.scrollY + 200;
            sections.forEach((sec) => {
                const top = sec.offsetTop;
                const height = sec.offsetHeight;
                const id = sec.getAttribute("id");
                if (scrollPos >= top && scrollPos < top + height) {
                    deckNavItems.forEach((item) => {
                        const targetId = item.getAttribute("href").replace("#", "");
                        item.classList.toggle("active", targetId === id);
                    });
                }
            });
        };

        window.addEventListener("scroll", syncDeckNav, { passive: true });
        syncDeckNav();
    }
}


/* 6. FOOTER YEAR ----------------------------------------------------------- */
function initFooterYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
}


/* 7. CONTACT FORM & INTERACTIVE DISPATCHER --------------------------------
   Validates fields, handles quick topic presets, clipboard copy, and launches direct mailto transmission. */
function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    const copyBtn = document.getElementById("copyEmailBtn");
    const copyIcon = document.getElementById("copyEmailIcon");
    const topicChips = document.querySelectorAll(".topic-chip");
    const subjectInput = document.getElementById("subject");

    // Copy Email to clipboard with visual feedback
    if (copyBtn && copyIcon) {
        copyBtn.addEventListener("click", () => {
            const email = "sreeragkootale@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                copyIcon.className = "bi bi-check2 text-emerald-accent";
                copyBtn.setAttribute("title", "Copied to clipboard!");
                setTimeout(() => {
                    copyIcon.className = "bi bi-clipboard";
                    copyBtn.setAttribute("title", "Copy email address");
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                const tempInput = document.createElement("input");
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                copyIcon.className = "bi bi-check2 text-emerald-accent";
                setTimeout(() => {
                    copyIcon.className = "bi bi-clipboard";
                }, 2000);
            });
        });
    }

    // Quick topic preset buttons
    if (topicChips.length && subjectInput) {
        topicChips.forEach(chip => {
            chip.addEventListener("click", () => {
                const topic = chip.getAttribute("data-topic");
                topicChips.forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                subjectInput.value = `[${topic}] `;
                subjectInput.focus();
            });
        });
    }

    if (!form || !status) return;

    const fields = form.querySelectorAll("input, textarea");

    const validateField = (field) => {
        const valid = field.value.trim() !== "" && field.checkValidity();
        field.classList.toggle("is-invalid", !valid);
        field.classList.toggle("is-valid", valid);
        return valid;
    };

    fields.forEach((field) => {
        field.addEventListener("blur", () => validateField(field));
        field.addEventListener("input", () => {
            if (field.classList.contains("is-invalid") || field.classList.contains("is-valid")) {
                validateField(field);
            }
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.style.display = "none";
        status.innerHTML = "";

        let firstInvalid = null;
        fields.forEach((field) => {
            if (!validateField(field) && !firstInvalid) firstInvalid = field;
        });

        if (firstInvalid) {
            firstInvalid.focus();
            return;
        }

        const nameVal = document.getElementById("name") ? document.getElementById("name").value.trim() : "";
        const emailVal = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
        const subjectVal = subjectInput ? subjectInput.value.trim() : "Portfolio Contact";
        const messageVal = document.getElementById("message") ? document.getElementById("message").value.trim() : "";
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "Send Message";

        // Display loading state on button
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Transmitting to Sreerag...';
        }

        const payload = {
            name: nameVal,
            email: emailVal,
            _replyto: emailVal,
            subject: subjectVal,
            message: messageVal,
            _subject: `New Portfolio Message from ${nameVal}: ${subjectVal}`,
            _template: "table",
            _captcha: "false"
        };

        // Send directly via FormSubmit AJAX service
        fetch("https://formsubmit.co/ajax/sreeragkootale@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }

            status.className = "form-status-alert alert-success";
            status.style.display = "block";
            status.innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> <strong>Message Sent Successfully!</strong> Thank you ${nameVal}, your transmission has been delivered directly to Sreerag's email inbox (<strong>sreeragkootale@gmail.com</strong>). You will receive a response shortly at <strong>${emailVal}</strong>.`;

            form.reset();
            fields.forEach(f => {
                f.classList.remove("is-valid");
                f.classList.remove("is-invalid");
            });
            topicChips.forEach(c => c.classList.remove("active"));
        })
        .catch(error => {
            console.error("Transmission error:", error);
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }

            // Fallback: trigger client mailto so message is never lost
            const mailBody = `Hi Sreerag,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}\n\n---\nSent via portfolio contact dispatcher`;
            const mailtoUrl = `mailto:sreeragkootale@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(mailBody)}`;

            status.className = "form-status-alert alert-warning";
            status.style.display = "block";
            status.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i> Network service paused. <a href="${mailtoUrl}" class="text-white text-decoration-underline font-monospace">Click here to send directly via your mail client</a>.`;

            window.location.href = mailtoUrl;
        });
    });
}


/* 8. HERO PARTICLES BACKGROUND --------------------------------------------
   Lightweight HTML5 Canvas micro-particles drifting subtly in the background. */
function initHeroFuturisticBackground() {
    const canvas = document.getElementById("heroParticlesCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;
    let isVisible = true;

    const mouse = {
        x: -9999,
        y: -9999,
        radius: 130
    };

    const colors = [
        "rgba(56, 189, 248, ",   // sky-400
        "rgba(6, 182, 212, ",    // cyan-500
        "rgba(99, 102, 241, ",   // indigo-500
        "rgba(255, 255, 255, "   // white
    ];

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        initParticles();
    }

    function initParticles() {
        particles = [];
        const count = Math.max(28, Math.min(60, Math.floor((width * height) / 22000)));

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                baseRadius: Math.random() * 1.6 + 0.8,
                radius: 0,
                colorPrefix: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random() * 0.5 + 0.2,
                baseAlpha: Math.random() * 0.5 + 0.2,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35 - 0.1,
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseAngle: Math.random() * Math.PI * 2
            });
        }
    }

    function render() {
        if (!isVisible) return;

        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            p.x += p.vx;
            p.y += p.vy;
            p.pulseAngle += p.pulseSpeed;
            p.alpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.15;
            p.radius = p.baseRadius + Math.sin(p.pulseAngle) * 0.3;

            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius && dist > 0) {
                const force = (mouse.radius - dist) / mouse.radius;
                p.x += (dx / dist) * force * 1.5;
                p.y += (dy / dist) * force * 1.5;
            }

            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10;
            if (p.y > height + 10) p.y = -10;

            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
            ctx.fillStyle = p.colorPrefix + Math.max(0.05, Math.min(1, p.alpha)) + ")";
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.colorPrefix + "0.6)";
            ctx.fill();
        }

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 85) {
                    const lineAlpha = (1 - dist / 85) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = "rgba(56, 189, 248, " + lineAlpha + ")";
                    ctx.lineWidth = 0.75;
                    ctx.shadowBlur = 0;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(render);
    }

    const heroSection = document.getElementById("home");
    if (heroSection) {
        heroSection.addEventListener("mousemove", (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        }, { passive: true });

        heroSection.addEventListener("mouseleave", () => {
            mouse.x = -9999;
            mouse.y = -9999;
        }, { passive: true });

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    isVisible = entry.isIntersecting;
                    if (isVisible && !animationFrameId) {
                        animationFrameId = requestAnimationFrame(render);
                    }
                });
            }, { threshold: 0.05 });
            observer.observe(heroSection);
        }
    }

    document.addEventListener("visibilitychange", () => {
        isVisible = !document.hidden;
        if (isVisible && !animationFrameId) {
            animationFrameId = requestAnimationFrame(render);
        }
    });

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 150);
    }, { passive: true });

    resize();
    render();
}

/* 9. PROJECT CATEGORY FILTERS --------------------------------------------- */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".project-filter-btn");
    const projectItems = document.querySelectorAll("[data-project-category]");
    if (!filterBtns.length || !projectItems.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            projectItems.forEach(item => {
                const category = item.getAttribute("data-project-category") || "";
                const matches = filter === "all" || category === filter || category.split(" ").includes(filter);
                if (matches) {
                    item.style.display = "";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 10);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.96)";
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 200);
                }
            });
        });
    });
}


/* 10. HERO DYNAMIC TYPEWRITER ----------------------------------------------
   Smoothly rotates role phrases with human typing cadence. */
function initHeroTypewriter() {
    const textElem = document.getElementById("heroTypingText");
    if (!textElem) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const phrases = [
        "Database-Driven Systems",
        "AI & Machine Learning Solutions",
        "Intelligent Full-Stack Apps",
        "Scalable Data Architectures"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    textElem.textContent = "";

    function typeNextChar() {
        const currentPhrase = phrases[phraseIndex];

        if (charIndex <= currentPhrase.length) {
            textElem.textContent = currentPhrase.substring(0, charIndex);
            charIndex++;
            // Natural human typing cadence (55ms - 80ms)
            const speed = 55 + Math.random() * 25;
            setTimeout(typeNextChar, speed);
        } else {
            // Phrase fully typed: hold for 2.6s so user can read comfortably
            setTimeout(() => {
                // Smooth upward fade-out instead of disruptive character-by-character backspace
                textElem.style.transition = "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
                textElem.style.opacity = "0";
                textElem.style.transform = "translateY(-6px)";

                setTimeout(() => {
                    // Advance to next phrase and reset position seamlessly
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    charIndex = 0;
                    textElem.textContent = "";
                    textElem.style.transition = "none";
                    textElem.style.transform = "translateY(6px)";
                    textElem.style.opacity = "1";

                    setTimeout(() => {
                        textElem.style.transition = "transform 0.15s ease";
                        textElem.style.transform = "translateY(0)";
                        typeNextChar();
                    }, 40);
                }, 360);
            }, 2600);
        }
    }

    // Smooth initial start
    setTimeout(typeNextChar, 700);
}


/* 11. HERO PROFILE CARD 3D INTERACTIVE TILT -------------------------------
   Applies smooth perspective 3D tilt tracking user mouse movements. */
function initHeroProfile3DTilt() {
    const card = document.querySelector(".profile-card-futuristic, .hero-avatar-round, .hero-portrait-frame");
    const hero = document.getElementById("home");
    if (!card || !hero) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(hover: none)").matches) {
        return;
    }

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    hero.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;

        // Subtle realistic 3D tilt angles
        targetX = Math.max(-10, Math.min(10, -deltaY / 24));
        targetY = Math.max(-12, Math.min(12, deltaX / 24));

        if (!rafId) {
            rafId = requestAnimationFrame(updateTilt);
        }
    }, { passive: true });

    hero.addEventListener("mouseleave", () => {
        targetX = 0;
        targetY = 0;
        if (!rafId) {
            rafId = requestAnimationFrame(updateTilt);
        }
    }, { passive: true });

    function updateTilt() {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        card.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(8px)`;

        if (Math.abs(targetX - currentX) > 0.04 || Math.abs(targetY - currentY) > 0.04) {
            rafId = requestAnimationFrame(updateTilt);
        } else {
            rafId = null;
        }
    }
}


/* 12. ABOUT SECTION INTERACTIVE PERSPECTIVE TABS ---------------------------
   Switches between Narrative, Engineering Protocol, and Core Drivers. */
function initAboutTabs() {
    const tabBtns = document.querySelectorAll(".about-tab-btn");
    const panels = document.querySelectorAll(".about-panel");
    if (!tabBtns.length || !panels.length) return;

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-about-tab");

            tabBtns.forEach(b => {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            });

            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");

            panels.forEach(panel => {
                if (panel.getAttribute("data-about-panel") === targetTab) {
                    panel.classList.add("active");
                } else {
                    panel.classList.remove("active");
                }
            });
        });
    });
}


/* 13. CERTIFICATIONS DOMAIN FILTER ----------------------------------------
   Filters certification cards by category with smooth scale and opacity transitions. */
function initCertFilters() {
    const filterBtns = document.querySelectorAll(".cert-filter-btn");
    const certItems = document.querySelectorAll("[data-cert-category]");
    if (!filterBtns.length || !certItems.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-cert-filter");
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            certItems.forEach(item => {
                const category = item.getAttribute("data-cert-category");
                if (filter === "all" || category === filter) {
                    item.style.display = "";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 10);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.96)";
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 200);
                }
            });
        });
    });
}

