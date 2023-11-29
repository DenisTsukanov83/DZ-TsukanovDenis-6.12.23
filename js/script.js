
$(document).ready(function () {

    //Переключение меню
    function changeBg(el, color) {
        if (color == 'white') {
            el.css('background-image', el.css('background-image').replace(/black/gi, 'white'));
        }
        if (color == 'black') {
            el.css('background-image', el.css('background-image').replace(/white/gi, 'black'));
        }
    }
    function showContents(e) {
        if ($(e.target).text() != 'Home' && !$(e.target).hasClass('aside-menu-item-0') && !$(e.target).hasClass('aside-menu-item-1')) {
            $('.about .contents').hide();
            $('.aside-menu-item').removeClass('active');
            $('.about .about-menu ul li a').removeClass('active');

            $(e.target).addClass('active');
            $.each($('.aside-menu-item').not('.aside-menu-item-0'), (i, el) => {
                $(el).css({
                    'background-image': `${$(el).css('background-image').replace(/white/gi, 'black')}`
                });
            });

            switch (true) {
                case $(e.target).text() == 'About me' || $(e.target).hasClass('aside-menu-item-2'):
                    changeBg($('.aside-menu-item-2'), 'white'),
                        $('.aside-menu-item-2').addClass('active'),
                        $('.about-content').show(),
                        $('.li-2').addClass('active');
                    break;
                case $(e.target).text() == 'Resume' || $(e.target).hasClass('aside-menu-item-3'):
                    changeBg($('.aside-menu-item-3'), 'white'),
                        $('.aside-menu-item-3').addClass('active'),
                        $('.resume-content').show(),
                        $('.li-3').addClass('active');
                    break;
                case $(e.target).text() == 'Portfolio' || $(e.target).hasClass('aside-menu-item-4'):
                    changeBg($('.aside-menu-item-4'), 'white'),
                        $('.aside-menu-item-4').addClass('active'),
                        $('.portfolio-content').show(),
                        $('.li-4').addClass('active');
                    break;
                case $(e.target).text() == 'Testimonials' || $(e.target).hasClass('aside-menu-item-5'):
                    changeBg($('.aside-menu-item-5'), 'white'),
                        $('.aside-menu-item-5').addClass('active'),
                        $('.testimon-content').show(),
                        $('.li-5').addClass('active');
                    break;
                case $(e.target).text() == 'Contact' || $(e.target).hasClass('aside-menu-item-6'):
                    changeBg($('.aside-menu-item-6'), 'white'),
                        $('.aside-menu-item-6').addClass('active'),
                        $('.contact-content').show(),
                        $('.li-6').addClass('active');
                    break;
            }

            if (window.innerWidth < 601) {
                showMenu();
            }
        }
    }

    $('.about .about-nav ul li a').click((e) => {
        showContents(e);
    });

    $('.aside-menu-item').click((e) => {
        showContents(e);
    });

    // Hover
    $('.aside-menu-item').mouseover((e) => {
        if (!$(e.target).hasClass('active') && !$(e.target).hasClass('aside-menu-item-0')) {
            changeBg($(e.target), 'white');
        } else {
            if ($(e.target).hasClass('theme-moon-black')) {
                addRemoveClass($(e.target), 'theme-moon-black', 'theme-moon-white');
            } else if ($(e.target).hasClass('theme-sun-black')) {
                addRemoveClass($(e.target), 'theme-sun-black', 'theme-sun-white');
            }
            $('.aside-menu-item-0').off('click');
            $('.aside-menu-item-0').click((e) => {
                e.preventDefault();
                if ($(e.target).hasClass('theme-moon-white')) {
                    addRemoveClass($(e.target), 'theme-moon-white', 'theme-sun-white');
                } else if ($(e.target).hasClass('theme-sun-white')) {
                    addRemoveClass($(e.target), 'theme-sun-white', 'theme-moon-white');
                }
                applyTheme($('.aside-menu-item-0').data('theme'));

            });
        }
    });
    $('.aside-menu-item').mouseleave((e) => {
        if (!$(e.target).hasClass('active') && !$(e.target).hasClass('aside-menu-item-0')) {
            changeBg($(e.target), 'black');
        } else {
            if ($(e.target).hasClass('theme-moon-white')) {
                addRemoveClass($(e.target), 'theme-moon-white', 'theme-moon-black');
            } else if ($(e.target).hasClass('theme-sun-white')) {
                addRemoveClass($(e.target), 'theme-sun-white', 'theme-sun-black');
            }

        }
    });

    // Переключение темы 
    function changeIcons(elem, color) {
        if (color == 'white') {
            $.each(elem, (i, el) => {
                $(el).attr('src', $(el).attr('src').replace(/black/gi, 'white'));
            });
        }
        if (color == 'black') {
            $.each(elem, (i, el) => {
                $(el).attr('src', $(el).attr('src').replace(/white/gi, 'black'));
            });
        }
    }

    function addRemoveClass(el, remove, add) {
        el.removeClass(remove).addClass(add);
    }

    function applyTheme(theme) {
        if (theme == 'dark') {
            changeIcons($('.about-do-img img'), 'white');
            changeIcons($('.contact-item-img img'), 'white');
            addRemoveClass($('.theme-background-header-light'), 'theme-background-header-light', 'theme-background-header-dark');
            addRemoveClass($('.theme-background-main-light'), 'theme-background-main-light', 'theme-background-main-dark');
            addRemoveClass($('.theme-color-light'), 'theme-color-light', 'theme-color-dark');
            addRemoveClass($('.theme-color-yell-light'), 'theme-color-yell-light', 'theme-color-yell-dark');
            addRemoveClass($('.theme-moon-black'), 'theme-moon-black', 'theme-sun-black');
            addRemoveClass($('.theme-border-light'), 'theme-border-light', 'theme-border-dark');
            $('.aside-menu-item-0').data('theme', 'light');

        }
        if (theme == 'light') {
            changeIcons($('.about-do-img img'), 'black');
            changeIcons($('.contact-item-img img'), 'black');
            addRemoveClass($('.theme-background-header-dark'), 'theme-background-header-dark', 'theme-background-header-light');
            addRemoveClass($('.theme-background-main-dark'), 'theme-background-main-dark', 'theme-background-main-light');
            addRemoveClass($('.theme-color-dark'), 'theme-color-dark', 'theme-color-light');
            addRemoveClass($('.theme-color-yell-dark'), 'theme-color-yell-dark', 'theme-color-yell-light');
            addRemoveClass($('.theme-sun-black'), 'theme-sun-black', 'theme-moon-black');
            addRemoveClass($('.theme-border-dark'), 'theme-border-dark', 'theme-border-light');
            $('.aside-menu-item-0').data('theme', 'dark');
        }

        localStorage.setItem('theme', theme);
    }

    if (localStorage.getItem('theme') != null) {
        applyTheme(localStorage.getItem('theme'));
    }

    // Переключение Portfolio
    $('.portfolio-nav ul li a').click((e) => {
        e.preventDefault();
        $('.portfolio-nav ul li a').removeClass('active').addClass('not-active');
        $(e.target).removeClass('not-active');
        $(e.target).addClass('active');
        $('.portfolio-grid').hide();
        $('.portfolio-grid').removeClass('grid');

        switch (true) {
            case $(e.target).text() == 'All': $('.portfolio-grid-all').addClass('grid');
                break;
            case $(e.target).text() == 'Graphic design': $('.portfolio-grid-graphic').addClass('grid');
                break;
            case $(e.target).text() == 'Web design': $('.portfolio-grid-web').addClass('grid');
                break;
            case $(e.target).text() == 'Photography': $('.portfolio-grid-photography').addClass('grid');
                break;
            case $(e.target).text() == 'Modals': $('.portfolio-grid-modals').addClass('grid');
                break;
        }
    });

    // Открытие меню
    let isActiveMenu = false;

    function showMenu() {
        if (isActiveMenu) {
            $('.about-nav').animate({
                'left': '-55rem'
            }, 500);

            $('.hamburger div:nth-child(1)').css({
                'transform': 'rotate(0deg) translateY(0rem)'
            });
            $('.hamburger div:nth-child(2)').css({
                'display': 'block'
            });
            $('.hamburger div:nth-child(3)').css({
                'transform': 'rotate(0deg) translateY(0rem)'
            });
        } else {
            $('.about-nav').animate({
                'left': '0'
            }, 500);

            $('.hamburger div:nth-child(1)').css({
                'transform': 'rotate(45deg) translateY(0.98rem)'
            });
            $('.hamburger div:nth-child(2)').css({
                'display': 'none'
            });
            $('.hamburger div:nth-child(3)').css({
                'transform': 'rotate(-45deg) translateY(-0.98rem)'
            });
        }

        isActiveMenu = !isActiveMenu;
    }

    $('.hamburger').click(() => {
        showMenu();
    });

    // Открытие модальных окон

    $('.portfolio-grid-modals .portfolio-item-4').click((e) => {
        switch (true) {
            case $(e.target).parent().hasClass('flower'): $('.modal-1').fadeIn();
                break;
            case $(e.target).parent().hasClass('cream'): $('.modal-2').fadeIn();
                break;
            case $(e.target).parent().hasClass('gif'): $('.modal-3').fadeIn();
                break;
            case $(e.target).parent().hasClass('gif-2'): $('.modal-4').fadeIn();
                break;
        }
    });

    $('.modal-1-header .close').click(() => {
        $('.modal-1').fadeOut();
    });

    $('.modal-2-close').click(() => {
        $('.modal-2').fadeOut();
    });

    $('.modal-3-close').click(() => {
        $('.modal-3').fadeOut();
    });

    $('.modal-4-close').click(() => {
        $('.modal-4').fadeOut();
    });


    //Hover modal-1
    $('.modal-1-item').mouseover((e) => {
        $(e.target).parents('.modal-1-item').children('.modal-1-item-hover').fadeIn();
    });

    $('.modal-1-item').mouseleave((e) => {
        $(e.target).parents('.modal-1-item').children('.modal-1-item-hover').fadeOut();
    });


    // Карта 
    function createMap() {
        let map = document.getElementById('map');

        map.style.width = '100%';
        map.style.height = '100%';

        DG.then(function () {
            map = DG.map('map', {
                center: [51.493775, 46.109466],
                zoom: 20
            });

            DG.marker([51.493775, 46.109466]).addTo(map).bindPopup('Вход со двора, 6 подъезд')
        });
    }
    let btnMap = document.querySelector('.li-6');
    btnMap.onclick = createMap;
    let btnAsideMap = document.querySelector('.aside-menu-item-6');
    btnAsideMap.onclick = createMap;
});