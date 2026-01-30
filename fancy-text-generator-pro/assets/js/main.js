/**
 * Fancy Text Generator Pro - Main JavaScript
 * Handles UI interactions, text generation, and pagination
 */

(function() {
    'use strict';
    
    // Wait for DOM and Unicode mappings to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        // Wait for Unicode mappings
        if (typeof window.FTGPUnicodeMappings === 'undefined') {
            setTimeout(init, 100);
            return;
        }
        
        const container = document.getElementById('ftgp-container');
        if (!container) return;
        
        const app = new FancyTextGenerator();
        app.init();
    }
    
    class FancyTextGenerator {
        constructor() {
            this.input = document.getElementById('ftgp-input');
            this.results = document.getElementById('ftgp-results');
            this.loadMoreBtn = document.getElementById('ftgp-load-more');
            this.toast = document.getElementById('ftgp-toast');
            
            this.styles = [];
            this.currentPage = 0;
            this.stylesPerPage = 20; // Show 20 default styles
            this.filteredStyles = [];
            this.defaultText = 'Welcome';
            
            this.debounceTimer = null;
            this.generationTimer = null;
        }
        
        init() {
            this.generateStyles();
            this.setupEventListeners();
            // Generate with default text immediately
            this.generate();
        }
        
        generateStyles() {
            if (window.FTGPUnicodeMappings && window.FTGPUnicodeMappings.generateDefaultStyles) {
                // Use only the 20 default styles
                this.styles = window.FTGPUnicodeMappings.generateDefaultStyles();
                this.filteredStyles = [...this.styles];
                window.FTGPConfig.totalStyles = this.styles.length;
            }
        }
        
        setupEventListeners() {
            // Input text change - update immediately
            if (this.input) {
                this.input.addEventListener('input', () => {
                    this.debounceGenerate();
                });
            }
            
            // Load more button
            if (this.loadMoreBtn) {
                this.loadMoreBtn.addEventListener('click', () => {
                    this.loadMore();
                });
            }
        }
        
        debounceGenerate() {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
                this.generate();
            }, 150);
        }
        
        generate() {
            if (!this.input || !this.results) return;
            
            const text = this.input.value.trim() || this.defaultText;
            
            // Clear previous generation timer
            clearTimeout(this.generationTimer);
            
            // Use requestAnimationFrame for non-blocking generation
            this.generationTimer = setTimeout(() => {
                this.renderResults(text);
            }, 0);
        }
        
        renderResults(text) {
            if (!this.results) return;
            
            // Reset to first page when generating new results (text changed)
            if (text !== this.lastRenderedText) {
                this.results.innerHTML = '';
                this.currentPage = 0;
            }
            
            this.lastRenderedText = text;
            const startIndex = 0;
            const endIndex = Math.min((this.currentPage + 1) * this.stylesPerPage, this.filteredStyles.length);
            const stylesToRender = this.filteredStyles.slice(startIndex, endIndex);
            
            // Only clear if starting fresh (page 0)
            if (this.currentPage === 0) {
                this.results.innerHTML = '';
            }
            
            // Generate results in batches to avoid blocking
            let index = 0;
            const batchSize = 10;
            
            const renderBatch = () => {
                const batchEnd = Math.min(index + batchSize, stylesToRender.length);
                
                for (let i = index; i < batchEnd; i++) {
                    const style = stylesToRender[i];
                    const transformed = this.transformText(text, style);
                    this.appendResult(style.name, transformed);
                }
                
                index = batchEnd;
                
                if (index < stylesToRender.length) {
                    requestAnimationFrame(renderBatch);
                } else {
                    this.updateLoadMoreButton();
                }
            };
            
            renderBatch();
        }
        
        transformText(text, style) {
            try {
                if (style && style.transform) {
                    return style.transform(text);
                }
                return text;
            } catch (e) {
                console.error('Transform error:', e);
                return text;
            }
        }
        
        appendResult(name, transformed) {
            if (!this.results) return;
            
            const card = document.createElement('div');
            card.className = 'ftgp-result-card';
            card.setAttribute('data-style-name', name.toLowerCase());
            
            const textEl = document.createElement('div');
            textEl.className = 'ftgp-result-text';
            textEl.textContent = transformed;
            textEl.setAttribute('data-text', transformed);
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'ftgp-copy-btn';
            copyBtn.setAttribute('aria-label', `Copy ${name} style`);
            copyBtn.innerHTML = '📋';
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.copyToClipboard(transformed, name);
            });
            
            card.appendChild(textEl);
            card.appendChild(copyBtn);
            
            this.results.appendChild(card);
        }
        
        copyToClipboard(text, styleName) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    this.showToast(`Copied "${styleName}" to clipboard!`);
                }).catch(err => {
                    console.error('Copy failed:', err);
                    this.fallbackCopy(text, styleName);
                });
            } else {
                this.fallbackCopy(text, styleName);
            }
        }
        
        fallbackCopy(text, styleName) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand('copy');
                this.showToast(`Copied "${styleName}" to clipboard!`);
            } catch (err) {
                console.error('Fallback copy failed:', err);
                this.showToast('Copy failed. Please select and copy manually.');
            }
            
            document.body.removeChild(textarea);
        }
        
        showToast(message) {
            if (!this.toast) return;
            
            const messageEl = document.getElementById('ftgp-toast-message');
            if (messageEl) {
                messageEl.textContent = message;
            }
            
            this.toast.classList.add('ftgp-toast-show');
            
            setTimeout(() => {
                this.toast.classList.remove('ftgp-toast-show');
            }, 3000);
        }
        
        loadMore() {
            this.currentPage++;
            const text = this.input ? (this.input.value.trim() || this.defaultText) : this.defaultText;
            this.renderResults(text);
        }
        
        updateLoadMoreButton() {
            if (!this.loadMoreBtn) return;
            
            const totalRendered = Math.min((this.currentPage + 1) * this.stylesPerPage, this.filteredStyles.length);
            const hasMore = totalRendered < this.filteredStyles.length;
            
            this.loadMoreBtn.style.display = hasMore ? 'block' : 'none';
            
            if (hasMore) {
                const remaining = this.filteredStyles.length - totalRendered;
                this.loadMoreBtn.textContent = `Load More Styles (${remaining} remaining)`;
            }
        }
    }
    
})();
