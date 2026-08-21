import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import { describe, expect, it } from 'vitest';

const source = readFileSync(resolve(process.cwd(), 'main.js'), 'utf8');

const loadPage = (body) => {
    const dom = new JSDOM(`<!doctype html><html><body>${body}</body></html>`, {
        runScripts: 'outside-only',
        pretendToBeVisual: true
    });
    dom.window.eval(source);
    return dom;
};

describe('script-tag entry point', () => {
    it('exposes the API on window and initialises on DOMContentLoaded', () => {
        const dom = loadPage(`
            <button id="mobile-menu-btn"></button>
            <nav id="mobile-menu" class="hidden"></nav>`);
        const { window } = dom;

        expect(typeof window.Portfolio.initPortfolio).toBe('function');

        window.document.dispatchEvent(new window.Event('DOMContentLoaded'));
        window.document.getElementById('mobile-menu-btn').click();
        expect(window.document.getElementById('mobile-menu').classList.contains('hidden')).toBe(false);

        dom.window.close();
    });

    it('defaults to the ambient document when initPortfolio is called without arguments', () => {
        const dom = loadPage('<button id="mobile-menu-btn"></button><nav id="mobile-menu"></nav>');
        expect(() => dom.window.Portfolio.initPortfolio()).not.toThrow();
        dom.window.close();
    });
});
