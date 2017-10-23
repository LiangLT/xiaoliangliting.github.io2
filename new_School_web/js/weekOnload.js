$(function(){
    var arrNum=["第一节：","第二节：","第三节：","第四节：","第五节：","第六节：","第七节：",
        "第八节：","第九节：","第十节：","第十一节：","第十二节："];

    var date=
        '<div class="managementList">'+
        '<span>上课时间：</span>'+
        '<input type="text"  value=""   onclick="testDate(this)"   placeholder="请选择上课时间" readonly><i></i>'+
        '</div>'+
        '<div class="managementList">'+
        '<span>下课时间：</span>'+
        '<input type="text"  value=""   onclick="testDate(this)"  placeholder="请选择下课时间" readonly><i></i>'+
        '</div>';
    //上午节数
        var amHidden=$("#amHidden").val(),//上午节次
            amVal=$("#amNum").val(amHidden);
        var i;
        if(amVal.val()==1){

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

        }
        else if(amVal.val()==2){
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
        }
        else if(amVal.val()==3){
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
        }
        else if(amVal.val()==4){

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

        }
        else if(amVal.val()==5){
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
        }
        else{
            $("#rowManagement").find("div").remove();
        }


        //下午节数

        var rowManagement=$("#rowManagement .manRow");//上午节数字段
        var pmHidden=$("#pmHidden").val(),//下午节数
            pmNum=$("#pmNum").val(pmHidden);
        var m;

        if( rowManagement.length<2){
            $("#pmManagement").find("div").remove();
            if(pmNum.val()==1){
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
            }
            else if(pmNum.val()==2){
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
            }
            else if(pmNum.val()==3){
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
            }
        }
        else if( rowManagement.length<3){
            $("#pmManagement").find("div").remove();
            if(pmNum.val()==1){
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
            }
            else if(pmNum.val()==2){
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
            }
            else if(pmNum.val()==3){
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
            }
        }
        else if(rowManagement.length<4){
            $("#pmManagement").find("div").remove();
            if(pmNum.val()==1){
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
            }
            else if(pmNum.val()==2){
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
            }
            else if(pmNum.val()==3){
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
            }
            return false
        }
        else if(rowManagement.length<5){
            $("#pmManagement").find("div").remove();
            if(pmNum.val()==1){
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
            }
            else if(pmNum.val()==2){
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
            }
            else if(pmNum.val()==3){
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
            }
            return false
        }
        else if(rowManagement.length<6){
            $("#pmManagement").find("div").remove();
            if(pmNum.val()==1){
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
            }
            else if(pmNum.val()==2){
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
            }
            else if(pmNum.val()==3){
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
            }
        }
        else{
            $("#pmManagement").find("div").remove();
        }


});