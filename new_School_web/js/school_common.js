//更新序列号
function changeIndex(){
    var i=1;
    $(".class_tabel tbody tr").each(function(){
        $(this).find("td:first").text(i++);
    });
}
//判断是否为空方法
function isBlank(_value){
    if(_value==null || _value=="" || _value==undefined){
        return true;
    }
    return false;
}
//字符控制
function checkLen(obj)
{
    var maxChars = 200;//最多字符数
    if (obj.value.length > maxChars){
        obj.value = obj.value.substring(0,maxChars);
    }
}

/**检查是否为手机号码形式**/
function isInputPhone(str){
    var mobile = /^1(3|4|5|7|8)\d{9}$/;
    return mobile.test(str);
}