window.addEventListener("DOMContentLoaded",function(){
    //start
    
    var leftCon = document.querySelector('.left_con');
    var rightCon = document.querySelector('.right_con');
    var foot = document.querySelector('footer');
    var rImg = document.querySelectorAll('.right_con figure img');
    var burger = document.querySelector('header .burger');

    window.addEventListener("load",function(){
        setTimeout(function(){
            objActive();
        },600)
    });
    function objActive(){
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
        burger.classList.add('active');
    }
    
    //end
})