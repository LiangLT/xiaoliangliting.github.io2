/**
 * Created by Administrator on 2017/6/24 0024.
 */
$(function(){
    //关闭弹窗
    $(".close_btn").click(function(){
        $(".user_modal").hide();
    });

    //弹窗方法
    function show_modal(){
        $("#stu_del").show(
            function modalTxt(){
                $(".modal_dele").html("请先选择！");
                $(".us_modal_top p").html("温馨提示");
            });
    }

    //删除用户
    $(".del").click(function(){
        var delRadio=$('input:radio[name="rd"]:checked').val();
        if(delRadio==null){
            show_modal();
            return false;
        }
        else{
            $("#stu_del").show(function(){
                $(".modal_dele").html("您确定要删除吗？");
                //school_device删除确认
                $(".del_device").click(function(){
                    var deviceRadio=$('input:radio[name="rd"]:checked');
                    if(deviceRadio.val() != null){
                        data=JSON.stringify({"account":deviceRadio});
                        $.ajax({
                            url:"",
                            type:"POST",
                            contentType: "application/json;charset=utf-8", //必须有
                            data:data,
                            success:function(result){
                                if(result=="OK"){
                                    //删除选中的行
                                    $(deviceRadio).parents("tr").remove();
                                    $("#stu_del").hide();
                                    window.location="../../NopApi/customer/school_device.action?nowpage=" + result.currentPage;
                                }
                                else{
                                    alert("删除失败！");
                                }
                            }
                        });
                    };
                });
            });

        }
    });

    //学生管理删除确认
    $("#stu_true").click(function(){
        var delRadio=$('input:radio[name="rd"]:checked').val();
        if(delRadio){
            data=JSON.stringify({"account":delRadio});
            $.ajax({
                url:"",
                type:"POST",
                contentType: "application/json;charset=utf-8", //必须有
                // dataType:"text",
                data:data,
                success:function(result){
                    if(result=="OK"){
                        window.location="../../NopApi/customer/school_stu.action?nowpage=" + result.currentPage;
                    }
                    else{
                        alert("删除失败！");
                    }
                }
            });
        }
    });

    //班级管理删除弹窗+++++++点击确认
    $(".del_class").click(function(){
        //alert("111");
        var classRadio=$('input:radio[name="rd"]:checked').val();
        if(classRadio){
            data=JSON.stringify({"account":classRadio});
            //向后台发送请求
            $.ajax({
                url:"",
                type:"POST",
                contentType: "application/json;charset=utf-8", //必须有
                data:data,
                success:function(result){
                    if(result=="OK"){
                        window.location="../../NopApi/customer/school_class.action?nowpage=" + result.currentPage;
                    }
                    else{
                        alert("删除失败！");
                    }
                }
            });
        }
    });



});
