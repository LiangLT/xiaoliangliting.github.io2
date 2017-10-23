//关闭modal
function closeModal(){
    $("#modalClose").remove();
}//关闭modal
function classModal(){
    $(".class_modal").hide();
}
//判断是否为空方法
function isBlank(_value){
    if(_value==null || _value=="" || _value==undefined){
        return true;
    }
    return false;
}

//字符控制
function checkLen(obj)
{
    var maxChars = 30;//最多字符数
    if (obj.value.length > maxChars){
        obj.value = obj.value.substring(0,maxChars);
    }
}

//modal
var modalDiv=
    '<div class="class_modal"  id="modalClose">' +
    '<div class="class_modal_container">' +
    '<div class="class_modal_top clearfix">' +
    '<h3></h3><i onclick="closeModal()">X</i>' +
    '</div>' +
    '<div class="class_modal_con" id="delModalHonor"></div>' +
    '<div class="class_modal_footer" id="delBtn"></div>' +
    '</div>' +
    '</div>';


$(function(){
    //新增荣誉
    $(".honor_add").click(function(){
        $(".class_modal").show();
        $(".class_modal_top h3").html("新增班级荣誉");
        $("#honorName").blur(function(){
            if(!isBlank($(this).val())){
                $(".class_modal_row .name").hide();
            }
        });

    });
});

//增加荣誉点击确认按钮，
function honorAdd(){
    var honorName=$("#honorName").find("option:selected").val();//荣誉名称
    var classId=$("#classId").val();//隐藏值的班级id
    var clasId=$("#clasId").val();//隐藏值的班级id
    var optionVal=$(".row_select option:selected" ).val();//获取option的val值
    if(isBlank(honorName)){
        $(".class_modal_row .name").show();
        $(".class_modal_row .name b").html("荣誉名称不能为空!");
        return false;
    }
    else {
        $(".class_modal_row .name").hide();
        //后台操作
        alert(honorName+optionVal)

    }
}


//删除
$(document).on("click",".honor_del",function(){
    var honorText=$(this).parents("td").siblings(".honor_txt").text();//获取班级宣言的值
    var honor_img=$(this).parents("td").siblings(".honor_img").find("input[type='hidden']").val();
    //alert(honorText);
    $(modalDiv).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("温馨提示");
    var DivRow='<p>'+"您确定要删除班级宣言编号为“"+honorText+"("+honor_img+")”吗？"+'</p>';
    $("#delModalHonor").append(DivRow);
    var footerBtn='<a class="delHonor" href="javascript:;">确定</a>';
    $("#delBtn").append(footerBtn);

    //后台操作
    $(".delHonor").click(function(){
        // alert(honorText);
    });

});