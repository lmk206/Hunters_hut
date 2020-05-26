window.addEventListener("DOMContentLoaded",function(){
    //start
    
    var leftCon = document.querySelector('.left_con');
    var rightCon = document.querySelector('.right_con');
    var foot = document.querySelector('footer');
    var rImg = document.querySelectorAll('.right_con figure img');
    var burger = document.querySelector('header .burger');
    var nav = document.querySelector('header nav');
    var linkP = document.querySelector('.controler .link_page');

    window.addEventListener("load",function(){
        setTimeout(function(){
            objActive();
        },600)
    });
    
    burger.addEventListener('click',function(){
        nav.classList.toggle('block');
        burger.classList.toggle('show');
        setTimeout(function(){
            showD();
        },100)
        function showD(){
            if(!nav.classList.contains('show')){
                nav.classList.add('show');
            }else{
                nav.classList.remove('show');
            }
        }
    });

    linkP.addEventListener('click',function(){
        location.href="list.html";
    });
    // function ------------------------------------------------------------
    function objActive(){
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
        burger.classList.add('active');
    }
    //end
})