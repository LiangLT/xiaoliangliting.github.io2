/**
 * Created by Administrator on 2017/7/18 0018.
 */
//document.write("<script src='../js/jquery.date_input.pack54.js'></script>");
//取消
function closeModal(){
    $("#divModal").hide();
    //$("#divModal>div").remove();
}
//通知全选实现
function seleAll(){
    var dom=document.getElementById("Checkbox1");
    var doms=document.getElementsByName("newslist");
    for(var i=0;i<doms.length;i++){
        doms[i].checked=dom.checked;
    }
}

//添加弹窗
function modalShow(){
    $("#divModal").show();
    var giveModal=
        '<div class="modal_bg mb">' +
            '<div class="modal_con">' +
                '<div class="modal_top clearfix">' +
                    '<h3>温馨提示</h3><i class="close closeClick" onclick="closeModal()">X</i>' +
                '</div>' +
                '<div class="modal_body">' +
                    '<p class="p_con"></p>' +
                '</div>' +
                '<div class="modal_footer">' +
                    '<a id="true_del" class="teacher_del send_True examine_True" href="javascript:;">确认</a><a class="closeClick" href="javascript:;" onclick="closeModal()">取消</a>' +
                '</div>' +
            '</div>' +
        '</div>';
    $("#divModal").append(giveModal);
}

$(function(){
    //通知
    $("#inform").click(function(){
        var checkbox=$(".gradeTabel input:checkbox[name='newslist']:checked").val();
        var allBox=$(".gradeTabel input:checkbox[name='all']:checked").val();
        //var oTxt=$(".statu_infor");
            $("#divModal>div").remove();
            if(checkbox != null){
                // 全选跳出弹窗
                if(allBox != null){
                    $(".gradeTabel input:checkbox[name='newslist']:checked").each(function(){
                    $("#divModal>div").remove();
                    //var $val=$(this).parents("td").siblings(".sNumber").text();//已选中的学生学号
                    var $statuTxt=$(this).parents("td").siblings(".statu_infor");//已选中状态值;
                        if($statuTxt.text()=="已发送"){
                            $("#divModal>div").remove();
                            modalShow();
                            $(".modal_body").children(".p_con").html("您已发送过，确定要重新发送吗？");
                            return false;
                        }
                        else if($statuTxt.text()=="未发送"){
                            modalShow();
                            $(".modal_body").children(".p_con").html("您确定要发送选中学生的成绩吗？");
                        }
                    });
                }
                //单选，多选
                else{
                    $(".gradeTabel input:checkbox[name='newslist']:checked").each(function(){
                        $("#divModal>div").remove();
                        var $statuTxt=$(this).parents("td").siblings(".statu_infor");//已选中状态值
                        if($statuTxt.text()=="已发送"){
                            modalShow();
                            $(".modal_body").children(".p_con").html("您已发送过，确定要重新发送吗？");
                            return false;
                        }
                        else if($statuTxt.text()=="未发送"){
                            modalShow();
                            $(".modal_body").children(".p_con").html("您确定要发送选中学生的成绩吗？");
                        }
                    });
                }
            }
            else{
                modalShow();
                $(".modal_body").children(".p_con").html("请您先选择！")
            }
        //发送通知，点击确认之后触发的事件
        $(".examine_True").click(function(){
            $(".gradeTabel input:checkbox[name='newslist']:checked").each(function(){
                var $val=$(this).parents("td").siblings(".sNumber").text();//已选中的学生学号
                var $sClass=$(this).parents("td").siblings(".sClass").text();
                var $stuName=$(this).parents("td").siblings(".stuName").text();
                var $sSubject=$(this).parents("td").siblings(".sSubject").text();
                var $sExam=$(this).parents("td").siblings(".sExam").text();
                var $sTime=$(this).parents("td").siblings(".sTime").text();
                var $stuScore=$(this).parents("td").siblings(".stuScore").text();
                alert($val);
                alert("尊敬的"+$stuName+"家长"+'，' +"您的孩子在"+$sClass+"学号为"+$val+'，'+"在"+$sTime+"的"+$sExam+"中"+$sSubject+'成绩为：'+$stuScore+"分");
            });
        });
    });
});

//判断是否为空方法
function isBlank(_value){
    if(_value==null || _value=="" || _value==undefined){
        return true;
    }
    return false;
}
//更新序号
function changIndex(){
    var i=1;
    $(".gradeTabel tbody tr").each(function(){
        $(this).find("input[name=val]").val(i++);
    });
}
//判断是否为数字
function isNumber(str){
    var number= /^[\d]+$/g;
    return number.test(str);
}

//确认添加
$(function(){
    //点击确认添加一行
    var test_time=$("#test_time").text();
    var tabelStr=
        '<tr>' +
        '<td  colspan="1" class="hidden_no"><input type="text" name="val" disabled="disabled"></td>' +
        '<td colspan="1">小莫</td>' +
        '<td  colspan="1">131803215</td>' +
        '<td  colspan="1">女</td>' +
        '<td  colspan="1">1年级1班</td>' +
        '<td  colspan="1">语文</td>' +
        '<td  colspan="1">单元测试</td>' +
        '<td  colspan="1" >2017-07-19</td>' +
        '<td  colspan="1" class="edit_grade">88</td>' +
        '<td  colspan="1">' +
        '<input class="tb_btn" type="button" value="修改" name="btn">' +
        '<input class="tb_del" type="button" value="删除" name="btn">' +
        '</td>' +
        '</tr>';
    $("#confirm").click(function(){
        var dateTxt=$(".date-check").val();//考试时间
        var nameTxt=$(".select_icon").val();//考试名称
        var examTxt=$(".data_name").text();//科目名称
        var studentName=$(".sl_name em").text();//考生名称
        var stuYear=$(".year_sele_date input").val();//学年
        var stuExam=$(".exam_gr").val();//学期
        var studentGrade=$(".student_grade").val();//考生成绩
        var data_input=$(".data_width input").val();//成绩录入的所有input框
       // alert(dateTxt+','+nameTxt +','+ examTxt +','+ studentName +','+ stuYear+','+ stuExam+','+studentGrade);
        $(this).each(function(){
            if(!isBlank(data_input) && !isBlank(studentGrade) && !isBlank(stuYear) && !isBlank(stuExam) && studentName != "请选择考生姓名"){
                $(".gradeTabel").append(tabelStr);
                changIndex();//更新序号
                return false;
            }
            else{
                alert("添加失败，请您检查是否还有没有未选择或输入！");
            }
        });
    });
});

//修改
$(document).on("click",".gradeTabel .tb_btn", function(){
    $(this).each(function(){
        var str=$(this).val()=="修改"?"确认":"修改";
        $(this).toggleClass("change_btn");
        $(this).val(str);

        //成绩添加输入框
        $(this).parents().siblings(".edit_grade").each(function(){
            var txt=$(this).find("input[type='text']");
            if(!txt.length){
                var inputDate='<input class="grade_num" type="text" value="'+$(this).text()+'">';
                $(this).html(inputDate);
            }
            else{
                var $stu_Number=$(this).siblings(".stu_Number").text();//学生学号
                var $stu_Time=$(this).siblings(".stu_Time").text();//考试时间
                var $stu_Grade=txt.val();//学生成绩
                $(this).html(txt.val());//插入新的成绩
                alert($stu_Number+','+$stu_Time+','+$stu_Grade);
            }
        });
    });
});

//修改点击的跳出时间控件
$(document).on("focus","#datefix",function(){
    $("#datefix").jeDate({
        dateCell:"#refix",
        format:"YYYY-MM-DD",
        minDate:'2010-01-01',
        maxDate:'3000-12-30',
    });
});
//修改判断输入框是否是数字
$(document).on("blur",".grade_num",function(){
    var val=$(this).val();
    if(!isNumber(val)){
        alert("请输入数字！");
    }
});
//删除
$(document).on("click",".gradeTabel .tb_del", function(){
    //$(this).parents("tr").remove();
    var _thisDel=$(this);
    modalShow();
    $("#divModal").show();
    $(".modal_body").children(".p_con").html("您确定要删除吗？");
    $(document).on("click",".teacher_del", function(){
        $(_thisDel).parents("tr").remove();
        changIndex();//更新序号
        $("#divModal").hide();
    });
});

//考试名称
$(function(){
    //点击输入框考试名称
    $(".select_icon").click(function(){
        var _this=this;
        $(this).next("ul").slideToggle();
        $(".oUl li").click(function(){
            var oLi=$(this).text();
            $(_this).val(oLi);
            $(".oUl").hide();
        });
    });

    var examArr=["单元测试","月考","期中考试","期末考试"];
    for(var i=0;i<examArr.length;i++){
        var exam="";
        exam += "<li>"+examArr[i]+"</li>";
        $(".select .oUl").append(exam);
    }
});


