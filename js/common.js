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
    //�������
    //1���Զ��ֲ� (��ʱ�� ����)
    //2��СԲ������ͼƬ����(����ͼƬ��ʾ��������Ȼ�����õ�ǰ��ʽnow)
    //3��ͼƬ�ܻ���(touch)
    //4������������һ������ ������ȥ (����)
    //5����������һ������ ��������һ��(����)

    //0����ȡ�¼�Դ�����Ԫ��
    var box = document.querySelector(".layout_banner");
    var imgUl = box.children[0];
    var dotUl = box.children[1];
    var imgLis = imgUl.children;
    var dotLis = dotUl.children;
    var width = box.offsetWidth;
    var num = 1;
    //1���Զ��ֲ� (��ʱ�� ����)
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
