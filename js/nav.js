$(function () {
    $('#header .nav_list li').eq(0).addClass('on');
    $('#q_mn .nav li').eq(0).addClass('on2');
    
    $('#header .nav_list li').hover(
        function () {
            $('#header .nav_list li').removeClass('on');
            $(this).addClass('on');
        },
        function () {
            $(this).removeClass('on');
        }
    )

    
    const quickmenu = $('#q_mn .nav li');
    const menu = $('#header .nav_list li');
    const contents = $('#wrap > section');

    menu.click(function (e) {
        e.preventDefault();
        let i = $(this).index();
        let section = $(contents).eq(i);

        let tg = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tg });
    });

    
    $(window).scroll(function () {
        const sct = $(window).scrollTop();
        contents.each(function () {
            let tg = $(this);
            let i = tg.index();
            if (tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
                quickmenu.removeClass('on2');
                quickmenu.eq(i).addClass('on2');
            }
        })
    });

    
    $(window).scroll(function () {
        const windowTop = $(window).scrollTop() + 200;
        $('#q_mn').stop().animate({ top: windowTop + 'px' });
    });

    
    $('#q_mn .nav li').hover(
        function () {
            $('#q_mn .nav li').removeClass('on2')
            $(this).addClass('on2')
        },
        function () {
            $(this).removeClass('on2')
        }
    );

    quickmenu.click(function (e) {
        e.preventDefault();
        let i = $(this).index();
        let section = $(contents).eq(i);

        let tg = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tg });
    });
});