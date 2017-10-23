/**
 * Created by Administrator on 2017/7/19 0019.
 */
    //左边菜单

$(function(){
    $(".page_nav").each(function(){
        $(this).find("ul li").click(function(){
            $(this).parents(".menu_page").find(".page_nav_active").removeClass("page_nav_active");
            $(".page_nav_active").removeClass();
            $(this).parents(".page_nav").addClass("page_nav_active");
        });

    });
    //nav
    $(".nav").each(function(){
        $(this).find("a").click(function(){
            $(this).removeClass("hoverBg");
            $(".hoverBg").removeClass();
            $(this).addClass("hoverBg");
        });
    });
});
