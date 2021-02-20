<?php
/*
 Template Name: Календарь
 */
?>
<?php get_header();?>
<div class="submenu">
    <div class="container">
        <div class="submenu__row row">
            <h2 class="submenu__title">Турниры</h2>
            <div class="submenu__block">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'Main',
                    'sub_menu' => true
                ));
                ?>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <!-- <p>Календарный план шахматных мероприятий федерации шахмат Алтайского края на 2020 год</p> -->
    <div class="row">
        <div class="calendar">
            <ul class="calendar__tabs">
                <li class="calendar__tab calendar__tab_active"><h5>Мужcкие</h5></li>
                <li class="calendar__tab"><h5>Женские</h5></li>
                <li class="calendar__tab"><h5>Дети</h5></li>
                <li class="calendar__tab"><h5>Студенты</h5></li>
                <li class="calendar__tab"><h5>Ветераны</h5></li>
                <li class="calendar__tab"><h5>Командные</h5></li>
                <li class="calendar__tab"><h5>Сельские</h5></li>
                <li class="calendar__tab"><h5>ОВЗ</h5></li>
            </ul>
            <!-- men -->
            <div class="calendar__content calendar__content_active">
                <?php echo do_shortcode("[table id=14 /] ");?>
            </div>
            <!-- women -->
            <div class="calendar__content">
                <?php echo do_shortcode("[table id=15 /] ");?>
            </div>
            <!-- children -->
            <div class="calendar__content">
                <?php echo do_shortcode("[table id=16 /] ");?>
            </div>
            <!-- student -->
            <div class="calendar__content">
                <?php echo do_shortcode("[table id=17 /] ");?>
            </div>
            <!-- veteran -->
            <div class="calendar__content">
                <?php echo do_shortcode("[table id=18 /] ");?>
            </div>
            <div class="calendar__content">
                <?php echo do_shortcode("[table id=22 /] ");?>
            </div>
            <!-- country -->
            <div class="calendar__content">
                <?php echo do_shortcode("[table id=19 /] ");?>
            </div>
            <!-- ovz -->
            <div class="calendar__content">
                <?php echo do_shortcode("[table id=21 /] ");?>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>