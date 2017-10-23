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

//新增班级宣言
var conDiv=
    '<div class="class_modal_row">' +
        '<span>班级：</span>' +
        '<input type="text" id="className" value="" disabled>' +
    '</div>' +
    '<div class="class_modal_row">' +
        '<span>班主任：</span>' +
        '<input type="text" id="classTeacher" value="" disabled>' +
    '</div>' +
    '<div class="class_modal_row">' +
        '<span>年份：</span>' +
        '<input type="text" id="classDate" >' +
    '</div>'+
    '<div class="class_modal_row">' +
        '<span>班级宣言：</span>' +
        '<textarea id="classDeclaration" onkeyup="checkLen(this)"></textarea>' +
        '<p>（**班级宣言不可超过30个字！）</p>' +
        '<div class="name" style="display: none"><i class="bgRed"></i><b></b></div>' +
    '</div>';
$(document).on("click",".declaration_add",function(){
    $(modalDiv).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("新增班级宣言");
    $(".class_modal_con").append(conDiv);
    var claName=$("#claName").val();//班级的隐藏value值
    var teacherName=$("#teacherName").val();//班主任的隐藏value值
    var className=$("#className").val(claName);//班级值
    var classTeacher=$("#classTeacher").val(teacherName);//班主任值
    var footerBtn='<a href="javascript:;" onclick="addData()">确定</a><a href="javascript:;" onclick="classModal()">取消</a> ';//给底部添加按钮
    $(".class_modal_footer").append(footerBtn);
    $("#classDeclaration").blur(function(){
        var classDeclaration=$("#classDeclaration").val();//班级宣言值
        if(!isBlank(classDeclaration)){
            $(".class_modal_row .name").hide();
        }
    });
});
//新增点击确定，后台
addData=function(){
    var className=$("#className").val();//班级值
    var classTeacher=$("#classTeacher").val();//班主任值
    var classDeclaration=$("#classDeclaration").val();//班级宣言值
    var classDate=$("#classDate").val();//年份
    var claName=$("#classId").val();//班级的隐藏id值
    var teacherName=$("#teacherId").val();//班主任的隐藏id值
    //遍历班级宣言是否为空
    $("#classDeclaration").each(function(){
        if(isBlank(classDeclaration)){
            $(".class_modal_row .name").show();
            $(".class_modal_row .name b").html("班级宣言不能为空!");
        }
        else {
            $(".class_modal_row .name").hide();
            //后台操作
            $(".class_modal").remove();//关闭弹窗

        }
    });
}


//删除
$(document).on("click",".declaration_del",function(){
    var decltText=$(this).parents("td").siblings(".txt").text();//获取班级宣言的值
    $(this).parents("td").siblings().find("input[type='hidden']").attr("id","hidden");//给input添加一个id
    $(modalDiv).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("温馨提示");
    var DivRow='<p>'+"您确定要删除班级宣言为“"+decltText+"”吗？"+'</p>';
    $(".class_modal_con").append(DivRow);
    var footerBtn='<a class="delData" href="javascript:;">确定</a>';
    $(".class_modal_footer").append(footerBtn);

    //删除后台
    $(".delData").click(function(){

    });
});


//修改
$(document).on("click",".declaration_change",function(){
    $(modalDiv).prependTo("body");//把弹窗添加到body中
    $(".class_modal_top h3").html("修改班级宣言");
    $(".class_modal_con").append(conDiv);
    var classOpt='<div class="class_modal_row">' +
        '<span>宣言编号：</span><input type="text" id="classId" value="" disabled>' +
        '</div>';
    $(classOpt).prependTo(".class_modal_con");//把宣言编号添加到modal内容区
    var $Txt=$(this).parents("tr").find("td");
    var classId=$("#classId").val($Txt.eq(1).text());//宣言编号
    var className=$("#className").val($Txt.eq(2).text());//班级值
    var classTeacher=$("#classTeacher").val($Txt.eq(3).text());//班主任值
    var classDate=$("#classDate").val($Txt.eq(4).text());//年份
    var classDeclaration=$("#classDeclaration").val($Txt.eq(6).text());//班级宣言值
    var footerBtn='<a href="javascript:;" onclick="changeData()">确定</a><a href="javascript:;" onclick="classModal()">取消</a> ';//给底部添加按钮
    $(".class_modal_footer").append(footerBtn);
});
//修改点击确定，后台
changeData=function(){
    var classId=$("#classId").val();//宣言编号
    var classDeclaration=$("#classDeclaration").val();//班级宣言值
    var classDate=$("#classDate").val();//年份
    //遍历班级宣言是否为空
    $("#classDeclaration").each(function(){
        if(isBlank(classDeclaration)){
            $(".class_modal_row .name").show();
            $(".class_modal_row .name b").html("班级宣言不能为空!");
        }
        else {
            $(".class_modal_row .name").hide();
            //后台操作
            $(".class_modal").remove();//关闭弹窗

        }
    });
}


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



//***********************************************//////
