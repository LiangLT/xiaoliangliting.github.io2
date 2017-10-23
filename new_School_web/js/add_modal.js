/**
 * Created by Administrator on 2017/6/24 0024.
 */
//判断不为空的
function isBlank(_val){
    if(_val==null || _val=="" || _val==undefined){
        return true;
    }
    return false;
}
/**检查是否为手机号码形式**/
function isInputPhone(str){
    var mobile = /^1(3|4|5|7|8)\d{9}$/;
    return mobile.test(str);
}

//school_class中的添加科目
$(function(){
    $("#add_btn").click(function(){
        $("#gender_modal").show();
        $(".change_class").hide();
        $(".add_gender").show();
        $(".us_modal_top p").html("添加班级");
        $(".class_val_1").blur(function(){
            var class_val_1=$(".class_val_1").val();
            if(isBlank(class_val_1)){
                $(".class_val_1").css("border","1px solid #008ed6").focus();
                $(".class_val_1").siblings(".red_err").html("班级不能为空！");
            }
            else{
                $(".us_modal_body").find(".class_val_1").css("border","1px solid #ddd");
                $(".class_val_1").siblings(".red_err").html("");
            }
        });
        $(".class_val_2").blur(function(){
            var class_val_2=$(".class_val_2").val();
            if(isBlank(class_val_2)){
                $(".class_val_2").css("border","1px solid #008ed6").focus();
                $(".class_val_2").siblings(".red_err").html("班主任不能为空！");
            }
            else{
                $(".us_modal_body").find(".class_val_2").css("border","1px solid #ddd");
                $(".class_val_2").siblings(".red_err").html("");
            }
        });

        $(".add_gender").click(function(){
            var class_val_1=$(".class_val_1").val();
            var class_val_2=$(".class_val_2").val();
            //var class_val_3=$(".class_val_3").val();
            if(isBlank(class_val_1)||isBlank(class_val_2)){
                $(".class_val_2").blur(function(){
                    var class_val_2=$(".class_val_2").val();
                    if(isBlank(class_val_2)){
                        $(".class_val_2").css("border","1px solid #008ed6").focus();
                        $(".class_val_2").siblings(".red_err").html("班主任不能为空！");
                    }
                    else{
                        $(".us_modal_body").find(".class_val_2").css("border","1px solid #ddd");
                        $(".class_val_2").siblings(".red_err").html("");
                    }
                });





            }
            else{
                    data=JSON.stringify({"class_val_1":class_val_1,"class_val_2":class_val_2});
                    $.ajax({
                        url:"",
                        type:"POST",
                        dataType:"text",
                        data:data,
                        success:function(result){
                            if(result=="OK"){
                                location.href="";
                            }
                            else{
                                alert("添加失败！");
                            }
                        }
                    });
                }
        });
    });
    $("#add_btn").click(function(){
        //$(".add_gender").show();
    });


});

//school_class中的修改科目
$(function(){
    $("#change_btn").click(function(){
        var delRadio=$('input:radio[name="rd"]:checked').val();
        if(delRadio){
            $("#gender_modal").show();
            $(".change_class").show();
            $(".add_gender").hide();
            $(".us_modal_top p").html("修改班级");
        }
        else{
            $("#stu_del").show();
            $(".us_modal_top p").html("温馨提示");
            $(".modal_dele").html("请先选择！");
        }
    });
   $(".change_class").click(function(){
       var class_val_1=$(".class_val_1").val();
       var class_val_2=$(".class_val_2").val();
       if(isBlank(class_val_1)||isBlank(class_val_2)){
           alert("内容不能为空！请输入修改！");
       }
       else{
           data=JSON.stringify({"class_val_1":class_val_1,"class_val_2":class_val_2});
           $.ajax({
               url:"",
               type:"POST",
               dataType:"text",
               data:data,
               success:function(result){
                   if(result=="OK"){
                       location.href="";
                   }
                   else{
                       alert("添加失败！");
                   }
               }
           });
       }
    });
});

<!-- 下拉框模糊查询-->
    $(function(){
        $(".nice-select").click(function(e){
            $(this).find("ul").show();
            e.stopPropagation();//stopPropagation终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。
        });
        $(".nice-select ul li").hover(function(e){
            $(this).toggleClass("on");
            e.stopPropagation();
        });

        $(".nice-select ul li").click(function(e){
            var val = $(this).text();
            $(".nice-select").find("input").val(val);
            $(".nice-select").find("ul").hide();
            e.stopPropagation();
        });
        $(document).click(function(){
            $(".nice-select").find("ul").hide();
        });
    });
    function searchList(strValue) {
        var count = 0;
        if (strValue != "") {
            $(".nice-select ul li").each(function(i) {
                var contentValue = $(this).text();
                if (contentValue.toLowerCase().indexOf(strValue.toLowerCase()) < 0) {
                    $(this).hide();
                    count++;
                } else {
                    $(this).show();
                }
                if (count == (i + 1)) {
                    $(".nice-select").find("ul").hide();
                } else {
                    $(".nice-select").find("ul").show();
                }
            });
        } else {
            $(".nice-select ul li").each(function(i) {
                $(this).show();
            });
        }
    }
<!-- 下拉框模糊查询-->




