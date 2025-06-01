$(document).ready(() => {
    let isShowGoTop = false;
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

    $('.cont_01 .cbox .cbox_btn.left').on('mouseenter', () => {
        $('.cont.cont_01 .intro .left').addClass('on');
    });

    $('.cont_01 .cbox .cbox_btn.left ').on('mouseleave', () => {
        $('.cont.cont_01 .intro .left').removeClass('on');
    });

    $('.cont_01 .cbox .cbox_btn.left').on('click', () => {
        isShowGoTop = true;
        $('.cont.cont_01').addClass('back');
        $('.tab.tab1').css('display', 'block');
        $('.nav').css('display', 'block');
        // $('.nav ul li').addClass('on');
        $('.wrap').css('height', '10465px');
        window.scrollTo({
            top: 0,
        });
    });

    $('.cont_02 .yt_vid .click').on('click', (event) => {
        const target = $(event.currentTarget);
        target.addClass('hidden');
        const ytUrl = "https://www.youtube.com/embed/pErOoRqwrrU?si=2OyFeruWabW1jgI1";
        target.prev().attr("src", ytUrl + "&autoplay=1")
    });

    $('.btn_go_main').on('click', () => {
        isShowGoTop = false;
        $('.cont.cont_01').removeClass('back');
        $('.tab.tab1').css('display', 'none');
        $('.nav').css('display', 'none');
        // $('.nav ul li').removeClass('on');
        $('.wrap').css('height', 'unset');
    });

    $('.cont.cont_03 .btn_char .char').on('click', (e) => {
        const target = $(e.currentTarget).closest(".btn_char");
        target.addClass('animate');
        target.addClass('on');
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
        });
    });

    $('.cont.cont_03 .btn_char .bg .btn_close').on('click', (e) => {
        const t = $(e.currentTarget).closest(".btn_char");
        t.removeClass('animate').removeClass('on');
        t.find(".bgm_info").removeClass("on");
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
        });
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

    if ($(window).width() > 768) {
    } else {

    }
});

const openVideo = (video) => {
    $('.plate_modal').toggleClass('-active');
    $('.modal').css('opacity', '1').css('visibility', 'inherit');
    $('.modal.type--youtube').toggleClass('hide');
    $('.modal_box_veil').toggleClass('-hide');
    $('.modal_source').append(
        `<iframe width="auto" height="auto" class="modal_youtube youtube--2"
        src="https://www.youtube.com/embed/${video}?si=1_stAmmA1RL7LFrt"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>`);
};
