<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}
function validate_api_key($request)
{
	$ApiKey = "18380070-4612-425d-a34a-31153b039d1d";
	$api_key = $request->get_header('x-api-key');
	if ($api_key !== $ApiKey) {
		return new WP_REST_Response([
			'success' => false,
			'message' => 'Invalid API Key'
		], 200);
	}
	return true;
}