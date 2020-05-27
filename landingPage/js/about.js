window.addEventListener('DOMContentLoaded',function(){
    //start

    var burger = document.querySelector('header .burger');
    var nav = document.querySelector('header nav');
    var leftCon = document.querySelector('.left_con');
    var rightCon = document.querySelector('.right_con');
    var foot = document.querySelector('footer');
    var sub_menu = document.querySelector('.left_con .sub_menu');
    var intro = document.querySelector('.intro');
    var skills = document.querySelector('.skills');
    var vision = document.querySelector('.vision');
    var goLink = null;
    var num = 0;

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
        sub_menu.classList.add('active');
        sub_menu.classList.add('show');
        intro.classList.add('active');
        intro.classList.add('show');
    
    }

    sessionStorage.clear(); 
    
    function aboutShow(){
        
        switch(sessionStorage.name){
            case "intro" : 
                num = 0;
                setTimeout(intro1,1000);
                function intro1(){ 
                    sub_menu.classList.add('active');
                    sub_menu.classList.add('show');
                    intro.classList.add('active');
                    intro.classList.add('show');
                }
                break;
            case "skills" : 
                num = 1;
                setTimeout(skills1,1000);
                function skills1(){
                    sub_menu.classList.add('active');
                    sub_menu.classList.add('show');
                    skills.classList.add('active');
                    skills.classList.add('show');
                }
                break;

            case "vision" : 
                num = 2;
                setTimeout(vision1,1000);
                function vision1(){
                    sub_menu.classList.add('active');
                    sub_menu.classList.add('show'); 
                    vision.classList.add('active');
                    vision.classList.add('show');
                }
                break;
        }
        console.log(num)
    }
    
    goLink = document.querySelectorAll('.sub_menu figcaption p');
    for(let i=0; i<goLink.length;i++){
        goLink[i].addEventListener('click',function(){
            sessionStorage.name = this.textContent;
            conView();
        })
    }

    function conView(){
        sub_menu.classList.remove('active');
        sub_menu.classList.remove('show');
        intro.classList.remove('active');
        intro.classList.remove('show');
        skills.classList.remove('active');
        skills.classList.remove('show');
        vision.classList.remove('active');
        vision.classList.remove('show');
        setTimeout(aboutShow,500);
    }
        
   
    //end
})