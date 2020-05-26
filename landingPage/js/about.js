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

    function objActive(){
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
        burger.classList.add('active');
        fig.classList.add('active');
    }

    for(var i=0; i<goLink.length;i++){
        goLink[i].addEventListener('click',function(){
            console.log(this);
            sessionStorage.name = this.textContent;
        })
    }

    // function setCookie('aboutIdx','idx','1'){

    // }
    $.ajax({
        url : 'json/about.json',
        type : 'GET',
        dataType : 'json',
        success:function(about){
            var hImg, fText, pText1, pText2;
            switch(sessionStorage.name){
                case "intro" : 
                    num = 0; 
                    
                    break;
                case "skills" : num = 1; break;
                case "vision" : num = 2; break;
            }
            console.log(sessionStorage.name)
            console.log(about);
            console.log(about.about[0]);
        }
    })
    //end
})