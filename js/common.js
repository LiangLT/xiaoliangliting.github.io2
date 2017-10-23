window.onload=function(){
    search();
    //slider();
}

function search(){
    var search = document.querySelector(".header_name");
    var banner =document.querySelector(".layout_banner");
    var height = banner.offsetHeight;
    console.log(height);
    var opacity = 0.1;
    window.onscroll=function(){
        if(document.body.scrollTop<height){
            opacity =document.body.scrollTop/height*1;
        }
        else{
            opacity=1;
        }
        search.style.background="rgba(78, 214, 171, "+opacity+")";
    }
}



function slider(){
    //需求分析
    //1、自动轮播 (定时器 过渡)
    //2、小圆点随着图片滚动(监听图片显示的索引，然后设置当前样式now)
    //3、图片能滑动(touch)
    //4、滑动不超过一定距离 吸附回去 (过渡)
    //5、滑动超过一定距离 滚动到下一张(过渡)

    //0、获取事件源和相关元素
    var box = document.querySelector(".layout_banner");
    var imgUl = box.children[0];
    var dotUl = box.children[1];
    var imgLis = imgUl.children;
    var dotLis = dotUl.children;
    var width = box.offsetWidth;
    var num = 1;
    //1、自动轮播 (定时器 过渡)
    clearInterval(box.timer);
    box.timer = setInterval(function(){
        num++;
        chinasofti.addTransition(imgUl);
        chinasofti.setTransform(imgUl,-num*width);

    }, 5000)

    chinasofti.addTransitionEnd(imgUl, function(){
        if(num>imgLis.length-2){
            num = 1;
            chinasofti.removeTransition(imgUl);
            chinasofti.setTransform(imgUl,-num*width);
        }else if(num==0){
            num = imgLis.length-2;
            chinasofti.removeTransition(imgUl);
            chinasofti.setTransform(imgUl,-num*width);
        }
        light();
    })
    imgUl.addEventListener("touchend", function(e){
        endX = moveX;
        if(isMove){
            if(Math.abs(distance)>width/3){
                if(distance>0){
                    num--;
                }else{
                    num++;
                }
                chinasofti.addTransition(imgUl);
                chinasofti.setTransform(imgUl,-num*width);

            }else{
                chinasofti.addTransition(imgUl);
                chinasofti.setTransform(imgUl,-num*width);
            }
        }
        clearInterval(box.timer);
        box.timer = setInterval(function(){
            num++;
            chinasofti.addTransition(imgUl);
            chinasofti.setTransform(imgUl,-num*width);

        }, 5000)
        startX = 0 ;
        moveX = 0 ;
        endX = 0;
        isMove = false;
        distance = 0;
    });

}
