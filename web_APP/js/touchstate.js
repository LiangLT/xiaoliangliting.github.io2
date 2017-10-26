$(function () {
    $('body').find('[data-class="touchstart"]').each(function (index, ele) {
        $(ele).bind('touchstart', function () {
            $(ele).addClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
        })
        $(ele).bind('touchend', function () {
            $(ele).removeClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
        })
        $(ele).bind('touchmove', function () {
            $(ele).removeClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
        })
    })


    $('body').find('div').bind('DOMNodeInserted', function (e) {
        $('body').find('[data-class="touchstart"]').each(function (index, ele) {
            $(ele).bind('touchstart', function () {
                $(ele).addClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
            })
            $(ele).bind('touchend', function () {
                $(ele).removeClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
            })
            $(ele).bind('touchmove', function () {
                $(ele).removeClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
            })
        })
    })
})




function myTouchstart() {
    $('body').find('[data-class="touchstart"]').each(function (index, ele) {
        $(ele).bind('touchstart', function () {
            $(ele).addClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
        })
        $(ele).bind('touchend', function () {
            $(ele).removeClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
        })
        $(ele).bind('touchmove', function () {
            $(ele).removeClass(($(ele).attr('class').split(/\ /g)[0]) + '_touchstart');
        })
    })
}