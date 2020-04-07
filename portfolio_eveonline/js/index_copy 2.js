window.addEventListener('DOMContentLoaded',function(){
//     //start

// window scroll event 입니다.
    // $(function(){
    //     var move = 0, num = 0, bln = true;
    //     $('html').scrollTop();
    //     $('section div').on('mousewheel',function(e){
    //         var wheel = e.originalEvent.wheelDelta;
    //         if(wheel < 0){
    //             if(num == 5){ return }
    //             move = $(this).next().offset().top;    
    //         }else{
    //             if(num == 0){ return }
    //             if(num > 0){
    //                 move = $(this).prev().offset().top;
    //             }
    //         }
    //         $('html').stop().animate({
    //             scrollTop : move
    //         },1000,function(){
    //             if(wheel < 0){
    //                 num++;
    //             }else{
    //                 num--;
    //             }
    //         })
    //     })
    // })
//      네비 떨구는 스크립트 입니다.
    $(function(){
        $('nav li').on('mouseover',function(){
            // $(this).find('div').addClass('show');
            $('nav li').find("div").stop().slideDown()
        })
        $('nav li').on('mouseleave',function(){
            // $(this).find('div').removeClass('show');
            $('nav li').find("div").stop().slideUp()
        });
    })    

    // visual img fadeIn/out입니다.
        $(function(){
            //start
            $('.visual figure img').not(":first").hide();
        
            var idx = 0;
            var interval = 0;
            function loop(){
                interval = setInterval(function(){
                    $('.visual figure img').eq(idx).fadeOut(1000);
                        idx++;
                        if(idx == 4){
                            idx = 0
                        }
                    $('.visual figure img').eq(idx).fadeIn(1000);
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
            $('.visual .visualText').addClass('visible')
        });

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

    });
    // faction 마우스 이벤트 입니다.
        $(function(){
            $('.faction_wrap div').on('mouseover',function(){
                k($(this));
                playIntro();
                $('.factionIntro').addClass('hover');
                    $('.factionIntro')[0].play();
            });

            $('.faction_wrap div').on('mouseleave',function(){
                j($(this));
                playIntro();
                $('.factionIntro').removeClass('hover');
            });
            
            function playIntro(){
                if($('.factionIntro').hasClass('hover')){
                    $('.factionIntro')[0].play()
                }else{
                    $('.factionIntro').get(0).currentTime = 59;
                    $('.factionIntro').get(1).currentTime = 6;
                    $('.factionIntro').get(2).currentTime = 6;              
                    $('.factionIntro').get(3).currentTime = 6;
                }
            }
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
    
    // guide 등장 이벤트 입니다.
        $(window).on('scroll',function(){
            var sTop = $(this).scrollTop();
            var winH = $(window).height();
            var guid = $('.guide').offset().top
            if((guid - winH) < sTop){
                $('.guide').addClass('show')
            }else{
                $('.guide').removeClass('show')
            } 
        });

    //slideshow 이벤트 입니다.
            $.ajax({
                url : '../json/index_copy.json',
                type : 'GET', //POST
                dataType : 'json',
                success:function(index_copy){
                    //success start
                    var name,mass,cargo,mText,cText,estValue,velocity,estText,vText,hitPoint,spec,wText,iText,sImg;
                    var idx = 0;
                    var jdx = 0;
                    $(window).on('scroll',function(){
                        var sTop = $(this).scrollTop();
                        var winH = $(window).height();
                        var shoC = $('.showCase').offset().top
                        if((shoC - winH) < sTop){
                            $('.showCase').addClass('show');
                            $('aside').addClass('show');
                    
                        }else{
                            $('.showCase').removeClass('show');
                            $('aside').removeClass('show');
                        } 
                    });   
                  
                    $('.slideShow .slideImg img').on("click",function(){
                        idx = $(this).index();
                        jdx = $('.shipInfo .shipDetail')[idx];
                        console.log(idx)
                        console.log(jdx);
                        $('.shipInfo').css({
                            top: -idx * 100 +"%"
                        })
                    });

                   
                    $.each(index_copy.portfolio,function(){
                        console.log(this)
                        // var $this = index_copy.portfolio[idx]
                        name = this.Name;
                        mass = this.Mass;
                        cargo = this.Cargo;    
                        mText = this.mText;    
                        cText = this.cText;    
                        estValue = this.ESTvalue;    
                        velocity = this.velocity;    
                        estText = this.ESTText;    
                        vText = this.vText;    
                        hitPoint = this.HitPoint;    
                        spec = this.spec;    
                        wText = this.wText;    
                        iText = this.iText;    
                        sImg = this.sImg; 
                    
                        slideShowCase();
                        
                    });
                    
                    function slideShowCase(){
                        showTable = "<div class='shipDetail'><table>";
                        showTable += "<tbody>";
                        showTable += "<th colspan='2'>"+name+"</th>"
                        showTable += "<tr>";
                        showTable += "<td>"+mass+"</td>";
                        showTable += "<td>"+cargo+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+mText+"</td>";
                        showTable += "<td>"+cText+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+estValue+"</td>";
                        showTable += "<td>"+velocity+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+estText+"</td>";
                        showTable += "<td>"+vText+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+hitPoint+"</td>";
                        showTable += "<td>"+spec+"</td>";
                        showTable += "</tr>";
                        showTable += "<tr>";
                        showTable += "<td>"+wText+"</td>";
                        showTable += "<td>"+iText+"</td>";
                        showTable += "</tr>";
                        showTable += "</tody>";
                        showTable += "</table>";
                        showTable += "<figure><img src="+sImg+"></figure></div>";

                        $('.shipInfo').append(showTable)  
                    }
                    
                
                // success end
                }
            //ajax end
            });

        // });
        
    // end
});