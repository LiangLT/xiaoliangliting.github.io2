function checkLen(obj)
{
    var maxChars = 15;//最多字符数
    if (obj.value.length > maxChars){
        obj.value = obj.value.substring(0,maxChars);
    }
}
$(function(){


//modal内容
var mienModal=
    '<form>' +
    '<div class="class_modal_row"><span>班级：</span><input type="text" id="class_id"  value="" disabled></div>' +
    '<div class="class_modal_row">'+
    '<span>风采标题：</span><input type="text" id="mien_title" onkeyup="checkLen(this)">'+
    '<p>*风采标题不能超过15个字</p>'+
    '<div class="name" style="display: none"><i class="bgRed"></i><b></b></div>'+
    '</div>' +
    '<div class="class_modal_row">'+
    '<div class="pic_name">风采图片：</div>'+
    '<div class="pic_up">'+
    '<div class="pic_lf">'+
    '<ul></ul>'+
    '</div>' +
    '<div class="img_btn">'+
    '<a href="javascript:;">上传图片<input class="file" type="file" id="file" name="file" accept="image/jpg,image/jpeg,image/png,image/bmp"> </a>'+
    '</div>'+
    '<div>请上传小于1M的照片，大小:790*300的比例</div>' +
    '</div>' +
    '<div class="class_modal_row"><span>发布人：</span><input type="text" id="teacher_id"  value="" disabled></div>' +
    '</div>' +
    '</form>';
//
////新增
//$(".mien_add").click(function(){
//    $(modalDiv).prependTo("body");//把弹窗添加到body中
//    $(".class_modal_con").append(mienModal);
//    $(".class_modal_top h3").html("新增班级风采");
//    $(".class_modal_con").find("form").attr("id","submitMien");//给表单添加一个id
//    var footerBtn='<a class="addMien" href="javascript:;">发布</a>';
//      $(".class_modal_footer").append(footerBtn);
//
//    var classId=$("#classId").val();//班级
//    $("#class_id").val(classId);
//    var teacherId=$("#teacherId").val();//发布人
//    $("#teacher_id").val(teacherId);
//    $("#mien_title").blur(function(){
//        if(!isBlank($(this).val())){
//            $(".class_modal_row .name").hide();
//        }
//    });
//
//});
////新增点击确定按钮
//$(document).on("click",".addMien",function(){
//    var mien_title=$("#mien_title").val();//荣誉名称
//    var mienImgLen=$(".pic_lf ul").find("li");//是否存在的照片个数
//    if(isBlank(mien_title)){
//        $(".class_modal_row .name").show();
//        $(".class_modal_row .name b").html("荣誉名称不能为空!");
//    }
//    else if(mienImgLen.length<1){
//        alert("你还没上传图片，请先上传图片！再发布");
//    }
//    else{
//        //后台操作
//        $("#submitMien").submit();
//    }
//});
//
////修改
//$(".mien_change").click(function(){
//    $(modalDiv).prependTo("body");//把弹窗添加到body中
//    $(".class_modal_top h3").html("修改班级风采");
//    $(".class_modal_con").append(mienModal);
//    $(this).parents("tr").find("input[type='hidden']").attr("id","mien_id");
//    var $row='<div class="class_modal_row"><span>风采编号：</span><input type="text" id="mien_id"  value="" disabled></div>';
//        $($row).prependTo(".class_modal_con");
//
//    var list="<li><img src='' id='changeImg'> </li>";
//        $(".pic_up").find("ul").append(list);
//    var del="<p class='imgList'><img class='onClickDel' src='images/del.png'><input type='hidden' id='mienId'></p>";
//        $(".pic_up").find("ul li").append(del);
//        $(".img_btn").hide();//上传按钮
//
//    var titleTdTxt=$(this).parents("td").siblings(); //获取每个td的值
//
//    var mienId=$(this).parents("tr").find("#mienId").val();//风采隐藏id
//        $("#mien_id").val(mienId);//风采id
//
//        $("#class_id").val(titleTdTxt.eq(2).text());//班级id
//        $("#mien_title").val(titleTdTxt.eq(1).text());//风采标题
//        $("#teacher_id").val(titleTdTxt.eq(4).text());//发布人
//    var footerBtn='<a class="changeMine" href="javascript:;">确定</a>';
//        $(".class_modal_footer").append(footerBtn);
//       $(".mien_pic").find("img").attr("id","img_pic");//给每个img添加一个id
//    var imgs=$(this).parents("tr").find("#img_pic")[0].src;//获取表格的td
//        $("#changeImg").attr("src",imgs);
//    $(".class_modal_con").find("form").attr("id","submitChange");//给表单添加一个id
//});
////修改点击确定按钮,，后台操作
//$(document).on("click",".changeMine",function(){
//
//    var ss=$("#changeImg")[0].src;
//    alert(ss);
//    //$("#submitChange").submit();
//
//});

//删除
$(".mien_del").click(function(){
    var mien_title=$(this).parents("td").siblings(".mien_txt").text();//风采标题
    var mien_txt=$(this).parents("td").siblings(".mien_txt").find("input[type='hidden']").val();//获取风采编号,隐藏id
    $(modalDiv).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("温馨提示");
    var DivRow='<p>'+"您确定要删除“"+mien_title+"”吗？"+'</p>';
    $(".class_modal_con").append(DivRow);
    var footerBtn='<a class="delMine" href="javascript:;">确定</a>';
    $(".class_modal_footer").append(footerBtn);

    //后台操作
    $(".delMine").click(function(){

    });
});
});