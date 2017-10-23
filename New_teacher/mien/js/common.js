/**
 * Created by Administrator on 2017/9/1 0001.
 */
//关闭modal
function classModal(){
    $(".class_modal").remove();
    $(".modalPreview").remove();

}
//判断是否为空方法
function isBlank(_value){
    if(_value==null || _value=="" || _value==undefined){
        return true;
    }
    return false;
}


//modal
var modalDiv=
    '<div class="class_modal">' +
    '<div class="class_modal_container">' +
    '<div class="class_modal_top clearfix">' +
    '<h3></h3><i onclick="classModal()">X</i>' +
    '</div>' +
    '<div class="class_modal_con"></div>' +
    '<div class="class_modal_footer"></div>' +
    '</div>' +
    '</div>';

//modalpreview，预览
var modalPreview=
    '<div class="modalPreview">' +
    '<div class="class_modal_container">' +
    '<div class="class_modal_top clearfix">' +
    '<h3></h3><i onclick="classModal()">X</i>' +
    '</div>' +
    '<div class="class_modal_con"></div>' +
    '<div class="class_modal_footer">' +
    '<a href="javascript:;">保存</a>' +
    '</div>' +
    '</div>' +
    '</div>';

function preview(){
    $(modalPreview).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("预览班牌");
    $.ajax({
        url:"class_management.html",//获取静态页面
        type:"GET",
        datatype:"text",
        success:function(data){
            var _data=$(data);//将整个文档转化成jq对象
            var ajaxBody=$(_data).siblings("#ajaxBody");//获取到所需要的div
            $(ajaxBody).find(".writeIcon").hide();
            $(ajaxBody).find(".management .management_con").css("padding","0 20px");//修改css样式
            $(ajaxBody).prependTo(".class_modal_con");
        }
    });
}

//更新序列号
function changeIndex(){
    var i=1;
    $(".class_tabel tbody tr").each(function(){
        $(this).find("td:first").text(i++);
    });
}
