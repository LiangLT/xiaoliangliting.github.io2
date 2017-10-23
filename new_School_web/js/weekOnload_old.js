//页面加载
$(function(){
    var dateHtm=
        '<div class="managementList">'+
        '<span>上课时间：</span>'+
        '<input type="text" class="classTime time" value="" onclick="testShow(this)"  placeholder="请选择上课时间" readonly><i></i>'+
        '</div>'+
        '<div class="managementList">'+
        '<span>下课时间：</span>'+
        '<input type="text" class="overTime time" value="" onclick="testShow(this)" placeholder="请选择下课时间" readonly><i></i>'+
        '</div>';
    var arrNum=["第一节：","第二节：","第三节：","第四节：","第五节：","第六节：","第七节：",
        "第八节：","第九节：","第十节：","第十一节：","第十二节："];

    var amHidden=$("#amHidden").val(),//上午节次
        amVal=$("#amNum").val(amHidden);
    var i;
    if(amVal.val()==1){
        $("#rowManagement").find("div").remove();
        for(i=0;i<1;i++){
            var amOne=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#rowManagement").append(amOne);
        }
        $("#rowManagement .manRow").append(dateHtm);
        $("#rowManagement input").each(function(i){
            $(this).attr("id","amTime"+i);
        });
    }
    if(amVal.val()==2){
        $("#rowManagement").find("div").remove();
        for(i=0;i<2;i++){
            var amTwo=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#rowManagement").append(amTwo);
        }
        $("#rowManagement .manRow").append(dateHtm);
        $("#rowManagement input").each(function(i){
            $(this).attr("id","amTime"+i);
        });
    }
    if(amVal.val()==3){
        $("#rowManagement").find("div").remove();
        for(i=0;i<3;i++){
            var amThree=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#rowManagement").append(amThree);
        }
        $("#rowManagement .manRow").append(dateHtm);
        $("#rowManagement input").each(function(i){
            $(this).attr("id","amTime"+i);
        });
    }
    if(amVal.val()==4){
        $("#rowManagement").find("div").remove();
        for(i=0;i<4;i++){
            alert("////////////")
            var amFour=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#rowManagement").append(amFour);
        }
        $("#rowManagement .manRow").append(dateHtm);
        $("#rowManagement input").each(function(i){
            alert("*********")
            $(this).attr("id","amTime"+i);
        });
    }
    if(amVal.val()==5){
        $("#rowManagement").find("div").remove();
        for(i=0;i<5;i++){
            var amFive=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#rowManagement").append(amFive);
        }
        $("#rowManagement .manRow").append(dateHtm);
        $("#rowManagement input").each(function(i){
            $(this).attr("id","amTime"+i);
        });
    }


    //下午
    var pmHidden=$("#pmHidden").val(),//下午节数
        pmNum=$("#pmNum").val(pmHidden);
    if(pmNum.val()==1){
        $("#pmManagement").find("div").remove();
        for(i=0;i<1;i++){
            var pmOnes=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#pmManagement").append(pmOnes);
        }
        $("#pmManagement .manRow").append(dateHtm);
        $("#pmManagement input").each(function(i){
            $(this).attr("id","pmTime"+i);
        });
    }
    if(pmNum.val()==2){
        $("#pmManagement").find("div").remove();
        for(i=0;i<2;i++){
            var pmTwos=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#pmManagement").append(pmTwos);
        }
        $("#pmManagement .manRow").append(dateHtm);
        $("#pmManagement input").each(function(i){
            $(this).attr("id","pmTime"+i);
        });
    }
    if(pmNum.val()==3){
        $("#pmManagement").find("div").remove();
        for(i=0;i<3;i++){
            var pmThrees=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#pmManagement").append(pmThrees);
        }
        $("#pmManagement .manRow").append(dateHtm);
        $("#pmManagement input").each(function(i){
            $(this).attr("id","pmTime"+i);
        });
    }

    //晚上
    var nightHidden=$("#nightHidden").val(),//晚上节数
        nightNum=$("#nightNum").val(nightHidden);
    if(nightNum.val()==1){
        $("#nightManagement").find("div").remove();
        for(i=0;i<1;i++){
            var ngOnes=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#nightManagement").append(ngOnes);
        }
        $("#nightManagement .manRow").append(dateHtm);
        $("#nightManagement input").each(function(i){
            $(this).attr("id","ngTime"+i);
        });
    }
    if(nightNum.val()==2){
        $("#nightManagement").find("div").remove();
        for(i=0;i<2;i++){
            var ngTwos=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#nightManagement").append(ngTwos);
        }
        $("#nightManagement .manRow").append(dateHtm);
        $("#nightManagement input").each(function(i){
            $(this).attr("id","ngTime"+i);
        });
    }
    if(nightNum.val()==3){
        $("#nightManagement").find("div").remove();
        for(i=0;i<3;i++){
            var ngThree=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#nightManagement").append(ngThree);
        }
        $("#nightManagement .manRow").append(dateHtm);
        $("#nightManagement input").each(function(i){
            $(this).attr("id","ngTime"+i);
        });
    }
    if(nightNum.val()==4){
        $("#nightManagement").find("div").remove();
        for(i=0;i<4;i++){
            var ngFour=
                '<div class="manRow clearfix">'+
                '<div class="managementName">' +
                '<span class="span">'+arrNum[i]+'</span>'+
                '</div>'+
                '</div>';
            $("#nightManagement").append(ngFour);
        }
        $("#nightManagement .manRow").append(dateHtm);
        $("#nightManagement input").each(function(i){
            $(this).attr("id","ngTime"+i);
        });
    }

    //是否早读
    $("#radioCheck").attr("checked","checked");
    var radioCheck=$("#rdCheck").find("input[name='radio']:checked");
    if(radioCheck.val()==0){
        $("#readList").show();
    }


});