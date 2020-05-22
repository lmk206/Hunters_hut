window.addEventListener("DOMContentLoaded",function(){
    //start
    var img = document.querySelectorAll('.visual img');
    var fig = document.querySelector('.visual figcaption');
    var left = document.querySelector('.visual .left');
    var right = document.querySelector('.visual .right');
    var main2 = document.querySelector('.main2');
    var conView = document.querySelector('.con_view');
    var leftCon = document.querySelector('.left_con');
    var rightCon = document.querySelector('.right_con');
    var copyR = document.querySelector('footer p');
    console.log(img);
    window.addEventListener('load',function(){
        setTimeout(function(){
            divide();
        },5000)
    })
    function divide(){
        fadeInOut();
        setTimeout(function(){
            location.href="project.html"
        },400)
        img[0].classList.add('left');
        img[1].classList.add('right');

    }
    function fadeInOut(){
        fadeIn();
        fadeOut();
        function fadeIn(){
            copyR.style.opacity += 0.1;
            fig.style.opacity += 0.1;
            if(fig.style.opacity > 1.0 && copyR.style.opacity > 1.0){
                fig.style.opacity = 1.0;
                copyR.style.opacity = 1.0;
            }else{
                setTimeout("fadeIn(\""+fig+"\")",600);
                setTimeout("fadeIn(\""+copyR+"\")",600);
            }
        }
        function fadeOut(){
            copyR.style.opacity -= 0.1;
            fig.style.opacity -= 0.1;
            if(fig.style.opacity < 0.0 && copyR.style.opacity < 0.0){
                fig.style.opacity = 0.0;
                copyR.style.opacity = 0.0;
            }else{
                setTimeout("fadeOut(\""+fig+"\")",600);
                setTimeout("fadeOut(\""+copyR+"\")",600);
            }
        }
    }
    //end
})