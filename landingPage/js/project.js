window.addEventListener("DOMContentLoaded",function(){
    //start
    
    var leftCon = document.querySelector('.left_con');
    var leftConText = document.querySelector('.left_text');
    var rightCon = document.querySelector('.right_con');
    var rConMock = document.querySelectorAll('.right_con div img');
    var foot = document.querySelector('footer');
    var burger = document.querySelector('header .burger');
    var nav = document.querySelector('header nav');
    var linkP = document.querySelector('.controler .link_page');
    var control = document.querySelector('.controler');
    var controlBtn = document.querySelectorAll('.controler figure img');
    var pop = document.querySelector('.pop_up');
    var close = document.querySelector('.pop_up .exit');
    var navA = document.querySelectorAll('nav ul li a');
    // 윈도우 로드시 호출 함수 ------------------------------------------------------
    window.addEventListener("load",function(){
        setTimeout(function(){
            objActive();
        },0)
    });

    // 버거메뉴 변환 -----------------------------------------------------------------
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
    // 버튼 클릭시 팝업메뉴 호출 -----------------------------------------
    linkP.addEventListener('click',function(){
        pop.classList.add('active');
        pop.classList.add('show');
    });
    close.addEventListener('click',function(){
        pop.classList.remove('active');
        pop.classList.remove('show');
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
    })
    // nav 클릭시 페이지 이동
    for(var n = 0; n<navA.length; n++){
        navA[n].addEventListener('click',function(e){
            nextPage();
            console.log(this.href);
            var lo = this.href;
            console.log(e.target.href)
            setTimeout(function(){
                // e.target.href = lo
            },500);
        })
    }
    function index(){
        setTimeout(function(){
            location.href = "index.html";
        })
    }
    function project(){
        setTimeout(function(){
            location.href = "project.html";
        })
    }
    function about(){
        setTimeout(function(){
            location.href = "about.html";
        })
    }
    function contact(){
        setTimeout(function(){
            location.href = "contact.html";
        })
    }
    // 함수 모음 ------------------------------------------------------------
    // project 메인 화면 제어 -----------------------------------------------
    function objActive(){
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
        burger.classList.add('active');
    }

    function nextPage(){
        nav.classList.remove('block');
        nav.classList.remove('show');
        burger.classList.remove('show');
        setTimeout(function(){
        leftCon.classList.remove('active');
        rightCon.classList.remove('active');
        foot.classList.remove('active');
        },10)
    }
    // json 호출 -------------------------------------------------------------
    // project 목업 이미지 호출 -----------------------------------------------
    var data = new XMLHttpRequest();
        data.open('GET','json/project.json',true);
        data.send(null);

    var p = document.querySelector('.left_text p');
    var strong = document.querySelector('.left_text strong');
    var span = document.querySelector('.left_text span');
    var li = document.querySelectorAll('.left_text ul li');
    var cP = document.querySelector('.cPage');
    var tP = document.querySelector('.tPage');

    data.addEventListener('load',function(){
        var response = JSON.parse(data.responseText);
        var aa = response.workPage.length;
        var wIdx=0;
        innerWork();
        for(var k = 0; k<rConMock.length; k++){
            rConMock[k].src = response.workPage[0][k]
        }
    
    // 버튼 클릭시 목업 이미지 변환 -----------------------------------------------
        controlBtn[1].addEventListener('click',function(e){
            wIdx++;
            if(wIdx > aa-1){
                wIdx = aa;
            }else{
                number();
                change();
                innerWork();
            }

        })

        controlBtn[0].addEventListener('click',function(){
            wIdx--;
            if(wIdx < 0){
                wIdx = 0;
            }else{
                number();
                change();
                innerWork();
            }
        })
    // data 텍스트 로드 --------------------------------------------------------
        function number(){
            tP.textContent = '0'+aa;
            cP.textContent = '0'+(wIdx+1);
        }
        function work(){
            for(var j=0; j < aa; j++){
                rConMock[j].src = response.workPage[wIdx][j];
                rConMock[j].src = response.workPage[wIdx][j];
                rConMock[j].src = response.workPage[wIdx][j];
            }
        }
        console.log(wIdx);
        console.log(aa)
    // project rightcontent 제어 ---------------------------------------------
        function change(){
            for(var r = 0; r < aa; r++){
                
                rConMock[r].classList.add('active');
                
                setTimeout(function(){
                    work();
                },200);
                setTimeout(function(){
                    rConMock[r].classList.remove('active');
                },300)
                console.log(rConMock[r]);
            }
        }
        
        function innerWork(){
            for(var t = 0; t<li.length; t++){
                strong.textContent = response.workText[wIdx][0];
                p.textContent = response.workText[wIdx][1];
                span.textContent = response.workText[wIdx][2];
                li[t].textContent = response.workText[wIdx][t+3];
            }
        }
    });
    //end
})
