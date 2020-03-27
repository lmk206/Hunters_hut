$(function(){
//start

    // 헤더 사라지고 나타나는 이벤트 입니다.
    $(window).on('scroll',function(){
        var firstPnt = 0;
        var lastPnt = 0;
        var head = $('header');
        firstPnt = $(this).scrollTop();
        
        // if(firstPnt > lastPnt){
        //     head.addClass('operate');
        // }else{
        //     head.removeClass('operate');
        // } 
        if(firstPnt > lastPnt){
            head.fadeOut(1200)
        }else{
            head.fadeIn(1200);
        }
        lastPnt = firstPnt;
    });
    // figcaption 나오는 이벤트입니다.
    $('.visual figure').on('mouseover',function(){
        $('.visual figure figcaption').addClass('show')
    })
    // 버거메뉴 클릭  및 호버 이벤트 입니다. 
    // $('.burger').on('click',function(){
    //     $('.popup').toggleClass('show')
    //     $('.burger').css({
    //         zIndex:20
    //     })
    //     $('.popup').css({
    //         transform:scale(1.5)
    //     },1000,function(){
    //         $('.popup').css({
    //             transform:scale(1)
    //         },1000)
    //     });
    // })
    $('.burger').on('click',function(){
        //start
        var vImg = $('.visual figure');
        $('.popup').toggleClass('show');
        $('header').css({
            zIndex:50
        })
        $(vImg).toggleClass('scale');

            // //스케일 줄이는 callback 함수입니다. //css는 callback을 먹지 않아요 ㅠㅠㅠ
            // if($('.popup').css({transform:'scale(1.5)'})){
            //     $('.popup').css({
            //         transform:'scale(1)'
            //     },1000,function)
            // }
        //end
    });
    // 마우스 스크롤 시 이미지들이 올라오는 스크립트 입니다.
    var sTop = 0;
    $(window).on('scroll',function(){
        var winH = $(window).height();
        sTop = $(this).scrollTop();

        $('.con1').each(function(e){
            var con1 = $('.con1').eq(e).offset().top
            if((con1 - winH) < sTop){
                // console.log(con1)
                // console.log(winH)
                // console.log(sTop)
                $('.con1').eq(e).css({
                    opacity:1,
                    marginTop:'0px'
                })
            }
        });
        $('.con2').each(function(e){
            var con2 = $('.con2').eq(e).offset().top
            if((con2 - winH) < sTop){
                $('.con2').eq(e).css({
                    opacity:1,
                    marginTop:'0px'
                })
            }
        });
    });

    $(window).on('scroll',function(){
        var winH = $(window).height();
        sTop = $(this).scrollTop();
            var lastP = $('.lastPage .pageWrap').offset().top
            if((lastP - winH) < sTop){
                $('.lastPage .pageWrap').css({
                    opacity:1,
                    marginTop:'0px'
                })
            }
    });

    $(window).on('scroll',function(){
        var winH = $(window).height();
        sTop = $(this).scrollTop();
            var title = $('.title h1').offset().top
            if((title - winH) < sTop){
                $('.title h1').css({
                    opacity:1,
                    marginTop:'0px'
                })
            }
    });

    
    //마우스 버튼 오버시에 발생하는 이벤트 입니다.
    $('.button a').on('mouseover',function(e){
        var idx = $(this).index();
        e.preventDefault();
            $(this).eq(0).addClass('active')
            $(this).eq(1).addClass('active')

    })
    $('.button a').on('mouseleave',function(e){
        var idx = $(this).index();
        e.preventDefault();
            $(this).eq(0).removeClass('active')
            $(this).eq(1).removeClass('active')

    })    
//end
});