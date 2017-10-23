function checkLen(obj)
{
    var maxChars = 15;//最多字符数
    if (obj.value.length > maxChars){
        obj.value = obj.value.substring(0,maxChars);
    }
}
$(function(){

//删除
$(".mien_del").click(function(){
    var mien_title=$(this).parents("td").siblings(".mien_txt").text();//风采标题
    var mien_txt=$(this).parents("td").siblings(".mien_txt").find("input[type='hidden']").val();//获取风采编号,隐藏id
    var hiddenImage=$(this).parents("tr").find(".hiddenImage").val();//隐藏图片
    alert(hiddenImage)
    $(modalDiv).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("温馨提示");
    var DivRow='<p>'+"您确定要删除“"+mien_title+'('+hiddenImage+')'+"”吗？"+'</p>';
    $("#delModal").append(DivRow);
    var footerBtn='<a class="delMine" href="javascript:;">确定</a>';
    $("#ftModal").append(footerBtn);

    //后台操作
    $(".delMine").click(function(){

    });
});
});