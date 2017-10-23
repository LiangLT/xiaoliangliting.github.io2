//节数
$(function(){
    var arrNum=["第一节：","第二节：","第三节：","第四节：","第五节：","第六节：","第七节：",
        "第八节：","第九节：","第十节：","第十一节：","第十二节："];

    var date=
        '<div class="managementList">'+
        '<span>上课时间：</span>'+
        '<input type="text"  value=""  onclick="testDate(this)"  placeholder="请选择上课时间" readonly><i></i>'+
        '</div>'+
        '<div class="managementList">'+
        '<span>下课时间：</span>'+
        '<input type="text"  value=""  onclick="testDate(this)" placeholder="请选择下课时间" readonly><i></i>'+
        '</div>';
    //上午节数
    $("#amNum").change(function(){
        var  amNums=$(this).find("option:selected").val();//上午节数的值
        var i;
        if(amNums==1){
            $("#rowManagement").find("div").remove();
            for(i=0;i<1;i++){
                var listOne=
                    '<div class="manRow clearfix">'+
                    '<div class="managementName">' +
                    '<span class="span">'+arrNum[i]+'</span>'+
                    '</div>'+
                    '</div>';
                $("#rowManagement").append(listOne);
            }
            $("#rowManagement .manRow").append(date);
            $("#rowManagement input").each(function(i){
                $(this).attr("id","amTime"+i);
            });

            $(function() {
                $.ajax({
                    url: "SelectData.action",
                    type: "POST",
                    dataTpye: "json",
                    contentType: "application/json;charset=utf-8", //必须有
                    success: function (result) {
                        //上午
                        $("#amTime0").val(result[0].sectionOneSatrtTime);//上课时间，第一节上课
                        $("#amTime1").val(result[0].sectionOneEndTime);//上课时间，第一节下课
                    }
                });
            });
        }
        else if(amNums==2){
            $("#rowManagement").find("div").remove();
            for(i=0;i<2;i++){
                var listTwo=
                    '<div class="manRow clearfix">'+
                    '<div class="managementName">' +
                    '<span class="span">'+arrNum[i]+'</span>'+
                    '</div>'+
                    '</div>';
                $("#rowManagement").append(listTwo);

            }
            $("#rowManagement .manRow").append(date);
            $("#rowManagement input").each(function(i){
                $(this).attr("id","amTime"+i);
            });
            $(function() {
                $.ajax({
                    url: "SelectData.action",
                    type: "POST",
                    dataTpye: "json",
                    contentType: "application/json;charset=utf-8", //必须有
                    success: function (result) {
                        //上午
                        $("#amTime0").val(result[0].sectionOneSatrtTime);//上课时间，第一节上课
                        $("#amTime1").val(result[0].sectionOneEndTime);//上课时间，第一节下课
                        $("#amTime2").val(result[0].sectionTwoStartTime);//上课时间，第二节上课
                        $("#amTime3").val(result[0].sectionTwoEndTime);//上课时间，第二节下课
                    }
                });
            });
        }
        else if(amNums==3){
            $("#rowManagement").find("div").remove();
            for(i=0;i<3;i++){
                var listThree=
                    '<div class="manRow clearfix">'+
                    '<div class="managementName">' +
                    '<span class="span">'+arrNum[i]+'</span>'+
                    '</div>'+
                    '</div>';
                $("#rowManagement").append(listThree);

            }
            $("#rowManagement .manRow").append(date);
            $("#rowManagement input").each(function(i){
                $(this).attr("id","amTime"+i);
            });
            $(function() {
                $.ajax({
                    url: "SelectData.action",
                    type: "POST",
                    dataTpye: "json",
                    contentType: "application/json;charset=utf-8", //必须有
                    success: function (result) {
                        //上午
                        $("#amTime0").val(result[0].sectionOneSatrtTime);//上课时间，第一节上课
                        $("#amTime1").val(result[0].sectionOneEndTime);//上课时间，第一节下课
                        $("#amTime2").val(result[0].sectionTwoStartTime);//上课时间，第二节上课
                        $("#amTime3").val(result[0].sectionTwoEndTime);//上课时间，第二节下课
                        $("#amTime4").val(result[0].sectionThreeStartTime);//上课时间，第三节上课
                        $("#amTime5").val(result[0].sectionThreeEndTime);//上课时间，第三节下课
                    }
                });
            });
        }
        else if(amNums==4){

            $("#rowManagement").find("div").remove();
            for(i=0;i<4;i++){
                var listFour=
                    '<div class="manRow clearfix">'+
                    '<div class="managementName">' +
                    '<span class="span">'+arrNum[i]+'</span>'+
                    '</div>'+
                    '</div>';
                $("#rowManagement").append(listFour);

            }
            $("#rowManagement .manRow").append(date);
            $("#rowManagement input").each(function(i){
                $(this).attr("id","amTime"+i);
            });

            $(function() {
                $.ajax({
                    url: "SelectData.action",
                    type: "POST",
                    dataTpye: "json",
                    contentType: "application/json;charset=utf-8", //必须有
                    success: function (result) {
                        //上午
                        $("#amTime0").val(result[0].sectionOneSatrtTime);//上课时间，第一节上课
                        $("#amTime1").val(result[0].sectionOneEndTime);//上课时间，第一节下课
                        $("#amTime2").val(result[0].sectionTwoStartTime);//上课时间，第二节上课
                        $("#amTime3").val(result[0].sectionTwoEndTime);//上课时间，第二节下课
                        $("#amTime4").val(result[0].sectionThreeStartTime);//上课时间，第三节上课
                        $("#amTime5").val(result[0].sectionThreeEndTime);//上课时间，第三节下课
                        $("#amTime6").val(result[0].sectionFourStartTime);//上课时间，第四节上课
                        $("#amTime7").val(result[0].sectionFourEndTime);//上课时间，第四节下课

                    }
                });
            });

        }
        else if(amNums==5){
            $("#rowManagement").find("div").remove();
            for(i=0;i<5;i++){
                var listFive=
                    '<div class="manRow clearfix">'+
                    '<div class="managementName">' +
                    '<span class="span">'+arrNum[i]+'</span>'+
                    '</div>'+
                    '</div>';
                $("#rowManagement").append(listFive);

            }
            $("#rowManagement .manRow").append(date);
            $("#rowManagement input").each(function(i){
                $(this).attr("id","amTime"+i);
            });
            $(function() {
                $.ajax({
                    url: "SelectData.action",
                    type: "POST",
                    dataTpye: "json",
                    contentType: "application/json;charset=utf-8", //必须有
                    success: function (result) {
                        //上午
                        $("#amTime0").val(result[0].sectionOneSatrtTime);//上课时间，第一节上课
                        $("#amTime1").val(result[0].sectionOneEndTime);//上课时间，第一节下课
                        $("#amTime2").val(result[0].sectionTwoStartTime);//上课时间，第二节上课
                        $("#amTime3").val(result[0].sectionTwoEndTime);//上课时间，第二节下课
                        $("#amTime4").val(result[0].sectionThreeStartTime);//上课时间，第三节上课
                        $("#amTime5").val(result[0].sectionThreeEndTime);//上课时间，第三节下课
                        $("#amTime6").val(result[0].sectionFourStartTime);//上课时间，第四节上课
                        $("#amTime7").val(result[0].sectionFourEndTime);//上课时间，第四节下课
                        $("#amTime8").val(result[0].sectionFiveSatrtTime);//上课时间，第五节上课
                        $("#amTime9").val(result[0].sectionFiveEndTime);//上课时间，第五节下课
                    }
                });
            });
        }
        else{
            $("#rowManagement").find("div").remove();
        }
    });


    //下午节数

    $("#pmNum").change(function(){
        var rowManagement=$("#rowManagement .manRow");//上午节数字段
        var  pmNums=$(this).find("option:selected").val();//上午节数的值
        var m;

        if( rowManagement.length<2){
            $("#pmManagement").find("div").remove();
            if(pmNums==1){
                for( var m=1; m<2;m++){
                    var pmOne=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmOne);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                        }
                    });
                });
            }
            else if(pmNums==2){
                for( var m=1; m<3;m++){
                    var pmTwo=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmTwo);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                        }
                    });
                });
            }
            else if(pmNums==3){
                for( var m=1; m<4;m++){
                    var pmThree=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmThree);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                            $("#pmTime4").val(result[0].sectionEightSatrtTime);//下午第三节上课时间
                            $("#pmTime5").val(result[0].sectionEightEndTime);//下午第三节下课时间
                        }
                    });
                });
            }
        }
        else if( rowManagement.length<3){
            $("#pmManagement").find("div").remove();
            if(pmNums==1){
                for( var m=2; m<3;m++){
                    var pmFour=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmFour);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间

                        }
                    });
                });
            }
            else if(pmNums==2){
                for( var m=2; m<4;m++){
                    var pmFive=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmFive);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                        }
                    });
                });
            }
            else if(pmNums==3){
                for( var m=2; m<5;m++){
                    var pmSix=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmSix);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                            $("#pmTime4").val(result[0].sectionEightSatrtTime);//下午第三节上课时间
                            $("#pmTime5").val(result[0].sectionEightEndTime);//下午第三节下课时间
                        }
                    });
                });
            }
        }
        else if(rowManagement.length<4){
            $("#pmManagement").find("div").remove();
            if(pmNums==1){
                for( var m=3; m<4;m++){
                    var pmSeven=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmSeven);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                        }
                    });
                });
            }
            else if(pmNums==2){
                for( var m=3; m<5;m++){
                    var pmEight=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmEight);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间

                        }
                    });
                });
            }
            else if(pmNums==3){
                for( var m=3; m<6;m++){
                    var pmNine=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmNine);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                            $("#pmTime4").val(result[0].sectionEightSatrtTime);//下午第三节上课时间
                            $("#pmTime5").val(result[0].sectionEightEndTime);//下午第三节下课时间
                        }
                    });
                });
            }
        }
        else if(rowManagement.length<5){
            $("#pmManagement").find("div").remove();
            if(pmNums==1){
                for( var m=4; m<5;m++){
                    var pmTen=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmTen);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                        }
                    });
                });
            }
            else if(pmNums==2){
                for( var m=4; m<6;m++){
                    var pmEleven=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmEleven);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间

                        }
                    });
                });
            }
            else if(pmNums==3){
                for( var m=4; m<7;m++){
                    var pmTwelve=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmTwelve);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                            $("#pmTime4").val(result[0].sectionEightSatrtTime);//下午第三节上课时间
                            $("#pmTime5").val(result[0].sectionEightEndTime);//下午第三节下课时间
                        }
                    });
                });
            }
        }
        else if(rowManagement.length<6){
            $("#pmManagement").find("div").remove();
            if(pmNums==1){
                for( var m=5; m<6;m++){
                    var pmThirteen=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmThirteen);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                        }
                    });
                });
            }
            else if(pmNums==2){
                for( var m=5; m<7;m++){
                    var pmFourteen=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmFourteen);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                        }
                    });
                });
            }
            else if(pmNums==3){
                for( var m=5; m<8;m++){
                    var pmFifteen=
                        '<div class="manRow clearfix">'+
                        '<div class="managementName">' +
                        '<span class="span">'+arrNum[m]+'</span>'+
                        '</div>'+
                        '</div>';
                    $("#pmManagement").append(pmFifteen);
                }
                $("#pmManagement .manRow").append(date);
                $("#pmManagement input").each(function(i){
                    $(this).attr("id","pmTime"+i);
                });
                $(function() {
                    $.ajax({
                        url: "SelectData.action",
                        type: "POST",
                        dataTpye: "json",
                        contentType: "application/json;charset=utf-8", //必须有
                        success: function (result) {
                            //下午节数
                            $("#pmTime0").val(result[0].sectionSixSatrtTime);//下午第一节上课时间
                            $("#pmTime1").val(result[0].sectionSixEndTime);//下午第一节下课时间
                            $("#pmTime2").val(result[0].sectionSevenStartTime);//下午第二节上课时间
                            $("#pmTime3").val(result[0].sectionSevenEndTime);//下午第二节下课时间
                            $("#pmTime4").val(result[0].sectionEightSatrtTime);//下午第三节上课时间
                            $("#pmTime5").val(result[0].sectionEightEndTime);//下午第三节下课时间
                        }
                    });
                });
            }
        }
        else{
            $("#pmManagement").find("div").remove();
        }
    });


    //晚上节数
    $("#nightNum").change(function(){
        var  pmNumSelect=$("#pmNum").find("option:selected").val();//上午节数的值
        var  amNumSelect=$("#amNum").find("option:selected").val();//上午节数的值
        var  nightNums=$(this).find("option:selected").val();//上午节数的值
        var n;
        if(pmNumSelect==1){

            $("#nightManagement").find("div").remove();
            if(amNumSelect==1){
                if(nightNums==1){
                    for(n=2;n<3;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=2;n<4;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=2;n<5;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=2;n<6;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
           else if(amNumSelect==2){
                if(nightNums==1){
                    for(n=3;n<4;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=3;n<5;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=3;n<6;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=3;n<7;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
           else if(amNumSelect==3){
                if(nightNums==1){
                    for(n=4;n<5;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课

                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=4;n<6;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=4;n<7;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=4;n<8;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
           else if(amNumSelect==4){
                if(nightNums==1){
                    for(n=5;n<6;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=5;n<7;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=5;n<8;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=5;n<9;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
           else if(amNumSelect==5){
                if(nightNums==1){
                    for(n=6;n<7;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课

                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=6;n<8;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=6;n<9;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=6;n<10;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
        }
        else if(pmNumSelect==2){
            $("#nightManagement").find("div").remove();
            if(amNumSelect==1){
                if(nightNums==1){
                    for(n=3;n<4;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=3;n<5;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=3;n<6;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=3;n<7;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==2){
                if(nightNums==1){
                    for(n=4;n<5;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课

                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=4;n<6;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=4;n<7;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=4;n<8;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==3){
                if(nightNums==1){
                    for(n=5;n<6;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=5;n<7;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=5;n<8;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=5;n<9;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==4){
                if(nightNums==1){
                    for(n=6;n<7;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课

                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=6;n<8;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=6;n<9;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=6;n<10;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==5){
                if(nightNums==1){
                    for(n=7;n<8;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课

                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=7;n<9;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=7;n<10;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=7;n<11;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
        }
        else if(pmNumSelect==3){
            $("#nightManagement").find("div").remove();
            if(amNumSelect==1){
                if(nightNums==1){
                    for(n=4;n<5;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=4;n<6;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=4;n<7;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=4;n<8;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==2){
                if(nightNums==1){
                    for(n=5;n<6;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=5;n<7;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=5;n<8;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=5;n<9;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==3){
                if(nightNums==1){
                    for(n=6;n<7;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课

                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=6;n<8;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=6;n<9;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=6;n<10;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==4){
                if(nightNums==1){
                    for(n=7;n<8;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课

                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=7;n<9;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=7;n<10;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课

                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=7;n<11;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
            else if(amNumSelect==5){
                if(nightNums==1){
                    for(n=8;n<9;n++){
                        var nightOne=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightOne);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                            }
                        });
                    });
                }
                else if(nightNums==2){

                    for(n=8;n<10;n++){
                        var nightTwo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightTwo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课

                            }
                        });
                    });
                }
                else if(nightNums==3){

                    for(n=8;n<11;n++){
                        var nightThree=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightThree);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                            }
                        });
                    });
                }
                else if(nightNums==4){
                    for(n=8;n<12;n++){
                        var nightFour=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFour);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                    $(function() {
                        $.ajax({
                            url: "SelectData.action",
                            type: "POST",
                            dataTpye: "json",
                            contentType: "application/json;charset=utf-8", //必须有
                            success: function (result) {
                                //下午节数
                                $("#ngTime0").val(result[0].sectionNineStartTime);//第一节上课
                                $("#ngTime1").val(result[0].sectionNineEndTime);//第一节下课
                                $("#ngTime2").val(result[0].sectionTenStartTime);//第二节上课
                                $("#ngTime3").val(result[0].sectionTenEndTime);//第二节下课
                                $("#ngTime4").val(result[0].sectionElevenStartTime);//第三节上课
                                $("#ngTime5").val(result[0].sectionElevenEndTime);//第三节下课
                                $("#ngTime6").val(result[0].sectionTwelveStartTime);//第四节上课
                                $("#ngTime7").val(result[0].sectionTwelveEndTime);//第四节下课
                            }
                        });
                    });
                }
            }
        }
        else{
            $("#nightManagement").find("div").remove();
        }
    });
});