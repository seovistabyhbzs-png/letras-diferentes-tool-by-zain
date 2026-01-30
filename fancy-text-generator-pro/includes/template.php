<?php
/**
 * Template for Fancy Text Generator - Conversor de Letras (como conversorsdeletras.com)
 */
if (!defined('ABSPATH')) {
    exit;
}
?>

<div id="ftgp-container" class="ftgp-conversor">
    <header class="ftgp-header">
        <h1 class="ftgp-titulo">Conversor de Letras Bonitas Para Copiar y Pegar</h1>
        <p class="ftgp-descripcion">
            Un conversor de letras es una herramienta en línea que permite transformar texto normal en diferentes estilos y formatos de escritura. Escribe o pega tu texto abajo y al instante verás una lista de estilos de letras disponibles. <strong>Haz clic en el estilo que más te guste y se copiará automáticamente</strong> para pegarlo en Instagram, Facebook, Twitter o donde quieras.
        </p>
    </header>

    <section class="ftgp-instructions">
        <h2 class="ftgp-subtitulo">Cómo utilizar este conversor de letras</h2>
        <ol class="ftgp-pasos">
            <li><strong>Escribe o pega tu texto</strong> en el área de abajo.</li>
            <li>Verás al instante una lista de estilos de letras y símbolos disponibles.</li>
            <li><strong>Haz clic en el estilo que te guste</strong> y se copiará automáticamente.</li>
            <li>Pégalo en tus redes sociales o donde quieras estilizar tu mensaje.</li>
        </ol>
    </section>

    <div class="ftgp-tool">
        <div class="ftgp-input-wrapper">
            <textarea 
                id="ftgp-input" 
                class="ftgp-input" 
                placeholder="Escribe o pega tu texto aquí..."
                rows="3"
            >Bienvenido</textarea>
        </div>

        <p class="ftgp-hint">Al instante verás los estilos debajo. Haz clic en cualquiera para copiarlo.</p>

        <div id="ftgp-results" class="ftgp-results" role="region" aria-label="Estilos de letras generados">
            <!-- Results inserted by JS -->
        </div>

        <div id="ftgp-load-more-wrapper" class="ftgp-load-more-wrapper">
            <button type="button" id="ftgp-load-more" class="ftgp-btn-cargar">
                Cargar Más
            </button>
        </div>
    </div>

    <div id="ftgp-toast" class="ftgp-toast" role="alert" aria-live="polite">
        <span id="ftgp-toast-message">¡Copiado! Ya puedes pegarlo donde quieras.</span>
    </div>
</div>
