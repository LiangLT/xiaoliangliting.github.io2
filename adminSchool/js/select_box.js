/**
 * Created by Administrator on 2017/6/16 0016.
 */
//方法
function shouTxt(){
    showMd();
    $("#divModal").show();
    $(".p_con").html("请您先选择！");
    $("#true_del").hide();
}

//关闭
$(document).on("click",".closeClick",function(){
    $("#divModal").hide();
    $("#divModal>div").remove();
});

function showMd(){
    var divModal='<div class="modal_bg">' +
        '<div class="modal_con">' +
        '<div class="modal_top clearfix">' +
        '<h3>温馨提示</h3><i class="close closeClick">X</i>' +
        '</div>' +
        '<div class="modal_body">' +
        '<p class="p_con"></p>' +
        '</div>' +
        '<div class="modal_footer">' +
        ' <a id="true_del" href="javascript:;">确认</a><a class="closeClick" href="javascript:;">取消</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("#divModal").append(divModal);
}

//新增用户
$(function(){
    $("#add_user").click(function(){
        $(".user_modal").show();
    });

    $(".close_btn").click(function(){
        $(".user_modal").hide();
    });
});