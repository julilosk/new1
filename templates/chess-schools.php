<?php
 /*
 Template Name: Секции и школы
 */
?>
<?php get_header();?>
<div class="submenu">
    <div class="container">
        <div class="submenu__row row">
            <h2 class="submenu__title">Клубы и школы</h2>
            <div class="submenu__block">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'Main',
                    'sub_menu' => true
                ) );
                ?>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="schools">
            <?php echo do_shortcode("[table id=13 /] ");?>
        </div>
    </div>
</div>
<?php get_footer();?>