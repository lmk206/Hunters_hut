

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
    //         twoDepth[i].style.display = "block"
    //     });
    //     li[i].addEventListener('mouseleave',function(e){
    //         twoDepth[i].style.display = "none"
    //     });
    // }
    $(function(){
        $('nav li').on('mouseover',function(){
            $('nav div').slideDown(1000);
        })
        $('nav li').on('mouseleave',function(){
            $('nav div').slideUp(1000);
        });
    })    
    //end

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
        // function loop(){
        //     interval = setInterval(function(){
        //         $('.visual img').eq(idx).removeClass('active');
        //             idx++;
        //             if(idx == 4){
        //                 idx = 0
        //             }
        //         $('.visual img').eq(idx).show().addClass("active");
        //     },4000);
        // };  
        // loop();
        //end
            console.log(loop)
        // start
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

    $('.visual').on('mouseover',function(){
        $('.visual figcaption').addClass('visible')
    })
    // end
});