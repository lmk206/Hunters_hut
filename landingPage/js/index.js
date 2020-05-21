window.addEventListener("DOMContentLoaded",function(){
    //start
    var img = document.querySelectorAll('.visual img');
    var fig = document.querySelector('.visual figcaption');
    var left = document.querySelector('.visual .left');
    var right = document.querySelector('.visual .right');
    console.log(img);
    window.addEventListener('load',function(){
        setTimeout(function(){
            divide();
        },5000);
    })
    function divide(){
        img[0].classList.add('left');
        img[1].classList.add('right');
    }
    //end
})