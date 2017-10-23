/**
 * Created by Administrator on 2017/6/19 0019.
 */
/**判断是否为空**/
function isBlank(_value){
    if(_value==null || _value=="" || _value==undefined){
        return true;
    }
    return false;
}

/**检查是否为手机号码形式**/
function isPhone(str){
    var mobile = /^1(3|4|5|7|8)\d{9}$/;
    return mobile.test(str);
}

/***是否为数字、字母**/
function isNumbe(_num){
    var num=/^[a-zA-Z0-9]{6,12}$/;
    return num.test(_num);
}

$(function(){

    /**************AdminUser.弹窗的验证********************/
    $("#user_NickName").blur(function(){
        var user_NickName=$("#user_NickName").val();
        if(isBlank(user_NickName)){
            $(".name_err").html("*用户昵称不能为空！");
            return false;
        }
        else{
            $(".name_err").html("");
        }
    });

    $("#user_account").blur(function() {
        var user_account=$("#user_account").val();
        if (isBlank(user_account)) {
            $(".name_err_01").html("*用户账号不能为空！");
        }
        else if(!isNumbe(user_account)){
            $(".name_err_01").html("*账号由6-12数字或字母组成！");
        }
        else{
            $(".name_err_01").html("");
        }
    });

    /**************AdminUser.弹窗的验证********************/

    /*******************密码验证***********************/
    $("#user_password").blur(function() {
        var user_password=$("#user_password").val();
        if (isBlank(user_password)) {
            $(".name_err5").html("*密码不能为空！");
        }
        else if(user_password.length<6){
            $(".name_err5").html("*密码不能小于6个字符");
        }
        else{
            $(".name_err5").html("");
        }
    });
    /*******************密码验证***********************/

    /**************手机号码弹窗的验证********************/
    $("#user_phone").blur(function(){
        var user_phone=$("#user_phone").val();
        if(isBlank(user_phone)){
            $(".p_txt").html("*手机号码不能为空！");
        }
        else if(!isPhone(user_phone)){
            $(".p_txt").html("*手机号码有误，请重填！");
            return false;
        }
        else{
            $(".p_txt").html("");
        }
        return;
    });


    /**************AdAgency.弹窗的验证********************/
    $("#name").blur(function(){
        var agName=$("#name").val();
        if(isBlank(agName)){
            $(".name_err").html("*请输入经销商名称！");
            return false;
        }
        else{
            $(".name_err").html("");
        }
    });

    $("#account").blur(function() {
        var agNum=$("#account").val();
        if (isBlank(agNum)) {
            $(".name_err1").html("*请输入经销商账号！");
            return false;
        }
        else if(!isNumbe(agNum)){
            $(".name_err1").html("*账号由6-12数字或字母组成！");
        }
        else{
            $(".name_err1").html("");
        }
    });

    /*******************密码验证***********************/
    $("#password").blur(function() {
        var password=$("#password").val();
        if (isBlank(password)) {
            $(".name_err5").html("*密码不能为空！");
        }
        else if(password.length<6){
            $(".name_err5").html("*密码不能小于6个字符");
        }
        else{
            $(".name_err5").html("");
        }
    });

    /******手机号码弹窗的验证****/
    $("#phone").blur(function(){
        var phone=$("#phone").val();
        if(isBlank(phone)){
            $(".p_txt").html("*手机号码不能为空！");
        }
        else if(!isPhone(phone)){
            $(".p_txt").html("*手机号码有误，请重填！");
            return false;
        }
        else{
            $(".p_txt").html("");
        }
        return;
    });

    $("#adg_add").click(function(){
        var agName=$("#name").val();
        var agNum=$("#account").val();
        var password=$("#password").val();
        var phone=$("#phone").val();
        if(isBlank(agName) || isBlank(agNum) || isBlank(password) ||isBlank(phone) || !isPhone(phone) ){
            $("#name").each(function(){
                if(isBlank(agName)){
                    $(".name_err").html("*请输入经销商名称！");
                    return false;
                }
                else{
                    $(".name_err").html("");
                }
            });

            $("#account").each(function() {
                if (isBlank(agNum)) {
                    $(".name_err1").html("*请输入经销商账号！");
                    return false;
                }
                else if(!isNumbe(agNum)){
                    $(".name_err1").html("*账号由6-12数字或字母组成！");
                }
                else{
                    $(".name_err1").html("");
                }
            });
            /****密码验证*****/
            $("#password").each(function() {
                if (isBlank(password)) {
                    $(".name_err5").html("*密码不能为空！");
                }
                else{
                    $(".name_err5").html("");
                }
            });

            /******手机号码弹窗的验证****/
            $("#phone").each(function(){
                if(isBlank(phone)){
                    $(".p_txt").html("*手机号码不能为空！");
                }
                else if(!isPhone(phone)){
                    $(".p_txt").html("*手机号码有误，请重填！");
                }
                else{
                    $(".p_txt").html("");
                }
            });
        }
        else{
            //后台数据
            alert("777");
        }

    });

    /**************AdAgency.弹窗的验证********************/

    /**************AdSchool.弹窗的验证********************/
    $("#SchoolPhone").blur(function(){
        var SchoolPhone=$("#SchoolPhone").val();
        if(isBlank(SchoolPhone)){
            $(".p_txt").html("*手机号码不能为空！");
        }
        else if(!isPhone(SchoolPhone)){
            $(".p_txt").html("*手机号码有误，请重填！");
            return false;
        }
        else{
            $(".p_txt").html("");
        }
        return;
    });
    $("#SchoolName").blur(function(){
        var SchoolName=$("#SchoolName").val();
        if(isBlank(SchoolName)){
            $(".name_err").html("*学校名称不能为空！");
            return false;
        }
        else{
            $(".name_err").html("");
        }
    });


    /**************AdSchool.弹窗的验证********************/

    //点击确认，学校
    $(".true_btn010").click(function() {
        //学校
        var SchoolPhone = $("#SchoolPhone").val();
        var SchoolName = $("#SchoolName").val();
        if (isBlank(SchoolPhone) || isBlank(SchoolName)) {
            $("#SchoolPhone").each(function () {
                if (isBlank(SchoolPhone)) {
                    $(".p_txt").html("*手机号码不能为空！");
                }
                else {
                    $(".p_txt").html("");
                }
                return;
            });
            $("#SchoolName").each(function () {
                if (isBlank(SchoolName)) {
                    $(".name_err").html("*学校名称不能为空！");
                    return false;
                }
                else {
                    $(".name_err").html("");
                }
            });
        }
        else {
            alert("学校添加！")
        }
    });
    $(".true_btn").click(function(){
        //用户添加
        var user_NickName=$("#user_NickName").val();
        var user_account=$("#user_account").val();
        var user_phone=$("#user_phone").val();
        var user_password=$("#user_password").val();
        //var text=$(".submit_fm").find("input").val();
        if(isBlank(user_NickName) || isBlank(user_account) || isBlank(user_phone) || isBlank(user_password)){

            $("#user_NickName").each(function(){
                if(isBlank(user_NickName)){
                    $(".name_err").html("*用户昵称不能为空！");
                    return false;
                }
                else{
                    $(".name_err").html("");
                }
            });

            $("#user_account").each(function() {
                if (isBlank(user_account)) {
                    $(".name_err_01").html("*用户账号不能为空！");
                }
                else if(!isNumbe(user_account)){
                    $(".name_err_01").html("*账号由6-12数字或字母组成！");
                }
                else{
                    $(".name_err_01").html("");
                }
            });

            $("#user_phone").each(function(){
                if(isBlank(user_phone)){
                    $(".p_txt").html("*手机号码不能为空！");
                }
                else{
                    $(".p_txt").html("");
                }
            });

            $("#user_password").each(function() {
                if (isBlank(user_password)) {
                    $(".name_err5").html("*密码不能为空！");
                }
                else{
                    $(".name_err5").html("");
                }
            });
        }
        else{
            alert("确认添加！");
        }
    });
});




