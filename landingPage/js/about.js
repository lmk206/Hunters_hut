window.addEventListener('DOMContentLoaded',function(){
    //start

    var burger = document.querySelector('header .burger');
    var nav = document.querySelector('header nav');
    var fig = document.querySelector('.left_con .intro');
    var leftCon = document.querySelector('.left_con');
    var rightCon = document.querySelector('.right_con');
    var foot = document.querySelector('footer');
    var goLink = document.querySelectorAll('.intro figcaption p');
    var intro = document.querySelector('.intro');
    var skills = document.querySelector('.skills');
    var vision = document.querySelector('.vision');
    console.log(fig);
    window.addEventListener('load',function(){
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

    goLink[1].addEventListener('click',function(){
        localStorage.name = this.textContent();
        console.log(this);
    })
    function objActive(){
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
        burger.classList.add('active');
        fig.classList.add('active');
    }
    //end
})