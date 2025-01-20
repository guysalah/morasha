<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

function send_contact_form(WP_REST_Request $request)
{
	// Validate API key
	$validation_result = validate_api_key($request);
	if ($validation_result !== true) {
		return new WP_REST_Response(['message' => 'Forbidden: Invalid API Key'], 200);
	}

	// Get form data
	$name = $request->get_param('name');
	$phone = $request->get_param('phone');
	$mail = $request->get_param('mail');
	$message = $request->get_param('message');

	// Email settings
	$to = 'guysalah@gmail.com';
	$subject = mb_encode_mimeheader("מורשה - הודעה חדשה מטופס יצירת קשר", "UTF-8");
	$headers = "From: noreply@morasha.co.il \r\n";
	$headers .= "Reply-To: $mail\r\n";
	$headers .= "Bcc: render5974@gmail.com\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	// Build email body
	$message_body = '<div style="margin:auto;padding:10px;background:#efefef;">
        <div style="text-align:center;background:white;width:450px;margin:auto;padding:40px 20px;">
            <p style="color:#464646;font-size:22px;margin-bottom:10px;">הודעה חדשה מטופס יצירת קשר באתר מורשה</p>
            <p style="color:#464646;font-size:16px;margin-bottom:20px;"><a href="https://morasha.co.il/">https://morasha.co.il/</a></p>
            <p style="color:#464646;font-size:16px;margin-bottom:0;">:שם</p>
            <p style="color:#464646;font-size:16px;font-weight:bold;margin-bottom:10px;">' . $name . '</p>
            <p style="color:#464646;font-size:16px;margin-bottom:0;">:טלפון</p>
            <p style="color:#464646;font-size:16px;font-weight:bold;margin-bottom:10px;">' . $phone . '</p>
            <p style="color:#464646;font-size:16px;margin-bottom:0;">:דוא"ל</p>
            <p style="color:#464646;font-size:16px;font-weight:bold;margin-bottom:10px;">' . $mail . '</p>
            <p style="color:#464646;font-size:16px;margin-bottom:0;">:הודעה</p>
            <p style="color:#464646;font-size:16px;font-weight:bold;margin-bottom:10px;">' . $message . '</p>
        </div>
    </div>';

	// Send email
	$sent = mail($to, $subject, $message_body, $headers);

	return new WP_REST_Response(['success' => $sent], $sent ? 200 : 500);
}

// Add route registration
add_action('rest_api_init', function () {
	register_rest_route('wl/v1', 'send_contact_form', [
		'methods' => 'POST',
		'callback' => 'send_contact_form',
		'permission_callback' => '__return_true'
	]);
});