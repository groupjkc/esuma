<?php
$post = get_post();
get_header();
_e($post->post_content);
get_footer();
?>