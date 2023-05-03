$(function(){
    $('#project_h .project_h_list li').eq(0).addClass('on');

    $('#project_h .project_h_list li').hover(
        function(){
            $(this).addClass('on2');
        },
        function(){
            $(this).removeClass('on2');
        }
    )

    $('#project_h li').click(function(){
        var i = $(this).index()

        $('#project_h li').removeClass('on')
        $(this).addClass('on')

        move(i)
    })

    function move(n){
        var pos = (-1200) * n + 'px' 
        $('#project_b .projectbox').stop().animate({left: pos}, 500)
    }
});

// project monitor

$(document).ready(function () {
    var current = 0
    var setIntervalId;


    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 4) {
                n = 0;
            }
            move(n);
        }, 3000)

    }
    function move(n) {
        var currentEl = $('.monitor_in li').eq(current);
        var nextEl = $('.monitor_in li').eq(n);


        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });


        current = n;
    }
});