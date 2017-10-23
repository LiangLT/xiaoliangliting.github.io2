/**
 * Created by Administrator on 2017/7/15 0015.
 */


function comSelect(){
    //显示隐藏下拉框
    $(document).on("click",".dt_select > i ",function(){
        $(this).next("ul").slideToggle();
    });

    $(document).on("click",".dt_select ul li",function(){
       var parent=$(this).closest("ul");
        var select=$(this).closest(".dt_select");
        var values=$(this).attr("data-value");//在li中插入一个属性
        var text=$(this).text();//获取li的文本值
        if($(this).closest(".dt_select").hasClass("noclick")){
            parent.hide();
            return false;
        }
        select.css("z-index",1);
        select.find("em").html(text);//找考生学号。。。
        select.find("input[type='hidden']").val(values!=0?values:"");//查看dt_select值是否为空,并且赋值
        parent.hide();
    });

    //判断窗口是否有出现，然后隐藏，点击窗口隐藏
    $(document).on("click",function(e){
        if($(e.target).closest(".dt_select").length == 0){
            $(".dt_select ul").hide();
        }
    });

}

function selectNumber(options){
    var config={
        domSelect:["#student_number","#student_name"],
        domInit:["请选择考生学号","请选择考生姓名"]
    }
    var opts= $.extend(config,options);//extend添加新的方法
    var $jsondata={};

    //考生姓名
    var nameItemEvent = function(){
        var json = $jsondata;
        var item = [];//默认值，姓名
        var dt_select_text=$(".sl_name");
        var items = ['<li>'+opts.domInit[1]+'</li>'];//默认值，姓名
        //var item = ['<li>'+opts.domInit[1]+'</li>'];//默认值，姓名
        var name = $(this).attr("name");
        if(name && name != ""){
            var data = json["stu_name"][name];
            for(var i=0; i<data.length; i++){
                item.push('<li data-value="'+data[i]["id"]+'" name="'+data[i]["id"]+'">'+data[i]["name"]+'</li>');//学号的id,学生的名
                dt_select_text.find("em").html(item);
            }
            $(opts.domSelect[1]).find("ul").html(item.join("\n"));
        }else{
            $(opts.domSelect[1]).find("ul").html(items.join("\n"));
            dt_select_text.find("em").html(items);
            //alert("7877")
        }
    }

    //考生学号
    var initSelectEvent=function(json){
        //var item=[];//获取li第一个值
        var item=['<li>'+opts.domInit[0]+'</li>'];//获取li第一个值，默认值
        var data=json["number"];
        var initStdentNameVal=$(opts.domSelect[0]).find("input").val();
        for(var i= 0;i<data.length;i++){
            item.push('<li data-value="'+data[i]["id"]+'" name="'+data[i]["id"]+'">'+data[i]["name"]+'</li>');
        }
        $(opts.domSelect[0]).find("ul").html(item.join("\n"));//找到student_name下的ul,并且插入item(li)标签
        $jsondata = json;
        if(initStdentNameVal != ""){
            //找到li的值，并且点击
            $(opts.domSelect[0]).find("ul li[data-value='"+initStdentNameVal+"']").click();
        }
    }

    var ajaxConfig = {
        url : "js/jsondata.js",
        dataType : "jsonp",
        jsonpCallback : "callback",
        success : initSelectEvent
    }
    $.ajax(ajaxConfig);
    $(document).on("click",opts.domSelect[0]+" li",nameItemEvent);
}