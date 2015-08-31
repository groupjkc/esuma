<?php

/*
 * Make menu
 */

function navigation()
{
	register_nav_menus(array(
		'navigation' => __('Navigation'),
		'float' => __('Float')
	));
}
add_action('init', 'navigation');

/*
 * Make widget
 */
function languages() {
	register_sidebar( array(
			'name' => 'Language Slide bar',
			'id' => 'home_right_1',
			'before_widget' => '',
			'after_widget' => '',
	) );
}
add_action('widgets_init', 'languages');

/* 
 * Include js file and ajax url
 */
function esuma_load_js() {
	wp_register_script( 'esuma.js', get_template_directory_uri() . '/js/esuma.js' );
	wp_enqueue_script( 'esuma.js' );
	wp_localize_script( 'esuma.js', 'url', array(
			'load_all_pages' => admin_url( 'admin-ajax.php?lang='.qtrans_getLanguage() ),
	));
}
add_action('wp_enqueue_scripts', 'esuma_load_js');

/*
 * Process ajax request
 */
function load_all_pages() {
	$pages = get_pages( array('sort_column' => 'menu_order') );
	foreach($pages as $page)
		_e($page->post_content);
	exit;
}
add_action('wp_ajax_nopriv_load_all_pages', 'load_all_pages');
add_action('wp_ajax_load_all_pages', 'load_all_pages');

/*
 * Process ajax postcard request
 * Params[]:
 * $sFirstname : sender's firstname
 * $sLastname : sender's lastname
 * $sEmail : sender's email
 * $rFirstname : reciever's firstname
 * $rLastname : reciever's lastname
 * $rEmail : reciever's email
 * $message : the message
 */
function esuma_send_words_of_encouragement ( $Params ) {
	if ( 7 != count($Params) ) { die(); }
	foreach ($Params as $key => $value) {
		if ( is_null($key) || is_null($value) )
			{ die(); }
	}
	
	$subject = "[ESUMA] - A Postcard for You!";
	$esuma_config_mail = "postcard@esuma.ca";
	$site_url = "http://esuma.mobilizeme.ca";
	$img_path = $site_url . "/wp-content/themes/esuma/images/";

	$mTo = $Params["rFirstname"] . " " . $Params["rLastname"] . "<". $Params["rEmail"] .">";
	$mFrom = $Params["sFirstname"] . " " . $Params["sLastname"] . "<" . $esuma_config_mail . ">";
	$from = $Params["sFirstname"] . " " . $Params["sLastname"] . "<". $Params["sEmail"] .">";
	$headers  = "From: " . $mFrom . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$message = '<html><head></head>
				<body bgcolor="#fff" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
					<table id="Table_01" width="900" height="701" border="0" cellpadding="0" cellspacing="0" style="background-image: url(' . $img_path . 'postcard-popup.jpg);">
						<tr>
							<td valign="top" style="" colspan="5" width="900" height="80">&nbsp;</tr>
						<tr>
							<td valign="top" style="" colspan="3" width="606" height="26"></td>
							<td valign="bottom" style="" width="235" height="26">
								<font size="4" face="Century Gothic, Avant Garde Gothic, Avant Garde, helvetica, sans-serif" color="#FFF"><b><em>' . $Params["sFirstname"] . " " . $Params["sLastname"] . '</em></b></font>
							</td>
							<td valign="top" style="" width="59" height="26"></td>
						</tr>
						<tr>
							<td valign="top" style="" colspan="5" width="900" height="20"></td>
						</tr>
						<tr>
							<td valign="top" style="" colspan="2" width="576" height="26"></td>
							<td valign="bottom" style="" colspan="2" width="265" height="26">
								<font size="4" face="Century Gothic, Avant Garde Gothic, Avant Garde, helvetica, sans-serif" color="#FFF"><b><em>' . $Params["rFirstname"] . " " . $Params["rLastname"] . '</em></b></font>
							</td>
							<td valign="top" style="" width="59" height="26"></td>
						</tr>
						<tr>
							<td valign="top" style="" colspan="5" width="900" height="29"></td>
						</tr>
						<tr>
							<td valign="top" style="" width="544" height="193"></td>
							<td valign="top" style="font-style: italic;" colspan="3" width="297" height="193">
								<font size="4" face="Century Gothic, Avant Garde Gothic, Avant Garde, helvetica, sans-serif" color="#FFF"><em>' . $Params["message"] . '</em></font>
							</td>
							<td valign="top" style="" width="59" height="193"></td>
						</tr>
						<tr>
							<td valign="top" style="" colspan="5" width="900" height="326"></td>
						</tr>
						<tr>
							<td valign="top" style="" width="544" height="1">
								<img src="' . $img_path . 'postcard/spacer.gif" width="544" height="1" alt=""></td>
							<td valign="top" style="" width="32" height="1">
								<img src="' . $img_path . 'postcard/spacer.gif" width="32" height="1" alt=""></td>
							<td valign="top" style="" width="30" height="1">
								<img src="' . $img_path . 'postcard/spacer.gif" width="30" height="1" alt=""></td>
							<td valign="top" style="" width="235" height="1">
								<img src="' . $img_path . 'spacer.gif" width="235" height="1" alt=""></td>
							<td valign="top" style="" width="59" height="1">
								<img src="' . $img_path . 'postcard/spacer.gif" width="59" height="1" alt=""></td>
						</tr>
					</table>
				</body></html>';

	// if ( mail( $mTo, $subject, $message, $headers ) ) //&& wp_mail( $mTo, $subject, $message, $headers ) )
	if ( wp_mail( $mTo, $subject, $message, $headers ) )
	{
		echo '1'; die();
	}
	else
	{
		echo '0'; die();
	}
}
add_action('wp_ajax_nopriv_esuma_send_postcard', 'esuma_send_words_of_encouragement', 10, 1);
add_action('wp_ajax_esuma_send_postcard', 'esuma_send_words_of_encouragement', 10, 1);