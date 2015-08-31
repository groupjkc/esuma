<!DOCTYPE HTML>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<title><?php echo $post->post_title ?></title>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Dosis:600,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-ui.js"></script>
	<?php wp_head(); ?>
</head>
<body <?php body_class('body-'.qtrans_getLanguage()); ?>>
	<div id="container">
		<div id="loading">
			<img src="<?php echo get_template_directory_uri(); ?>/images/loading.gif" width="35px" height="35px" />
		</div>
		<div id="popup-wrap"><div id="popup">
			<?php
				if(qtrans_getLanguage()=='en')
					echo do_shortcode('[contact-form-7 id="128" title="Contact form"]');
				else if(qtrans_getLanguage()=='fr')
					echo do_shortcode('[contact-form-7 id="172" title="Contact form Fr"]');
				else
					echo do_shortcode('[contact-form-7 id="202" title="Contact form Sy"]');
			?>
		</div></div>
		<div id="header">
			<div id="menu-wrap">
				<ul id="menu">
					<li id="mn-0"></li>
					<li id="mn-1"></li>
					<li id="mn-2">
						<a href="#" id="dropdown-link"></a>
					</li>
					<li id="mn-3"></li>
					<li id="mn-4">
						<a title="Esuma" href="<?php echo bloginfo('url'); ?>">
							<img alt="Esuma <?php _e('[:en]Logo[:fr]Logo[:in]Logo') ?>" src="<?php echo get_template_directory_uri(); ?>/images/logo.png" width="228px" height="132px" />
						</a>
					</li>
					<li id="mn-5"></li>
					<li id="mn-6"></li>
					<li id="mn-7"></li>
					<li id="mn-8"><div class="language-wrap"><?php dynamic_sidebar('Language Slide bar') ?></div></li>
				</ul>
			</div>
			<div id="menu-dropdown-wrap" class='visible'>
				<img id="holder-place" src="<?php echo get_template_directory_uri(); ?>/images/logo.png" />
				<ul id="menu-dropdown">
					<li id="item-left"></li>
					<li id="item-navigation">
						<?php 
							wp_nav_menu(array(
								"theme_location" => 'navigation',
								'container_id' => 'menu-navigation-wrap',
							));
						?>
					</li>
					<!-- 
					<li id="item-social" class="menu-item">
						
						<a href="javascript:;" id="facebook"></a>
						<a href="javascript:;" id="twitter"></a>
						
						<a href="<?php echo get_permalink( '242' ) ?>"><?php _e('[:en]CALL FOR PROJECTS[:fr]Appel de projets[:sy]ᐱᓇᓱᐊᕐᓗᑎᒃ ᐱᓇᓱᐊᕐᓂᒥᒃ') ?></a>
					</li>
					 -->
					<li id="item-right"></li>
				</ul>
			</div>
			<?php 
				wp_nav_menu(array(
					"theme_location" => 'float',
					'container_id' => 'menu-float-wrap',
				));
			?>
		</div><!-- #header -->
		<div id="body">