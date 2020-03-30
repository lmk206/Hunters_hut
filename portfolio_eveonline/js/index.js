window.addEventListener('DOMContentLoaded',function(){
//     //start
//      네비 떨구는 스크립트 입니다.
    // var header = document.querySelector('.header_wrap');
    // var nav = document.querySelector('nav');
    // var li = document.querySelectorAll('nav ul li');
    // var twoDepth = document.querySelectorAll('nav ul div');
    // var i = 0;

    // for(let i = 0; i<li.length;i++){
    //     li[i].addEventListener('mouseover',function(e){
    //         twoDepth[i].classList.add('show')
    //     });
    //     li[i].addEventListener('mouseleave',function(e){
    //         twoDepth[i].classList.remove('show')
    //     });
    // }
    $(function(){
        $('nav li').on('mouseover',function(){
            $(this).find('div').addClass('show');
        })
        $('nav li').on('mouseleave',function(){
            $(this).find('div').removeClass('show');
        });
    })    

    // visual img fadeIn/out입니다.
        $(function(){
            //start
            // $('.visual figure > img').not(":first").hide();
        
            var idx = 0;
            var interval = 0;
            function loop(){
                interval = setInterval(function(){
                    $('.visual figure > img').eq(idx).fadeOut(1000);
                        idx++;
                        if(idx == 4){
                            idx = 0
                        }
                    $('.visual figure > img').eq(idx).fadeIn(1000);
                },6000);
            }; 
            loop();

    //indigator 작동 스크립트 입니다.
            var indi = document.querySelector('.indigator');
            var indiLi = document.querySelectorAll('.indigator li');
            var visualImg = document.querySelectorAll('.visual img');
            var j=0;
            for(let i = 0; i<indiLi.length;i++){
                indiLi[i].addEventListener('mouseover',function(e){
                    indiLi[i].classList.add('active');
                    // console.log(indiLi[i])
                    clearInterval(interval)
                });
                indiLi[i].addEventListener('mouseleave',function(e){
                    indiLi[i].classList.remove('active');
                    // console.log(indiLi[i])
                    loop();
                });
        }
        
    // indigator 클릭 시 이미지 전환 스크립트 입니다.
        for(let i = 0; i<indiLi.length;i++){
            // visualImg[0].classList.add('active');

            indiLi[i].addEventListener('click',function(e){

                console.log(visualImg[i])
                for(let j = 0; j<indiLi.length;j++){
                visualImg[j].classList.remove('active')
                }
                visualImg[i].classList.add('active');
                j=i
            });
        }
    });

    // visual 문구 등장 스크립트입니다.
        $('.visual').on('mouseover',function(){
            $('.visual figcaption').addClass('visible')
        })

    // faction 마우스 이벤트 입니다.
        $(function(){
            $('.faction_wrap div').on('mouseover',function(){
                k($(this))
            });
            $('.faction_wrap div').on('mouseleave',function(){
                j($(this))
            });

            function k(t){
                t.find('.bgf').addClass('active');
                t.find('.front').addClass('active');
                t.find('figcaption').addClass('active');
                t.find('a').addClass('active');
                t.find('.s_bgf').addClass('active');
                // t.find('.s_bgf').slideDown();
            };
            function j(t){
                t.find('.bgf').removeClass('active');
                t.find('.front').removeClass('active');
                t.find('figcaption').removeClass('active');
                t.find('a').removeClass('active');
                t.find('.s_bgf').removeClass('active');
                // t.find('.s_bgf').slideUp();
            };
        })
    // faction 컨텐츠 등장 이벤트 입니다.
        $(window).on('scroll',function(){
            var sTop = $(this).scrollTop();
            var winH = $(window).height();
            var facW = $('.faction_wrap').offset().top
            if((facW - winH) < sTop){
                $('.faction_wrap').addClass('show')
                $('.faction_title').addClass('show')
            }else{
                $('.faction_wrap').removeClass('show')
                $('.faction_title').removeClass('show')
            }

        })
    // end
});