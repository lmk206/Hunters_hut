window.addEventListener('DOMContentLoaded',function(){

    $(function(){
        //start 
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
    
    // ------------------ 햄버거 제어 -----------------------
        var burger = $('.burger');
    
        burger.each(function(index){
            var $this = $(this);
            
            $this.on('click', function(e){
                e.preventDefault();
                $(this).toggleClass('active');
                $('.mobileMenu').toggleClass('show');
            })
        });
    
    // -------------------- nav Action ----------------------
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
        
        //저장소 값 가져오기 
        $.ajax({
            url : '../json/news.json',
            type : 'GET', //POST
            dataType : 'json',
            success:function(news){
                // newsIndex[localStorage.page]
                var h1,titleP,titleImg,pText1,pText2,ul1,li1,li2,li3,li4,li5
                ,li6,ul2,span,lia1,lia2,lia3,lia4,lia5,lia6,pText3,pText4,pText5
                ,pText6,pText7;
                var idx = 0;
                case3(localStorage.page);
                console.log(news.newsIndex)
                // $.each(news.newsIndex,function(){
                //     console.log(news.newsIndex)
                //     h1 = this.h1;
                //     titleP = this.titleP;
                //     titleImg = this.titleImg;
                //     pText1 = this.pText1;
                //     pText2 = this.pText2;
                //     pText3 = this.pText3;
                //     pText4 = this.pText4;
                //     pText5 = this.pText5;
                //     pText6 = this.pText6;
                //     pText7 = this.pText7;
                //     ul1 = this.ul1;
                //     ul2 = this.ul2;
                //     li1 = this.li1;
                //     li2 = this.li2;
                //     li3 = this.li3;
                //     li4 = this.li4;
                //     li5 = this.li5;
                //     li6 = this.li6;
                //     span = this.span;
                //     lia1 = this.lia1;
                //     lia2 = this.lia2;
                //     lia3 = this.lia3;
                //     lia4 = this.lia4;
                //     lia5 = this.lia5;
                //     lia6 = this.lia6;
                //     console.log(this)
                // });

                function case3(){
                    var ndx = news.newsIndex[localStorage.page]
                    console.log(ndx)
                    h1 = ndx.h1;
                    titleP = ndx.titleP;
                    titleImg = ndx.titleImg;
                    pText1 = ndx.pText1;
                    pText2 = ndx.pText2;
                    pText3 = ndx.pText3;
                    pText4 = ndx.pText4;
                    pText5 = ndx.pText5;
                    pText6 = ndx.pText6;
                    pText7 = ndx.pText7;
                    ul1 = ndx.ul1;
                    ul2 = ndx.ul2;
                    li1 = ndx.li1;
                    li2 = ndx.li2;
                    li3 = ndx.li3;
                    li4 = ndx.li4;
                    li5 = ndx.li5;
                    li6 = ndx.li6;
                    span = ndx.span;
                    lia1 = ndx.lia1;
                    lia2 = ndx.lia2;
                    lia3 = ndx.lia3;
                    lia4 = ndx.lia4;
                    lia5 = ndx.lia5;
                    lia6 = ndx.lia6;
                    case3Text = "<div class='subject'>";
                    case3Text += "<h1>"+h1+"</h1>";
                    case3Text += "<p>"+titleP+"</p>";
                    case3Text += "<img src="+titleImg+">";
                    case3Text += "</div>";
                    case3Text += "<div class='conText'>";
                    case3Text += "<p>"+pText1+"</p>";
                    case3Text += "<p>"+pText2+"</p>";
                    case3Text += "<ul>"+ul1;
                    case3Text += "<li>"+li1+"</li>";
                    case3Text += "<li>"+li2+"</li>";
                    case3Text += "<li>"+li3+"</li>";
                    case3Text += "<li>"+li4+"</li>";
                    case3Text += "<li>"+li5+"</li>";
                    case3Text += "<li>"+li6+"</li>";
                    case3Text += "</ul>";
                    case3Text += "<ul>"+ul2;
                    case3Text += "<span>"+span+"</span>";
                    case3Text += "<li>"+lia1+"</li>";
                    case3Text += "<li>"+lia2+"</li>";
                    case3Text += "<li>"+lia3+"</li>";
                    case3Text += "<li>"+lia4+"</li>";
                    case3Text += "<li>"+lia5+"</li>";
                    case3Text += "<li>"+lia6+"</li>";
                    case3Text += "</ul>";
                    case3Text += "<p>"+pText3+"</p>";
                    case3Text += "</div>"
                    $('.sectionWrap').append(case3Text);
                }
            }
        })
        // footer sns icon change 이벤트 입니다.
      
        var snsImg = $('.sns a').find('img').attr('src');
                    
            $('.sns a').on('mouseenter',function(){
                snsImg = $(this).find('img').attr('src');
                var snsChange = snsImg.replace('_a','_b');
                $(this).find('img').attr('src',snsChange)
            });
    
            $('.sns a').on('mouseleave',function(){
                snsImg = $(this).find('img').attr('src');
                var snsChange2 = snsImg.replace('_b','_a');
                $(this).find('img').attr('src',snsChange2)
            });
        //end
    });
    })