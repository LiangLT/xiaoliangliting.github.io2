/**
 * Created by Administrator on 2017/8/19 0019.
 */

$(function(){
    addHtmlOne();
    var schedule_txt=$(".list_temp li").eq(0).text();//模板三的值
    var schedule_title=$(".title");//当前模板的值
    schedule_title.text(schedule_txt);//把模板的值赋给当前的值
});
/***********************=====模板1star===***********************/
    addHtmlOne=function(){
        $(".schedule_tbody").remove();
        $(".schedule_null").remove();
        var schedule_txt=$(".list_temp li").eq(0).text();//模板一的值
        var schedule_title=$(".title");//当前模板的值
        schedule_title.text(schedule_txt);//把模板的值赋给当前的值
        var arrHtml=["第一节","第二节","第三节","第四节","第五节","第六节","第七节"];
        var dlHtml="";
        //列===上午
        for(var i=0;i<4;i++){
            dlHtml += "<dl class='schedule_tbody clearfix'>";
            dlHtml +="<dt>"+arrHtml[i]+"</dt>";
            //行
            for(var j=0; j<7;j++){
                dlHtml+="<dd class='ui-droppable'></dd>";
            }
            dlHtml +="</dl>";
        }
        dlHtml +="<dl class='schedule_null clearfix'><dt>午间休息</dt></dl>";
        //下午的课程
        for(var i=4;i<7;i++){
            dlHtml += "<dl class='schedule_tbody clearfix'>";
            dlHtml +="<dt>"+arrHtml[i]+"</dt>";
            for(var j=0; j<7;j++){//行
                dlHtml+="<dd ></dd>";
            }
            dlHtml +="</dl>";
        }
        $("#schedule_tabel").append(dlHtml);
        //调用拖动方法
        dragg();
    }
/***********************=====模板1end===***********************/

/***********************=====模板2star===***********************/
    addHtmlTwo=function(){
        $(".schedule_tbody").remove();
        $(".schedule_null").remove();
        var schedule_txt=$(".list_temp li").eq(1).text();//模板二的值
        var schedule_title=$(".title");//当前模板的值
        schedule_title.text(schedule_txt);//把模板的值赋给当前的值
        var arrHtml=["第一节","第二节","第三节","第四节","第五节","第六节","第七节","第八节"];
        var dlHtml="";
        for(var i=0;i<5;i++){//列
            dlHtml += "<dl class='schedule_tbody clearfix'>";
            dlHtml +="<dt>"+arrHtml[i]+"</dt>";
            for(var j=0; j<7;j++){//行
                dlHtml+="<dd></dd>";
            }
            dlHtml +="</dl>";
        }
        dlHtml +="<dl class='schedule_null clearfix'><dt>午间休息</dt></dl>";
        //下午的课程
        for(var i=5;i<8;i++){//列
            dlHtml += "<dl class='schedule_tbody clearfix'>";
            dlHtml +="<dt>"+arrHtml[i]+"</dt>";
            for(var j=0; j<7;j++){//行
                dlHtml+="<dd></dd>";
            }
            dlHtml +="</dl>";
        }
        $("#schedule_tabel").append(dlHtml);
        //调用拖动方法
        dragg();
    }
/***********************=====模板2end===***********************/

/***********************=====模板3star===***********************/
    addHtmlThree=function(){
        $(".schedule_tbody").remove();
        $(".schedule_null").remove();
        var schedule_txt=$(".list_temp li").eq(2).text();//模板二的值
        var schedule_title=$(".title");//当前模板的值
        schedule_title.text(schedule_txt);//把模板的值赋给当前的值
        var arrHtml=["第一节","第二节","第三节","第四节","第五节","第六节","第七节","第八节","第九节","第十节"];
        var dlHtml="";
        //列
        for(var i=0;i<4;i++){
            dlHtml += "<dl class='schedule_tbody clearfix'>";
            dlHtml +="<dt>"+arrHtml[i]+"</dt>";
            //行
            for(var j=0; j<7;j++){
                dlHtml+="<dd class='ui-droppable'></dd>";
            }
            dlHtml +="</dl>";
        }
        dlHtml +="<dl class='schedule_null clearfix'><dt>午间休息</dt></dl>";
        for(var i=4;i<7;i++){
            dlHtml += "<dl class='schedule_tbody clearfix'>";
            dlHtml +="<dt>"+arrHtml[i]+"</dt>";
            for(var j=0; j<7;j++){//行
                dlHtml+="<dd ></dd>";
            }
            dlHtml +="</dl>";
        }
        dlHtml +="<dl class='schedule_null clearfix'><dt>晚间休息</dt></dl>";
        for(var i=7;i<10;i++){
            dlHtml += "<dl class='schedule_tbody clearfix'>";
            dlHtml +="<dt>"+arrHtml[i]+"</dt>";
            for(var j=0; j<7;j++){//行
                dlHtml+="<dd ></dd>";
            }
            dlHtml +="</dl>";
        }

        $("#schedule_tabel").append(dlHtml);
        //调用拖动方法
        dragg();
    }
/***********************=====模板3end===***********************/

/***********************=====模板4star===***********************/
addHtmlFour=function(){
    $(".schedule_tbody").remove();
    $(".schedule_null").remove();
    var schedule_txt=$(".list_temp li").eq(3).text();//模板二的值
    var schedule_title=$(".title");//当前模板的值
    schedule_title.text(schedule_txt);//把模板的值赋给当前的值
    var arrHtml=["第一节","第二节","第三节","第四节","第五节","第六节","第七节","第八节","第九节","第十节","第十一节"];
    var dlHtml="";
    //列
    for(var i=0;i<5;i++){
        dlHtml += "<dl class='schedule_tbody clearfix'>";
        dlHtml +="<dt>"+arrHtml[i]+"</dt>";
        //行
        for(var j=0; j<7;j++){
            dlHtml+="<dd class='ui-droppable'></dd>";
        }
        dlHtml +="</dl>";
    }
    dlHtml +="<dl class='schedule_null clearfix'><dt>午间休息</dt></dl>";
    for(var i=5;i<8;i++){
        dlHtml += "<dl class='schedule_tbody clearfix'>";
        dlHtml +="<dt>"+arrHtml[i]+"</dt>";
        for(var j=0; j<7;j++){//行
            dlHtml+="<dd ></dd>";
        }
        dlHtml +="</dl>";
    }
    dlHtml +="<dl class='schedule_null clearfix'><dt>晚间休息</dt></dl>";
    for(var i=8;i<11;i++){
        dlHtml += "<dl class='schedule_tbody clearfix'>";
        dlHtml +="<dt>"+arrHtml[i]+"</dt>";
        for(var j=0; j<7;j++){//行
            dlHtml+="<dd ></dd>";
        }
        dlHtml +="</dl>";
    }

    $("#schedule_tabel").append(dlHtml);
    //调用拖动方法
    dragg();
}
/***********************=====模板4end===***********************/
