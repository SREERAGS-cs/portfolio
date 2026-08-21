// Shared Tailwind CDN theme for every Tailwind-based page.
// Must be loaded after https://cdn.tailwindcss.com.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: '#0a0e17',
                lightNavy: '#111827',
                cardNavy: '#0f172a',
                cyan: '#3b82f6',
                slate: '#94a3b8',
                lightSlate: '#cbd5e1',
                white: '#f8fafc',
                greenGlow: '#22c55e',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            }
        }
    }
};
