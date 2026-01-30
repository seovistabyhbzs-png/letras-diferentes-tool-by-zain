<?php
/**
 * Plugin Name: Fancy Text Generator Pro
 * Plugin URI: https://yourwebsite.com/fancy-text-generator-pro
 * Description: A powerful Unicode text transformation tool that generates 1000+ fancy text styles instantly. Convert your text into decorative Unicode fonts with one click.
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://yourwebsite.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: fancy-text-generator-pro
 * Domain Path: /languages
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('FTGP_VERSION', '1.0.0');
define('FTGP_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('FTGP_PLUGIN_URL', plugin_dir_url(__FILE__));
define('FTGP_PLUGIN_BASENAME', plugin_basename(__FILE__));

/**
 * Main Plugin Class
 */
class Fancy_Text_Generator_Pro {
    
    /**
     * Instance
     */
    private static $instance = null;
    
    /**
     * Get instance
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Constructor
     */
    private function __construct() {
        $this->init_hooks();
    }
    
    /**
     * Initialize hooks
     */
    private function init_hooks() {
        add_action('init', array($this, 'load_textdomain'));
        add_shortcode('fancy_text_generator', array($this, 'render_shortcode'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_action('wp_footer', array($this, 'add_inline_scripts'));
    }
    
    /**
     * Load plugin textdomain
     */
    public function load_textdomain() {
        load_plugin_textdomain('fancy-text-generator-pro', false, dirname(FTGP_PLUGIN_BASENAME) . '/languages');
    }
    
    /**
     * Enqueue assets
     */
    public function enqueue_assets() {
        // Load on all front-end pages (assets are small)
        if (!is_admin()) {
            wp_enqueue_style(
                'fancy-text-generator-pro',
                FTGP_PLUGIN_URL . 'assets/css/style.css',
                array(),
                FTGP_VERSION
            );
            
            wp_enqueue_script(
                'fancy-text-generator-pro-unicode',
                FTGP_PLUGIN_URL . 'assets/js/unicode-mappings.js',
                array(),
                FTGP_VERSION,
                true
            );
            
            wp_enqueue_script(
                'fancy-text-generator-pro',
                FTGP_PLUGIN_URL . 'assets/js/main.js',
                array('fancy-text-generator-pro-unicode'),
                FTGP_VERSION,
                true
            );
        }
    }
    
    /**
     * Render shortcode
     */
    public function render_shortcode($atts) {
        $atts = shortcode_atts(array(
            'title' => 'Fancy Text Generator Pro',
            'placeholder' => 'Enter your text here...'
        ), $atts);
        
        ob_start();
        include FTGP_PLUGIN_DIR . 'includes/template.php';
        return ob_get_clean();
    }
    
    /**
     * Add inline scripts for configuration
     */
    public function add_inline_scripts() {
        ?>
        <script>
            window.FTGPConfig = {
                stylesPerPage: 50,
                totalStyles: 0
            };
        </script>
        <?php
    }
}

/**
 * Initialize plugin
 */
function fancy_text_generator_pro_init() {
    return Fancy_Text_Generator_Pro::get_instance();
}

// Start the plugin
fancy_text_generator_pro_init();
