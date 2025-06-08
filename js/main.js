$(document).ready(() => {
    window.addEventListener('resize', updateMaxVH);
    let isShowGoTop = false;
    let windowWidth = $(window).width();
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 100 && isShowGoTop) {
            $('.btn_go_top').fadeIn();
        } else {
            $('.btn_go_top').fadeOut();
        }
    });

    $('.btn_go_top').on('click', (event) => {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });


    $('.btn_toggle').on('click', (event) => {
        event.preventDefault();
        $('.side_nav').toggleClass('hide');
    });

    $('.cont_01 .cbox .cbox_btn.left').on('click', () => {
        isShowGoTop = true;
        $('.cont.cont_01').addClass('back');
        $('.tab.tab1').css('display', 'block');
        $('.nav').css('display', 'flex');
        $('.nav .tab1_btn').addClass('on');
        $('.wrap').css('height', '5755px');
        window.scrollTo({
            top: 0,
        });

        if (windowWidth <= 1280) {
            let height = $('.cont_04 .level_block .level_title').height() + $('.level_desc').height() + 30 + $('.cont_04 .level_block .level_table').height();
            $('.cont_04 .level_block').css('height', `${height}px`);
            const levelBlockTop = windowWidth <= 768 ? 514 : 
            618;
            height = levelBlockTop + height;
            $('.wrap .cont.cont_04').css('height', `${height}px`);

            height = $('.cont_05>.textBox').height() + $('.cont_05 .content').height() + $('.cont_05 .btn_go').height() + 30;
            if (windowWidth > 768) {
                height += 48;
            }
            $('.wrap .cont.cont_05').css('height', `${height}px`);

            height = $('.wrap .cont.cont_05')[0].offsetTop + $('.wrap .cont.cont_05').height();
            $('.wrap').css('height', `${height}px`);
        }
    });

    $('.btn_go_main').on('click', () => {
        isShowGoTop = false;
        $('.cont.cont_01').removeClass('back');
        $('.tab.tab1').css('display', 'none');
        $('.nav').css('display', 'none');
        $('.nav .tab2_btn').removeClass('on');
        $('.wrap').css('height', 'unset');
        $('.cont.cont_03 .btn_char .bg .btn_close').trigger('click');
    });

    $('.cont.cont_03 .btn_char .char').on('click', (e) => {
        const target = $(e.currentTarget).closest(".btn_char");
        target.addClass('animate');
        target.addClass('on');
        if (windowWidth > 1280) {
            target.animate({
                top: 346,
                marginLeft: -160
            }, 500, "easeInOutCubic", () => {
                const e = target.find(".vbox .bgm")[0];
                e.volume = .6;
                e.play();
                target.find(".bgm_info").addClass("on");
                target.animate({
                    marginLeft: -592
                }, 800, "easeInOutCubic");
                target.find(".bg").animate({
                    width: 1079
                }, 800, "easeInOutCubic");
                $('.char_txt').css('z-index', 0);
            });
        } else if (windowWidth <= 1280 && windowWidth > 768) {
            target.animate({
                top: 180,
                marginLeft: (windowWidth - 769) / 2 + 26
            }, 500, "easeInOutCubic", () => {
                const e = target.find(".vbox .bgm")[0];
                e.volume = .6;
                e.play();
                target.find(".bgm_info").addClass("on");
                target.animate({
                    marginLeft: (windowWidth - 769) / 2 + 26
                }, 800, "easeInOutCubic");
                target.find(".bg").animate({
                    width: 769
                }, 800, "easeInOutCubic");
                $('.char_txt').css('z-index', 0);
            });
        } else {
            target.animate({
                top: 180,
                marginLeft: windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0
            }, 500, "easeInOutCubic", () => {
                const e = target.find(".vbox .bgm")[0];
                e.volume = .6;
                e.play();
                target.find(".bgm_info").addClass("on");
                target.animate({
                    marginLeft: windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0
                }, 800, "easeInOutCubic");
                target.find(".bg").animate({
                    width: 375
                }, 800, "easeInOutCubic");
                $('.char_txt').css('z-index', 0);
            });
        }
    });

    $('.cont.cont_03 .btn_char .bg .btn_close, .cont.cont_03 .btn_char .bg .m_btn_close').on('click', (e) => {
        const t = $(e.currentTarget).closest(".btn_char");
        t.removeClass('animate').removeClass('on');
        t.find(".bgm_info").removeClass("on");
        if (windowWidth > 1280) {
            t.find(".bg").animate({
                width: 0
            }, 700, "easeInOutCubic");
            t.animate({
                marginLeft: -160
            }, 700, "easeInOutCubic", () => {
                const e = t.find(".vbox .bgm")[0];
                e.pause();
                e.currentTime = 0;
                t.animate({
                    marginLeft: -431
                }, 500, "easeInOutCubic");
                setTimeout(() => {
                    t.removeClass("on").attr("style", "");
                    t.removeClass("animate");
                }, 500);
                $('.char_txt').css('z-index', 2);
            });
        } else if (windowWidth <= 1280 && windowWidth > 768) {
            t.find(".bg").animate({
                width: 0
            }, 700, "easeInOutCubic");
            t.animate({
                marginLeft: windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0
            }, 700, "easeInOutCubic", () => {
                const e = t.find(".vbox .bgm")[0];
                e.pause();
                e.currentTime = 0;
                t.animate({
                    marginLeft: windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0
                }, 500, "easeInOutCubic");
                setTimeout(() => {
                    t.removeClass("on").attr("style", "");
                    t.removeClass("animate");
                    $('.cont_03 .btn_char1').css('margin-left', `${windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0}px`);
                }, 500);
                $('.char_txt').css('z-index', 2);
            });
        } else {
            t.find(".bg").animate({
                width: 0
            }, 700, "easeInOutCubic");
            t.animate({
                marginLeft: windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0
            }, 700, "easeInOutCubic", () => {
                const e = t.find(".vbox .bgm")[0];
                e.pause();
                e.currentTime = 0;
                t.animate({
                    marginLeft: windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0
                }, 500, "easeInOutCubic");
                setTimeout(() => {
                    t.removeClass("on").attr("style", "");
                    t.removeClass("animate");
                    $('.cont_03 .btn_char1').css('margin-left', `${windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0}px`);
                }, 500);
                $('.char_txt').css('z-index', 2);
            });
        }
    });

    $('.btn_go_pop').on('click', function (event) {
        event.preventDefault();
        $('.pop_wrap').css('display', 'block');
        $('.pop').css('display', 'none');
        const index = $(this).index('.btn_go_pop');
        $('.pop').eq(index).css('display', 'block');
    });

    $('.pop .pop_close').on('click', () => {
        $('.pop_wrap').css('display', 'none');
        $('.pop').css('display', 'none');
    });

    if (windowWidth <= 1280) {
        $('.m_btn_close').css('display', 'block');
        $('.btn_close').css('display', 'none');
        $('.cont_03 .btn_char1').css('margin-left', `${windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0}px`);
    } else {
        $('.m_btn_close').css('display', 'none');
        $('.btn_close').css('display', 'block');
    }

    function updateMaxVH() {
        windowWidth = $(window).width();
        if ($('.tab1').css('display') === 'block') {
            if (windowWidth <= 1280) {
                $('.m_btn_close').css('display', 'block');
                $('.btn_close').css('display', 'none');
                let height = $('.cont_04 .level_block .level_title').height() + $('.level_desc').height() + 30 + $('.cont_04 .level_block .level_table').height();
                $('.cont_04 .level_block').css('height', `${height}px`);
                const levelBlockTop = windowWidth <= 768 ? 514 : 618;
                height = levelBlockTop + height;
                $('.wrap .cont.cont_04').css('height', `${height}px`);

                height = $('.cont_05>.textBox').height() + $('.cont_05 .content').height() + $('.cont_05 .btn_go').height() + 30;
                if (windowWidth > 768) {
                    height += 48;
                }
                $('.wrap .cont.cont_05').css('height', `${height}px`);

                height = $('.wrap .cont.cont_05')[0].offsetTop + $('.wrap .cont.cont_05').height();
                $('.wrap').css('height', `${height}px`);
                $('.cont_03 .btn_char1').css('margin-left', `${windowWidth / 2 - 172 > 0 ? windowWidth / 2 - 172 : 0}px`);
            } else {
                $('.m_btn_close').css('display', 'none');
                $('.btn_close').css('display', 'block');
                $('.wrap').css('height', '5755px');
                $('.wrap .cont.cont_04').css('height', '2600px');
                $('.cont_04 .level_block').css('height', 'unset');
                $('.wrap .cont.cont_05').css('height', '1043px');
            }
        }
    }
});
