/**
 * Created by Administrator on 2017/8/19 0019.
 */
$(function(){

        /***********************=====默认star===***********************/
        $(".schedule_tbody").remove();
        $(".schedule_null").remove();
        var arrHtml=["第一节","第二节","第三节","第四节","第五节","第六节","第七节","第八节","第九节","第十节","第十一节","第十二节"];

        var i;

        var read=$("#read").val();//是否早读
        var amNum =5, //早上
            pmNum = 3, //下午
            ngNum = 4; //晚上
        var Total=parseInt(amNum)+parseInt(pmNum)+parseInt(ngNum);
        for(i=0;i<=Total;i++){
            if(i==amNum){
                var dlHtml="";
                for(i=0;i<amNum;i++){
                    dlHtml += "<dl class='schedule_tbody clearfix' id='row"+i+"'>";
                    dlHtml +="<dt id='section"+i+"'>"+arrHtml[i]+"<input type='hidden' class='subRowId' value='99'>"+"<input id='dateVal"+i+"' type='text' value='08:00-09:00' readonly>"+"</dt>";
                    for(var j=0; j<7;j++){
                        dlHtml+="<dd class='ui-droppable'></dd>";
                    }
                    dlHtml +="</dl>";
                }
                $("#schedule_tabel").append(dlHtml);
                var schedule_tbody=$("#schedule_tabel").find(".schedule_tbody");
                if(schedule_tbody.length==amNum){
                    var pmRow="<dl class='schedule_null clearfix'><dt>午间休息</dt></dl>";
                    $("#schedule_tabel").append(pmRow);
                }
            }
            else if(i==pmNum+amNum){
                var dlHtmlPm='';
                for(i=amNum;i<pmNum+amNum;i++){
                    dlHtmlPm += "<dl class='schedule_tbody clearfix' id='row"+i+"'>";
                    dlHtmlPm +="<dt id='section"+i+"'>"+arrHtml[i]+"<input type='hidden' class='subRowId' value='99'>"+"<input id='dateVal"+i+"' type='text' value='08:00-09:00' readonly>"+"</dt>";
                    for(var j=0; j<7;j++){
                        dlHtmlPm+="<dd class='ui-droppable'></dd>";
                    }
                    dlHtmlPm +="</dl>";
                }
                $("#schedule_tabel").append(dlHtmlPm);
                var schedule_tbody=$("#schedule_tabel").find(".schedule_tbody");
                if(schedule_tbody.length==pmNum+amNum){
                    var ngRow="<dl class='schedule_null clearfix'><dt>晚间休息</dt></dl>";
                    $("#schedule_tabel").append(ngRow);
                }
            }
            else if(i==pmNum+amNum+ngNum){
                var dlHtmlNg='';
                for(i=pmNum+amNum;i<pmNum+amNum+ngNum;i++){
                    dlHtmlNg += "<dl class='schedule_tbody clearfix' id='row"+i+"'>";
                    dlHtmlNg +="<dt id='section"+i+"'>"+arrHtml[i]+"<input type='hidden' class='subRowId' value='99'>"+"<input id='dateVal"+i+"' type='text' value='08:00-09:00' readonly>"+"</dt>";
                    for(var j=0; j<7;j++){
                        dlHtmlNg+="<dd class='ui-droppable'></dd>";
                    }
                    dlHtmlNg +="</dl>";
                }
                $("#schedule_tabel").append(dlHtmlNg);
            }
        }
        if(read==0){
            var dlRead='';
            dlRead += "<dl class='schedule_tbody clearfix' id='row20'>" ;
            dlRead += "<dt id='section20'>早读<input type='hidden' class='subRowId' value='99'>"+"<input id='dateVal20' type='text' value='08:00-09:00' readonly>"+"</dt>";
            for(var u=0;u<7;u++){
                dlRead+="<dd class='ui-droppable'></dd>";
            }
            dlRead +="</dl>";
            $(".schedule_thead").after(dlRead);

        }
});
