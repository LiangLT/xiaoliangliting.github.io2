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

//字符控制
function checkLen(obj)
{
    var maxChars = 30;//最多字符数
    if (obj.value.length > maxChars){
        obj.value = obj.value.substring(0,maxChars);
    }
}

//modal
//var modalDiv=
//    '<div class="class_modal">' +
//    '<div class="class_modal_container">' +
//    '<div class="class_modal_top clearfix">' +
//    '<h3></h3><i onclick="classModal()">X</i>' +
//    '</div>' +
//    '<div class="class_modal_con"></div>' +
//    '<div class="class_modal_footer"></div>' +
//    '</div>' +
//    '</div>';


$(function(){
    //var honorModal=
    //    '<form>'+
    //        '<div class="class_modal_row">' +
    //        '<span>班级：</span><select class="row_select"></select>'+
    //        '</div>' +
    //        '<div class="class_modal_row">'+
    //        '<span>荣誉名称：</span><input id="honorName" type="text">'+
    //        '<div class="name" style="display: none"><i class="bgRed"></i><b></b></div>'+
    //        '</div>' +
    //        '<div class="class_modal_row">'+
    //        '<div class="pic_name">图片：</div>'+
    //        '<div class="pic_up">'+
    //        '<div class="pic_lf">'+
    //        '<ul></ul>'+
    //        '</div>'+
    //        '<div class="img_btn">'+
    //        '<a href="javascript:;">上传图片<input class="file" type="file" id="file" name="file" accept="image/jpg,image/jpeg,image/png,image/bmp"> </a>' +
    //            '<p>*请上传小于1M的照片，大小为：100*100的比例'+
    //        '</div>'+
    //        '</div>'+
    //        '</div>' +
    //        '<div class="class_modal_row">'+
    //        '<span>备注：</span><textarea onkeyup="checkLen(this)"></textarea>' +
    //        '<p>（*荣誉备注不可超过30个字！）</p>'+
    //
    //        '</div>' +
    //    '</form>';

    //新增荣誉
    $(".honor_add").click(function(){
        //$(modalDiv).prependTo("body");
        $(".class_modal_top h3").html("新增班级荣誉");
        //$(".class_modal_con").append(honorModal);
        //var footerBtn='<a href="javascript:;" onclick="honorAdd()">确定</a><a href="javascript:;" onclick="classModal()">取消</a> ';//给底部添加按钮
        //$(".class_modal_footer").append(footerBtn);

        $("#honorName").blur(function(){
            if(!isBlank($(this).val())){
                $(".class_modal_row .name").hide();
            }
        });
        var arrOption=["六年级（1）班","六年级（2）班"];
        for(var i=0; i<arrOption.length;i++){
            var item="";
            item+="<option>"+arrOption[i]+"</option>";
            $(".row_select").append(item);
        }

    });
});

//增加荣誉点击确认按钮，
function honorAdd(){
    var honorName=$("#honorName").val();//荣誉名称
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

    }
}


//删除
$(document).on("click",".honor_del",function(){
    var honorText=$(this).parents("td").siblings(".honor_txt").text();//获取班级宣言的值
    //alert(honorText);
    $(modalDiv).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("温馨提示");
    var DivRow='<p>'+"您确定要删除班级宣言为“"+honorText+"”吗？"+'</p>';
    $(".class_modal_con").append(DivRow);
    var footerBtn='<a class="delHonor" href="javascript:;">确定</a>';
    $(".class_modal_footer").append(footerBtn);

    //后台操作
    $(".delHonor").click(function(){
        // alert(honorText);
    });

});