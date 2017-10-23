function isBlank(_val){
    if(_val=="" || _val==undefined || _val==null){
        return true;
    }
    return false;
}

$(function(){
     $("#phone").blur(function(){
         var phone=$(this).val();
         if(!isBlank(phone)){
             $(".txt").html("");
         }
     });
    $("#password").blur(function(){
        var password=$(this).val();
        if(!isBlank(password)){
            $(".txt1").html("");
        }
    });

    $("#btnOnclick").click(function(){
        var phone=$("#phone").val();//手机号码
        var password=$("#password").val();//密码
        if(isBlank(phone) || isBlank(password)){
            if(isBlank(phone)){
                $(".txt").html("*手机号码不为空！");
            }
            if(isBlank(password)){
                $(".txt1").html("*密码不为空！");
            }
        }
        else if(phone==sessionStorage.getItem("userName") && password==sessionStorage.getItem("userPaw")){
            sessionStorage.setItem("phone",$("#phone").val());//setItem（key,value）;
            window.location.href="./userCenter.html";
        }
        else{
            $(".txt1").html("账号或密码不对！");
        }
    });
    //点击事件
    //单个账号登录
    //方法2
    /***
     *
    $("#btnOnclick").click(function(){
        var phone=$("#phone").val();//手机号码
        var password=$("#password").val();//密码
        if(isBlank(phone) || isBlank(password)){
            if(isBlank(phone)){
                $(".txt").html("*手机号码不为空！");
            }
            if(isBlank(password)){
                $(".txt1").html("*密码不为空！");
            }
        }
        else if(phone=="梁丽婷" && password=="123456"){

            //location.href="222.html?txt="+$("#txt").val();//发送txt里面的内容
           // window.location.href="./userCenter.html?phone="+$("#phone").val();//取值第一种方法
            sessionStorage.setItem("phone",$("#phone").val());//setItem（key,value）;
            window.location.href="./userCenter.html";
        }
        else{
            $(".txt1").html("账号或密码不对！");
        }
    });
     **/
    //多个账号登录时
    //var UserName=[
    //    ["admin","123456"], ["13531409665","123456"]
    //];
    //$("#btnOnclick").click(function(){
    //    var phone=$("#phone").val();//手机号码
    //    var password=$("#password").val();//密码
    //    for(var i=0;i<UserName.length;i++){
    //        for(var j=0;j<i+1;j++){
    //            if( phone==UserName[i][j] && password==UserName[i][j+1]){
    //                setInterval(function(){
    //                    window.location="../index_function.html";
    //                },100);
    //            }
    //        }
    //    }
    //    if(isBlank(phone) || isBlank(password)){
    //        if(isBlank(phone)){
    //            $(".txt").html("*手机号码不为空！");
    //        }
    //        if(isBlank(password)){
    //            $(".txt1").html("*密码不为空！");
    //        }
    //    }
    //
    //});
});

