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