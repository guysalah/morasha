<?php

/**
 * @package Custom Api
 * @version 1.0.0
 */
/*
Plugin Name: Custom Api
Plugin URI: http://morsha.co.il/
Description: Custom Api
Author:Active Branding
Version: 1.0.0
Author URI: http://activebranding.co.il/
*/

// Import contact form functions
require_once plugin_dir_path(__FILE__) . './validate_api_key.php';
require_once plugin_dir_path(__FILE__) . './contact-form-api.php';

// Ensure we're running in WordPress
if (!defined('ABSPATH')) {
	exit;
}

// CORS and security headers
function custom_api_headers()
{
	$allowed_origins = [
		'https://morasha.co.il',
		'http://localhost:3000',
		'http://localhost:8000'
	];

	if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
		header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
	}

	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	// Additional security headers
	header('X-Content-Type-Options: nosniff');
	header('X-Frame-Options: SAMEORIGIN');
	header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
}
add_action('init', 'custom_api_headers');

add_filter('allowed_http_origin', '__return_true');



