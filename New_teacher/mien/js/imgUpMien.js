
//上传图片
var delParent;
var defaults = {
    fileType: ["jpg","png","bmp","jpeg"],   // 上传文件的类型
    fileSize: 1024 * 1024 * 1                  // 上传文件的大小 10M
};

/*点击上传图片的文本框*/
$(document).on("change",".file",function(){
    var idFile=$(this).attr("id");//给。file添加一个id
    var file=document.getElementById(idFile);//把刚定义的id赋值给file
    var imgContainer=$(this).parents(".pic_up").find(".pic_lf");//存放图片的父亲元素
    var fileList=file.files; //上传获取的图片文件
    var input=$(this).parent();//文本框的父亲元素，img_btn
    var imgArr=[];//存储数组

    //遍历得到的图片文件，这里开始
    var numUp=imgContainer.find("li").length;//获取上传照片的数量，即几个li
    var totalNum=numUp+fileList.length;//总的数量
    //用来判断上传时的照片数；
    if(fileList.length>1 || totalNum>1){
        alert("上传图片最多1个，请重新选择！");
    }
    else if (numUp<1){
        fileList=validateUp(fileList);//调用方法，fileList上传的文化
        for(var i=0; i<fileList.length;i++){
            var imgUrl=window.URL.createObjectURL(fileList[i]);//创建一个对象链接
            imgArr.push(imgUrl);//把对象传给数组
            var $picLi=$("<li></li>");//添加li标签
            imgContainer.find("ul").append($picLi);
            var $img=$("<img>");
            $img.attr("src",imgArr[i]);//上传图片
            $img.attr("id","changeImg");//添加一个id,在修改页面需要用到
            $img.appendTo($picLi);
        }
    }
    var attrOpt=$("<p class='imgList'><img class='onClickDel' src='images/del.png'></p>");
    imgContainer.find("ul li").append(attrOpt);
    $(".img_btn").hide();
    $(this).val("");//this是input
});
//删除新增的荣誉
$(document).on("click",".imgList",function(){
    $(this).parents(".pic_lf ul li").remove();
    $(".img_btn").show();
});

function validateUp(files){//files代表上传的文件
    var arrFiles = [];//替换的文件数组
    for(var i = 0, file; file = files[i]; i++){
        //获取文件上传的后缀名
        var newStr = file.name.split("").reverse().join("");
        if(newStr.split(".")[0] != null){
            var type = newStr.split(".")[0].split("").reverse().join("");
            console.log(type+"===type===");
            if(jQuery.inArray(type, defaults.fileType) > -1){
                // 类型符合，可以上传
                if (file.size >= defaults.fileSize) {
                    alert('您这个"'+ file.name +'"文件大小过大');
                } else {
                    // 在这里需要判断当前所有文件中
                    arrFiles.push(file);
                }
            }else{
                alert('您这个"'+ file.name +'"上传类型不符合');
            }
        }else{
            alert('您这个"'+ file.name +'"没有类型, 无法识别');
        }
    }
    return arrFiles;
}