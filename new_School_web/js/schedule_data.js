//弹窗
selectModal=function(){
    var selectModal=
        '<div class="user_modal" id="scheduleModal">' +
            '<div class="us_modal_con">' +
                '<div class="us_modal_top clearfix">' +
                    '<p></p><i class="close_btn" onclick="closeModal()">X</i>' +
                '</div>' +
                '<div class="us_modal_body">' +
                    '<div class="modal_dele"></div>' +
                '</div>' +
                '<div class="us_modal_footer">' +
                    '<a onclick="closeModal()">取消</a>' +
                '</div>' +
            '</div>' +
        '</div>';
    $(selectModal).prependTo("body");
}
//关闭弹窗
closeModal=function(){
    $("#scheduleModal").hide();
    $("#scheduleModal").remove();
}

$(function(){
    //保存课程
    $(".btn_revise").click(function(){
        var val=$("#schedule_tabel .schedule_tbody dd").text();//课程表中的值
        var scheduleVal=$(".schedule_select select").val();//班级的值
        if(val==null || val=="" || val==undefined){
            selectModal();//调用弹窗
            $("#scheduleModal").show();
            $("#scheduleModal .us_modal_top p").html("温馨提示");
            $("#scheduleModal .modal_dele").html("请先填课程表，再保存！")
        }
        else{
            selectModal();
            $("#scheduleModal").show();
            $("#scheduleModal .us_modal_top p").html("课程表");
            $("#scheduleModal .modal_dele").html("您确定保存“"+scheduleVal+"”的课程表吗？");
            $("<a id='scheduleSure'>确定</a>").prependTo("#scheduleModal .us_modal_footer");
        }
    });
    //确定保存课程表
    $(document).on("click","#scheduleSure",function(){
        //后台数据
        $(".schedule_tbody").find("dd").each(function(){
            var schedule_tbody=$(this).siblings("dt").find(".subRowId").val();
            var language=$(this).find(".subId").val();
            alert(schedule_tbody+','+language);
        });
    });


    //隐藏弹窗
    $(document).on("click",function(e){
        if($(e.target).closest(".list_temp").length==0){
            $(".list_temp ul").hide();
        }
    })
});
//鼠标经过时修改图标
function iconImg(mainNode){
    if(mainNode){
        //用0来判断是否有选中
        if(mainNode.css("background-image").indexOf("time_pulldown.png")>=0){
            mainNode.css("background-image","url('images/time_pullup.png')");
        }
        else{
            mainNode.css("background-image","url('images/time_pulldown.png')");
        }
    }
}

//拖动
function dragg(){
    //拖动科目
    $("#schedule_droppable").accordion();
    $("#schedule_droppable dd").draggable({

        //appendTo:"body",//添加到body中
        helper:"clone",//复制
        cursor: "move"
    });

    //拖动内容的位置

    $("#schedule_tabel .schedule_tbody dd").droppable({
        drop:function(event,ui){
            console.log("------------");
            var _this=$(this);
            $(_this).append(ui.draggable.html());
        }
    });

}