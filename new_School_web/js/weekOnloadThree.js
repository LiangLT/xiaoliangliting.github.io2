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
        //晚上节数
        var  pmNumSelect=$("#pmNum").find("option:selected").val();//下午节数的值
        var  amNumSelect=$("#amNum").find("option:selected").val();//上午节数的值
        var rowManagement=$("#rowManagement .manRow");//上午节数字段
        var nightHidden=$("#nightHidden").val(),//晚上节数
            nightNum=$("#nightNum").val(nightHidden);
        var n;
        if(amNumSelect==1){
            if(pmNumSelect==1){
                if(nightNum.val()==1){
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
                }
               else if(nightNum.val()==2){
                    for(n=2;n<4;n++){
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
                }
              else if(nightNum.val()==3){
                    for(n=2;n<5;n++){
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

                }
               else if(nightNum.val()==4){
                    for(n=2;n<6;n++){
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
                }
            }
            else if(pmNumSelect==2){
                if(nightNum.val()==1){
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
                }
                else if(nightNum.val()==2){
                    for(n=3;n<5;n++){
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
                }
                else if(nightNum.val()==3){
                    for(n=3;n<6;n++){
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
                }
                else if(nightNum.val()==4){
                    for(n=3;n<7;n++){
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
                }
            }
            else if(pmNumSelect==3){
                if(nightNum.val()==1){
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
                }
                else if(nightNum.val()==2){
                    for(n=4;n<6;n++){
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
                }
                else if(nightNum.val()==3){
                    for(n=4;n<7;n++){
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
                }
                else if(nightNum.val()==4){
                    for(n=4;n<8;n++){
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
                }
            }
        }
        else if(amNumSelect==2){
            if(pmNumSelect==1){
                if(nightNum.val()==1){
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
                }
                else if(nightNum.val()==2){
                    for(n=3;n<5;n++){
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
                }
                else if(nightNum.val()==3){
                    for(n=3;n<6;n++){
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
                }
                else if(nightNum.val()==4){
                    for(n=3;n<7;n++){
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
                }
            }
            else if(pmNumSelect==2){
                if(nightNum.val()==1){
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
                }
                else if(nightNum.val()==2){
                    for(n=4;n<6;n++){
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
                }
                else if(nightNum.val()==3){
                    for(n=4;n<7;n++){
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
                }
                else if(nightNum.val()==4){
                    for(n=4;n<8;n++){
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
                }
            }
            else if(pmNumSelect==3){
                if(nightNum.val()==1){
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
                }
                else if(nightNum.val()==2){
                    for(n=5;n<7;n++){
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
                }
                else if(nightNum.val()==3){
                    for(n=5;n<8;n++){
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
                }
                else if(nightNum.val()==4){
                    for(n=5;n<9;n++){
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
                }
            }
        }
        else if(amNumSelect==3){
            if(pmNumSelect==1){
                if(nightNum.val()==1){
                    for(n=4;n<5;n++){
                        var nightF=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightF);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=4;n<6;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=4;n<7;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=4;n<8;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
            else if(pmNumSelect==2){
                if(nightNum.val()==1){
                    for(n=5;n<6;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=5;n<7;n++){
                        var nightFou=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFou);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=5;n<8;n++){
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
                }
                else if(nightNum.val()==4){
                    for(n=5;n<9;n++){
                        var nightFos=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFos);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
            else if(pmNumSelect==3){
                if(nightNum.val()==1){
                    for(n=6;n<7;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=6;n<8;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=6;n<9;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=6;n<10;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
        }
        else if(amNumSelect==4){
            if(pmNumSelect==1){
                if(nightNum.val()==1){
                    for(n=5;n<6;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=5;n<7;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=5;n<8;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=5;n<9;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
            else if(pmNumSelect==2){
                if(nightNum.val()==1){
                    for(n=6;n<7;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=6;n<8;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=6;n<9;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=6;n<10;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
            else if(pmNumSelect==3){
                if(nightNum.val()==1){
                    for(n=7;n<8;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=7;n<9;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=7;n<10;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=7;n<11;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
        }
        else if(amNumSelect==5){
            if(pmNumSelect==1){
                if(nightNum.val()==1){
                    for(n=6;n<7;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=6;n<8;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=6;n<9;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=6;n<10;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
            else if(pmNumSelect==2){
                if(nightNum.val()==1){
                    for(n=7;n<8;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=7;n<9;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=7;n<10;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=7;n<11;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
            else if(pmNumSelect==3){
                if(nightNum.val()==1){
                    for(n=8;n<9;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==2){
                    for(n=8;n<10;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==3){
                    for(n=8;n<11;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
                else if(nightNum.val()==4){
                    for(n=8;n<12;n++){
                        var nightFo=
                            '<div class="manRow clearfix">'+
                            '<div class="managementName">' +
                            '<span class="span">'+arrNum[n]+'</span>'+
                            '</div>'+
                            '</div>';
                        $("#nightManagement").append(nightFo);
                    }
                    $("#nightManagement .manRow").append(date);
                    $("#nightManagement input").each(function(i){
                        $(this).attr("id","ngTime"+i);
                    });
                }
            }
        }
        else{
            $("#nightManagement").find("div").remove();
        }

});