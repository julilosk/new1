<?php
 /*
 Template Name: Проекты федерации
 */
?>
<?php get_header();?>
<div class="submenu">
    <div class="container">
        <div class="row submenu__row ">
            <h2 class="submenu__title">Федерация</h2>           
            <div class="submenu__block">
                <!-- <?php
                    wp_nav_menu( array(
                        'theme_location' => 'Main',
                        'sub_menu' => true
                    ) );
                ?> -->
                    <ul>
                    <li>
                        <a href="<?php site_url(); ?>/federation/" class="submenu__link">
                            <div class="submenu__link_1">Общая информация</div>
                            <div class="submenu__link_2">ФШАК</div>
                        </a>
                    </li>
                    <li>
                        <a href="<?php site_url(); ?>/federation/dokuments/"
                            class="submenu__link">Документы</a>
                    </li>
                    <li><a href="<?php site_url(); ?>/federation/strukture/"
                            class="submenu__link">Структура</a>
                    </li>
                    <li><a href="<?php site_url(); ?>/federation/projects/" class="submenu__link activelink2">
                            <div class="submenu__link_1">Программы и проекты</div>
                            <div class="submenu__link_2">Проекты</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="projects-page">
            <div class="chess-tabs-vertical">
                <ul class="chess-tabs-vertical__tabs">
                    <li class="chess-tabs-vertical__tab chess-tabs-vertical__tab_active"><span>Шахматы в школе</span></li>
                    <li  class="chess-tabs-vertical__tab"><span>Шахматы в университетах</span></li>
                    <li class="chess-tabs-vertical__tab"><span>Шахматы в десткие дома</span></li>
                    <li class="chess-tabs-vertical__tab"><span>Краевой день шахмат</span></li>
                    <li class="chess-tabs-vertical__tab"><span>Программа развития</span></li>
                </ul>
                <!--Шахматы в школе -->
                <div  class="chess-tabs-vertical__content chess-tabs-vertical__content_active">
                    <h4>Шахматы в школе</h4>
                    <div class="chess-tabs chess-tabs_indent chess-tabs_wide">
                        <ul class="chess-tabs__tabs">
                            <li class="chess-tabs__tab chess-tabs__tab_active">
                                <h5>Общая&nbsp;информация</h5>
                            </li>
                            <li class="chess-tabs__tab">
                                <h5>Документы</h5>
                            </li>
                            <li class="chess-tabs__tab">
                                <h5>Участники </h5>
                            </li>
                            <li class="chess-tabs__tab">
                                <h5>Новости</h5>
                            </li>
                        </ul>
                        <!-- Общая информация -->
                        <div class="chess-tabs__content chess-tabs__content_active">
                            <?php the_field('projects-schools_inform');?>
                        </div>
                        <!-- Документы -->
                        <div class="chess-tabs__content">
                            <div class="structure__composition">
                                <?php
                                    $posts = get_posts( array(
                                        'numberposts' => -1,
                                        'docs-rubriki' => 'projects-schools-doc',
                                        'orderby' => 'date',
                                        'order' => 'ASC',
                                        'post_type' => 'docs',
                                        'suppress_filters' => true,
                                    ) );
                                    get_template_part('includes/include_doc');
                                    wp_reset_postdata();
                                ?>
                            </div>
                        </div>
                        <!-- Участники проекта -->
                        <div class="chess-tabs__content">
                            <div class="structure__composition">
                                <div class="map-box">
                                    <?php the_field('projects-schools_map');?>
                                </div>
                            </div>
                        </div>
                        <!-- Новости -->
                        <div class="chess-tabs__content">
                            <div class="row indent-bottom">
                                <?php
                                $args = array(
                                    'post_type' => 'news',
                                    // 'numberposts' => -1,
                                    'posts_per_page' => -1,
                                    'news-rubriki' => 'shahmaty-v-shkole'
                                );
                                $query = new WP_Query( $args ); ?>
                                <?php if ( $query->have_posts() ) : ?>
                                    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                                        <div class="col-md-12">
                                            <a class="projects-page__news" href="<?php
                                                the_permalink();?>">
                                                <div class="projects-page__date">
                                                    <?php the_time('d.m.Y');?>
                                                </div>
                                                <div class="">
                                                    <?php title_limit(90, '...');?>
                                                </div>
                                            </a>
                                        </div>
                                    <?php endwhile;?>
                                    <?php wp_reset_postdata(); ?>
                                <?php else : ?>
                                    <div class="col-md-12"><?php esc_html_e( 'Нет новостей.' );?></div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Шахматы в университетах  -->
                <div  class="chess-tabs-vertical__content">
                    <h4>Шахматы в университетах</h4>
                    <div class="chess-tabs chess-tabs_indent chess-tabs_wide">
                        <ul class="chess-tabs__tabs">
                            <li class="chess-tabs__tab chess-tabs__tab_active">
                                <h5>Общая информация</h5>
                            </li>
                            <li class="chess-tabs__tab">
                                <h5>Новости</h5>
                            </li>
                        </ul>
                        <!-- Общая информация -->
                        <div class="chess-tabs__content chess-tabs__content_active">
                            <?php the_field('projects-univer_inform');?>
                        </div>
                        <!-- Новости -->
                        <div class="chess-tabs__content">
                            <div class="row indent-bottom">
								<?php
									$args = array(
										'post_type' => 'news',
										'posts_per_page' => 6,
										'news-rubriki' => 'shahmaty-v-universitetah'
									);
									$query = new WP_Query( $args ); ?>
									<?php if ( $query->have_posts() ) : ?>
									    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                                            <div class="col-md-12">
                                                <a class="projects-page__news" href="<?php
                                                    the_permalink();?>">
                                                    <div class="projects-page__date">
                                                        <?php the_time('d.m.Y');?>
                                                    </div>
                                                    <div class="">
                                                        <?php title_limit(90, '...');?>
                                                    </div>
                                                </a>
                                            </div>
                                        <?php endwhile; ?>
                                        <?php wp_reset_postdata(); ?>
                                    <?php else : ?>
                                        <div class="col-md-12"><?php esc_html_e( 'Нет новостей' ); ?></div>
                                    <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Шахматы в десткие дома -->
                <div  class="chess-tabs-vertical__content">
                    <h4>Шахматы в десткие дома</h4>
                    <div class="chess-tabs chess-tabs_indent chess-tabs_wide">
                        <ul class="chess-tabs__tabs">
                            <li class="chess-tabs__tab chess-tabs__tab_active">
                                <h5>Общая информация</h5>
                            </li>
                            <li class="chess-tabs__tab">
                                <h5>Новости</h5>
                            </li>
                        </ul>
                        <!-- Общая информация -->
                        <div class="chess-tabs__content chess-tabs__content_active">
                            <?php the_field('projects-childhouse_inform');?>
                        </div>
                        <!-- Новости -->
                        <div class="chess-tabs__content">
                            <div class="row indent-bottom">
								<?php
									$args = array(
										'post_type' => 'news',
										'posts_per_page' => 6,
										'news-rubriki' => 'shahmaty-v-destkie-doma'
									);
									$query = new WP_Query( $args ); ?>
									<?php if ( $query->have_posts() ) : ?>
                                        <?php while ( $query->have_posts() ) : $query->the_post();?>
                                            <div class="col-md-12">
                                                <a class="projects-page__news" href="<?php
                                                    the_permalink();?>">
                                                    <div class="projects-page__date">
                                                        <?php the_time('d.m.Y');?>
                                                    </div>
                                                    <div class="">
                                                        <?php title_limit(90, '...');?>
                                                    </div>
                                                </a>
                                            </div>
                                        <?php endwhile; ?>
                                    <?php wp_reset_postdata();?>
                                <?php else : ?>
                                    <div class="col-md-12"><?php esc_html_e( 'Нет новостей' );?></div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Краевой день шахмат -->
                <div class="chess-tabs-vertical__content">
                    <h4> Краевой день шахмат</h4>
                    <?php the_field('projects-kraiday_inform');?>
                </div>
                <!--Программа развития -->
                <div class="chess-tabs-vertical__content">
                    <h4> Программы развития</h4>
                    <div class="structure__composition">
                        <?php
                            $posts = get_posts( array(
                                'numberposts' => -1,
                                'docs-rubriki' => 'develop-program',
                                'orderby'  => 'date',
                                'order' => 'ASC',
                                'post_type'  => 'docs',
                                'suppress_filters' => true,
                            ) );
                            get_template_part('includes/include_doc');
                            wp_reset_postdata();
                        ?>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<?php get_footer();?>