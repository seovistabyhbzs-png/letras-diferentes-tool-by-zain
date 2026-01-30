<?php
/**
 * Template for Fancy Text Generator
 */
if (!defined('ABSPATH')) {
    exit;
}
?>

<div id="ftgp-container" class="ftgp-container">
    <div class="ftgp-input-wrapper">
        <input 
            type="text" 
            id="ftgp-input" 
            class="ftgp-input" 
            placeholder="Escribe Tu Texto Aquí :)"
            value="Welcome"
        />
        <div class="ftgp-input-icon">✏️</div>
    </div>
    
    <div id="ftgp-results" class="ftgp-results" role="region" aria-label="Fancy text results">
        <!-- Results will be inserted here -->
    </div>
    
    <div id="ftgp-load-more-wrapper" class="ftgp-load-more-wrapper" style="display: none;">
        <button id="ftgp-load-more" class="ftgp-btn ftgp-btn-primary ftgp-load-more-btn">
            Load More Styles
        </button>
    </div>
    
    <div id="ftgp-toast" class="ftgp-toast" role="alert" aria-live="polite">
        <span id="ftgp-toast-message"></span>
    </div>
</div>
