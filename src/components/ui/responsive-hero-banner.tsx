"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Play, Menu, X } from 'lucide-react';

export interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

export interface Partner {
    name?: string;
    logoUrl?: string;
    href: string;
}

export interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    logoText?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl,
    logoText = "SS",
    navLinks = [
        { label: "Home", href: "#home", isActive: true },
        { label: "About", href: "#about" },
        { label: "Education", href: "#education" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Certifications", href: "#certifications" },
        { label: "Contact", href: "#contact" }
    ],
    ctaButtonText = "Get in Touch",
    ctaButtonHref = "#contact",
    badgeLabel = "Student & Builder",
    badgeText = "MSc. Software Systems @ CIT • Graduating 2029",
    title = "Sreerag S",
    titleLine2 = "Crafting Database-Driven & Web Software",
    description = "Software Systems student passionate about writing clean Python, designing resilient relational database schemas, and developing modern web experiences. Excited to solve real-world problems through robust software engineering.",
    primaryButtonText = "View Projects",
    primaryButtonHref = "#projects",
    secondaryButtonText = "Download Resume",
    secondaryButtonHref = "#contact",
    partnersTitle = "Core Development Stack & Technologies",
    partners = [
        { name: "Python", href: "#skills" },
        { name: "SQL & MySQL", href: "#skills" },
        { name: "Web & React", href: "#skills" },
        { name: "Data Systems", href: "#skills" },
        { name: "Git & Linux", href: "#skills" }
    ]
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative flex flex-col justify-between bg-[#070913]">
            {/* LAYER 1: Deep Gradient Mesh */}
            <div className="absolute inset-[-20%] -z-20 pointer-events-none opacity-85">
                <div className="w-full h-full bg-[radial-gradient(ellipse_75%_55%_at_75%_25%,rgba(6,182,212,0.22),transparent_60%),radial-gradient(ellipse_65%_55%_at_20%_75%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(circle_500px_at_50%_40%,rgba(139,92,246,0.16),transparent_70%),#070913]" />
            </div>

            {/* Aurora Wave Ribbons (Luminescent Northern Lights) */}
            <div className="absolute w-[140%] h-[80%] -left-[20%] top-[5%] blur-[65px] opacity-45 mix-blend-screen pointer-events-none -z-20 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.55)_0%,rgba(16,185,129,0.3)_40%,transparent_75%)] animate-pulse" />
            <div className="absolute w-[140%] h-[80%] -left-[20%] top-[25%] blur-[65px] opacity-45 mix-blend-screen pointer-events-none -z-20 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.5)_0%,rgba(59,130,246,0.35)_45%,transparent_75%)]" />

            {/* LAYER 2: Geometric Perspective Grid with Radial Fade */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none opacity-70"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 80% 65% at 50% 42%, #000 25%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 42%, #000 25%, transparent 80%)'
                }}
            />

            {/* LAYER 3: Soft Blurred Ambient Floating Orbs */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                {/* Cyan Orb */}
                <div className="absolute top-[5%] right-[5%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.35)_0%,rgba(6,182,212,0.06)_50%,transparent_70%)] blur-[80px] animate-pulse duration-[8000ms]" />
                {/* Electric Blue Orb */}
                <div className="absolute -bottom-[10%] -left-[5%] w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.35)_0%,rgba(37,99,235,0.06)_50%,transparent_70%)] blur-[95px]" />
                {/* Subtle Violet Orb */}
                <div className="absolute top-[35%] left-[35%] w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,rgba(139,92,246,0.04)_50%,transparent_70%)] blur-[90px]" />
            </div>

            {/* LAYER 4: Cyber Horizon Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)] pointer-events-none z-10" />

            {/* Header Navigation */}
            <header className="z-20 xl:top-4 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between pt-6">
                        <a
                            href="#home"
                            className="inline-flex items-center justify-center font-bold tracking-tight text-xl text-white transition-opacity hover:opacity-90"
                        >
                            {logoUrl ? (
                                <span
                                    className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded"
                                    style={{ backgroundImage: `url(${logoUrl})` }}
                                />
                            ) : (
                                <div className="flex items-center gap-2">
                                    <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-cyan-500/30 ring-1 ring-white/20">
                                        {logoText}
                                    </span>
                                    <span className="font-semibold text-lg tracking-wide hidden sm:inline-block">
                                        Sreerag<span className="text-cyan-400">.dev</span>
                                    </span>
                                </div>
                            )}
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-white/[0.04] px-2 py-1.5 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                                            link.isActive
                                                ? 'text-white bg-white/15 shadow-sm'
                                                : 'text-neutral-300 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={ctaButtonHref}
                                    className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1.5 text-sm font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
                                >
                                    {ctaButtonText}
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </div>
                        </nav>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur text-white hover:bg-white/20 transition-colors"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    {/* Mobile Drawer */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-3 rounded-2xl bg-neutral-950/95 ring-1 ring-white/15 backdrop-blur-2xl p-4 shadow-2xl animate-fade-slide-in-1">
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                            link.isActive ? 'text-white bg-white/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={ctaButtonHref}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-4 py-2.5 text-sm transition-colors shadow-lg shadow-cyan-500/25"
                                >
                                    {ctaButtonText}
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Main Content */}
            <div className="z-10 relative my-auto">
                <div className="max-w-7xl mx-auto pt-16 md:pt-24 pb-12 px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Status / Announcement Badge */}
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 ring-1 ring-cyan-500/20 backdrop-blur-xl animate-fade-slide-in-1 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-ping" />
                            <span className="inline-flex items-center text-xs font-semibold text-white tracking-wider">
                                {badgeLabel}
                            </span>
                            <span className="text-xs text-neutral-400">•</span>
                            <span className="text-xs font-medium text-cyan-200/90 font-mono">
                                {badgeText}
                            </span>
                        </div>

                        {/* Hero Headline */}
                        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-4xl text-white tracking-tight font-serif font-normal animate-fade-slide-in-2">
                            <span className="block text-2xl sm:text-3xl font-sans font-medium text-neutral-300 mb-2">
                                Hi, I'm <span className="text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] font-bold">{title}</span>.
                            </span>
                            <span className="block bg-gradient-to-r from-white via-cyan-100 to-neutral-400 bg-clip-text text-transparent">
                                {titleLine2}
                            </span>
                        </h1>

                        {/* Hero Description */}
                        <p className="sm:text-lg animate-fade-slide-in-3 text-base text-neutral-300 max-w-2xl mt-6 mx-auto leading-relaxed">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
                            <a
                                href={primaryButtonHref}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold text-sm py-3.5 px-7 rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(37,99,235,0.45)] hover:shadow-[0_8px_35px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 border border-white/20"
                            >
                                {primaryButtonText}
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href={secondaryButtonHref}
                                className="inline-flex items-center gap-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] px-7 py-3.5 text-sm font-medium text-neutral-200 hover:text-white border border-white/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
                            >
                                <Play className="w-4 h-4 fill-current text-cyan-400" />
                                {secondaryButtonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Partners / Tech Stack Showcase */}
            <div className="z-10 relative pb-10">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="animate-fade-slide-in-1 text-xs uppercase tracking-widest text-neutral-400 text-center font-medium">
                        {partnersTitle}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 animate-fade-slide-in-2 text-white/70 mt-6 items-center justify-items-center gap-4">
                        {partners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.href}
                                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/40 transition-all duration-200 w-full max-w-[160px] backdrop-blur-md"
                            >
                                <span className="w-2 h-2 rounded-full bg-cyan-400/80 group-hover:shadow-[0_0_8px_#22d3ee] transition-all" />
                                <span className="text-xs font-medium text-neutral-300 group-hover:text-white truncate">
                                    {partner.name || `Stack ${index + 1}`}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
