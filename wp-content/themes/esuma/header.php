<!DOCTYPE HTML>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<title><?php echo $post->post_title ?></title>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Dosis:600,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-ui.js"></script>
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
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
		<div id="popup-wrap-postcard">
			<div id="popup-postcard">
				<div class="popup-postcard-close"></div>
				<div class="popup-postcard-edit">
			<?php
				if(qtrans_getLanguage()=='en')
					echo do_shortcode('Edit');
				else if(qtrans_getLanguage()=='fr')
					echo do_shortcode('Modifier');
				else
					echo do_shortcode('ᐊᕐᖀᒋᐊᕐᓂᖅ');
			?>
					</div>
				<div class="popup-postcard-send">
			<?php
				if(qtrans_getLanguage()=='en')
					echo do_shortcode('Send');
				else if(qtrans_getLanguage()=='fr')
					echo do_shortcode('Envoyer');
				else
					echo do_shortcode('ᐊᐅᓪᓚᑎᒃ');
			?></div>
				<div id="postcard-preview-content">
					<div class="postcard-from">Parent</div>
					<div class="postcard-to">Student</div>
					<div class="postcard-message">My hopes & dreams will travel with you~</div>
				</div>
			</div>
		</div>
		<div id="popup-wrap-message">
			<div id="popup-message">
				<div class="popup-message-close"></div>
				<div id="popup-message-content"></div>
			</div>
		</div>
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
					<li id="mn-6"><span>
			<?php
				if(qtrans_getLanguage()=='en')
					echo do_shortcode('Contact');
				else if(qtrans_getLanguage()=='fr')
					echo do_shortcode('Contacts');
				else
					echo do_shortcode('ᐅᕙᑦᑎᓐᓅᖓᔪᑦ');
			?>
</span></li>
					<li id="mn-7"><a href="https://facebook.com" id="facebook"></a></li>
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
