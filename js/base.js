var chinasofti={};
//�����ռ�
chinasofti.addTransition = function(obj){
    obj.style.transition = "all 0.5s";
    obj.style.webkitTransition = "all 0.5s";
}
chinasofti.setTransform=function (obj,distance,direction){
    if(direction){
        obj.style.transform = "translate"+direction+"("+distance+"px)";
        obj.style.webkitTransform = "translate"+direction+"("+distance+"px)";
    }else{
        obj.style.transform = "translateX("+distance+"px)";
        obj.style.webkitTransform = "translateX("+distance+"px)";
    }
}
chinasofti.removeTransition=function (obj){
    obj.style.transition = "";
    obj.style.webkitTransition = "";
}
chinasofti.addTransitionEnd=function(obj,fn){
    obj.addEventListener("transitionEnd",fn);
    obj.addEventListener("webkitTransitionEnd",fn);
}
chinasofti.tap = function(obj,fn){
    var start = 0;//��¼��ָ�ŵ���Ļ�ϵ�ʱ��
    var distance = 0 ;
    var end = 0 ;//��¼��ָ�뿪��Ļ�ϵ�ʱ��
    var isMove = false;//��¼�Ƿ񻬶�
    obj.addEventListener("touchstart",function(){
        start = (new Date()).getTime();
    });
    obj.addEventListener("touchmove",function(){
        isMove = true;
    });
    obj.addEventListener("touchend",function(){
        end = (new Date()).getTime();
        distance = end - start;
        if(distance<150&&!isMove){
            fn();
            console.log("������tip�¼�")
        }

        start = 0;
        move = 0 ;
        end = 0 ;
        isMove = false;
    })
}
