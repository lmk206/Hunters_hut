$(function(){

    var mqP = window.matchMedia("screen and (min-width: 1025px)");
    // 데스크탑 모드 제어 입니다.
    if(mqP.matches){
        navControl();
        mobileSlide();
    }

    // 768 사이즈까지 faction video재생 스크립트 입니다.
    var mpj = window.matchMedia("screen and (min-width: 767px")
        if(mpj.matches){
            
        }
    var mpm = window.matchMedia("screen and (min-width: 339px")
        if(mpm.matches){
            navControl();
        }

    // 햄버거 제어입니다
    var burger = $('.burger');

    burger.each(function(index){
        var $this = $(this);
        
        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('.mobileMenu').toggleClass('show');
            
        })
    });

    // 네비 떨구는 스크립트 입니다.
    function navControl(){
        $('nav ul').on('mouseover',function(){
            $('nav li div').slideDown()
        })
        $('nav ul').on('mouseleave',function(){
            $('nav li div').stop().slideUp()
        });
    }   

    function mobileSlide(){
        $('.mobileMenu li').on('mouseenter',function(){
            $(this).find('div').stop().slideDown()
        })
        $('.mobileMenu li').on('mouseleave',function(){
            $(this).find('div').stop().slideUp()
        })
    }
    // 탭메뉴 입니다.
    window.addEventListener('DOMContentLoaded',function(){
        var ex2 = document.querySelector("#ex2"),
        tab = ex2.querySelector('.tab'),
        tabCon = ex2.querySelectorAll('.tab-con'),
        tabLi = ex2.querySelectorAll('.tab li');
        var j = 0;
        
        for(let i = 0;i<tabCon.length;i++){
            
            tabLi[i].addEventListener('click',function(){
                tabLi[j].classList.remove("active");
                tabCon[j].classList.remove("active");
                this.classList.add("active");
                tabCon[i].classList.add("active");
                j=i;
            });
        }
    });

    // footer sns icon change 이벤트 입니다.
            
    var snsImg = $('.sns a').find('img').attr('src');
                
    $('.sns a').on('mouseenter',function(){
        snsImg = $(this).find('img').attr('src');
        var snsChange = snsImg.replace('_a','_b');
        
        $(this).find('img').attr('src',snsChange)
        
    })
        $('.sns a').on('mouseleave',function(){
            snsImg = $(this).find('img').attr('src');
            var snsChange2 = snsImg.replace('_b','_a');
            $(this).find('img').attr('src',snsChange2)
        })
})