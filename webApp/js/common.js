//页面跳转传值
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null){
        context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }
}
//判断是否为空
function isBlank(_val){
    if(_val=="" || _val==undefined || _val==null){
        return true;
    }
    return false;
}

//用户名的正则表达式验证：/^[\w\u4e00-\u9fa5]{2,10}/g(含汉字)
//用户名验证：/^\w{2,10}$/(不含汉字，只允许英文字母、数字和下画线，长度为2-10位)
//QQ号验证:/^[1,9][0,9]{4,19}$/（第一位数字不为0，5-19位数字）
//邮箱验证：/^[a-z0-9]+@([a-z0-9]+\.)+[a-z]{2,4}$/i(不区分大小写)
//密码验证：/^\w{6,16}$/(只允许6-16位英文字母、数字和下画线)
//手机号验证：/^1[3,5,7,8]\d{9}$/
//URL验证：/^http:\/\/[a-z\d-]+(\w\/)+)$/i


//判断是否输入的是中文、数字、英文
function isTxt(_txt){
    var txt=/^\w{2,20}$/;
    return txt.test(_txt);
}
//手机号码验证
function isPhone(_phone){
    var phone=/^1(3|4|5|7|8)\d{9}$/;
    return phone.test(_phone);
}
//密码验证
function isPassword(str){
   var password=/^[a-z0-9_-]{6,20}$/;
    return password.test(str);
}
//添加弹窗
    function modalAdd(){
        var htmlAdd=
            '<div class="Modalfixed">'+
            '<div class="modal">'+
            '<div class="modal_top">温馨提示</div>'+
            '<div class="moadl_con">'+
            '<p></p>'+
            '</div>'+
            '<div class="modal_btn">'+
            '<a href="javascript:;"></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        $(htmlAdd).prependTo("#addHtml");
    }
