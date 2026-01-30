/**
 * Conversor de Letras - Como conversorsdeletras.com
 * Escribe texto → ves estilos → haz clic en uno y se copia automáticamente
 */

(function() {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        if (typeof window.FTGPUnicodeMappings === 'undefined') {
            setTimeout(init, 100);
            return;
        }
        const container = document.getElementById('ftgp-container');
        if (!container) return;
        const app = new ConversorLetras();
        app.init();
    }

    // Nombres de los 20 estilos por defecto (para no duplicar)
    const DEFAULT_STYLE_NAMES = [
        'Fraktur', 'Bold Fraktur', 'Script', 'Script Bold', 'Double Struck', 'Fullwidth',
        'Small Caps', 'Circled', 'Squared', 'Superscript', 'Subscript', 'Zalgo', 'Glitch',
        'Upside Down', 'Mirror', 'Boxed', 'Banner', 'Emoji Decorated', 'Strike', 'Underline'
    ];

    class ConversorLetras {
        constructor() {
            this.input = document.getElementById('ftgp-input');
            this.results = document.getElementById('ftgp-results');
            this.loadMoreBtn = document.getElementById('ftgp-load-more');
            this.toast = document.getElementById('ftgp-toast');

            this.styles = [];
            this.currentPage = 0;
            this.stylesPerPage = 20;
            this.filteredStyles = [];
            this.defaultText = 'Bienvenido';
            this.debounceTimer = null;
            this.generationTimer = null;
        }

        init() {
            this.buildStyles();
            this.setupEventListeners();
            this.generate();
        }

        buildStyles() {
            const FTGP = window.FTGPUnicodeMappings;
            if (!FTGP || !FTGP.generateDefaultStyles || !FTGP.generateStyles) return;

            const defaultStyles = FTGP.generateDefaultStyles();
            const allStyles = FTGP.generateStyles();
            const defaultNamesSet = new Set(DEFAULT_STYLE_NAMES);
            const rest = allStyles.filter(s => !defaultNamesSet.has(s.name));

            this.styles = [...defaultStyles, ...rest];
            this.filteredStyles = [...this.styles];
        }

        setupEventListeners() {
            if (this.input) {
                this.input.addEventListener('input', () => this.debounceGenerate());
            }
            if (this.loadMoreBtn) {
                this.loadMoreBtn.addEventListener('click', () => this.loadMore());
            }
        }

        debounceGenerate() {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => this.generate(), 150);
        }

        getText() {
            const raw = this.input ? this.input.value.trim() : '';
            return raw || this.defaultText;
        }

        generate() {
            if (!this.input || !this.results) return;
            const text = this.getText();
            clearTimeout(this.generationTimer);
            this.generationTimer = setTimeout(() => this.renderResults(text), 0);
        }

        renderResults(text) {
            if (!this.results) return;

            if (text !== this.lastRenderedText) {
                this.results.innerHTML = '';
                this.currentPage = 0;
            }
            this.lastRenderedText = text;

            const start = 0;
            const end = Math.min((this.currentPage + 1) * this.stylesPerPage, this.filteredStyles.length);
            const toRender = this.filteredStyles.slice(start, end);

            if (this.currentPage === 0) {
                this.results.innerHTML = '';
            }

            let index = 0;
            const batchSize = 10;
            const renderBatch = () => {
                const batchEnd = Math.min(index + batchSize, toRender.length);
                for (let i = index; i < batchEnd; i++) {
                    const style = toRender[i];
                    const transformed = this.transformText(text, style);
                    this.appendResult(style.name, transformed);
                }
                index = batchEnd;
                if (index < toRender.length) {
                    requestAnimationFrame(renderBatch);
                } else {
                    this.updateLoadMoreButton();
                }
            };
            renderBatch();
        }

        transformText(text, style) {
            try {
                if (style && style.transform) return style.transform(text);
                return text;
            } catch (e) {
                return text;
            }
        }

        appendResult(name, transformed) {
            if (!this.results) return;

            const card = document.createElement('div');
            card.className = 'ftgp-result-card';
            card.setAttribute('data-style-name', name.toLowerCase().replace(/\s+/g, '-'));
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');

            const textEl = document.createElement('div');
            textEl.className = 'ftgp-result-text';
            textEl.textContent = transformed;
            textEl.setAttribute('data-text', transformed);

            const copyIcon = document.createElement('span');
            copyIcon.className = 'ftgp-copy-icon';
            copyIcon.setAttribute('aria-hidden', 'true');
            copyIcon.innerHTML = '📋';

            card.appendChild(textEl);
            card.appendChild(copyIcon);

            const copyAndToast = (e) => {
                if (e) e.preventDefault();
                this.copyToClipboard(transformed);
            };

            card.addEventListener('click', copyAndToast);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    copyAndToast();
                }
            });

            this.results.appendChild(card);
        }

        copyToClipboard(text) {
            const message = '¡Copiado! Ya puedes pegarlo en Instagram, Facebook, etc.';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    this.showToast(message);
                }).catch(() => this.fallbackCopy(text, message));
            } else {
                this.fallbackCopy(text, message);
            }
        }

        fallbackCopy(text, message) {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand('copy');
                this.showToast(message);
            } catch (err) {
                this.showToast('No se pudo copiar. Selecciona y copia manualmente.');
            }
            document.body.removeChild(ta);
        }

        showToast(message) {
            if (!this.toast) return;
            const el = document.getElementById('ftgp-toast-message');
            if (el) el.textContent = message;
            this.toast.classList.add('ftgp-toast-show');
            setTimeout(() => this.toast.classList.remove('ftgp-toast-show'), 3000);
        }

        loadMore() {
            this.currentPage++;
            this.renderResults(this.getText());
        }

        updateLoadMoreButton() {
            const wrapper = document.getElementById('ftgp-load-more-wrapper');
            if (!this.loadMoreBtn) return;
            const totalRendered = Math.min((this.currentPage + 1) * this.stylesPerPage, this.filteredStyles.length);
            const hasMore = totalRendered < this.filteredStyles.length;
            this.loadMoreBtn.style.display = hasMore ? 'inline-block' : 'none';
            if (wrapper) wrapper.style.display = hasMore ? 'block' : 'none';
            if (hasMore) {
                const remaining = this.filteredStyles.length - totalRendered;
                this.loadMoreBtn.textContent = remaining > 0 ? 'Cargar Más (' + remaining + ' restantes)' : 'Cargar Más';
            }
        }
    }
})();
