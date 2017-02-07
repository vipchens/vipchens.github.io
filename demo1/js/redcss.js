$(function () {

    //团队成员
    $(".memberBorder").find(".info").hide();
    $(".memberBorder").hover(function () {
        $(this).find(".imgX").css({
            "background-position": "45px 0"
        })
        $(this).find(".label").css({
            "top": "30px"
        })
        $(this).find(".info").show(300);
    }, function () {
        $(this).find(".imgX").css({
            "background-position": "120px 0"
        })
        $(this).find(".label").css({
            "top": "75px"
        })
        $(this).find(".info").hide(300);

    })


    //锚链接
    //  思路：
    // 1、获取导航id
    // 2、获取导航data参数的值，这个值对应块的id
    // 3、根据这个值在dom中找到他的offset（）.top
    // 4、添加滚动动画到这个值

    $("nav").find("a").click(function () {
        if ($(this).attr("data")) {
            var linkId = $(this).attr("data");
            var linkHeight = $("#" + linkId).offset().top;
            $("html,body").animate({
                "scrollTop": linkHeight
            }, 500)
        } else {
            $("html,body").animate({
                "scrollTop": 0
            }, 500)
        }
    })

})

//sly滚动条列表插件
jQuery(function ($) {
    'use strict';

    (function () {
        var $frame = $('#cycleitems');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            speed: 600,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Cycling
            cycleBy: 'items',
            cycleInterval: 800,
            pauseOnHover: 1,

            // Buttons
            prev: $wrap.find('.prev'),
            next: $wrap.find('.next')
        });

        // Pause button
        $wrap.find('.pause').on('click', function () {
            $frame.sly('pause');
        });

        // Resume button
        $wrap.find('.resume').on('click', function () {
            $frame.sly('resume');
        });

        // Toggle button
        $wrap.find('.toggle').on('click', function () {
            $frame.sly('toggle');
        });
    }());


})