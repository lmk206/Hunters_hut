window.addEventListener("DOMContentLoaded",function(){
    //start
    
    var leftCon = document.querySelector('.left_con');
    var leftConText = document.querySelector('.left_text');
    var rightCon = document.querySelector('.right_con');
    var rConMock = document.querySelectorAll('.right_con figure img');
    var foot = document.querySelector('footer');
    var burger = document.querySelector('header .burger');
    var nav = document.querySelector('header nav');
    var linkP = document.querySelector('.controler .link_page');
    var control = document.querySelector('.controler');
    var controlBtn = document.querySelectorAll('.controler figure img');
    var pop = document.querySelector('.pop_up');
    var close = document.querySelector('.pop_up .exit');
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

    // 함수 모음 ------------------------------------------------------------
    // project 메인 화면 제어 -----------------------------------------------
    function objActive(){
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
        burger.classList.add('active');
    }

    // json 호출 -------------------------------------------------------------
    // project 목업 이미지 호출 -----------------------------------------------
    var data = new XMLHttpRequest();
        data.open('GET','json/project.json',true);
        data.send(null);

    data.addEventListener('load',function(){
        var response = JSON.parse(data.responseText);
        var aa = response.workPage.length;
        var wIdx=0;

        for(var k = 0; k<rConMock.length; k++){
            rConMock[k].src = response.workPage[0][k]
        }
    
    // 버튼 클릭시 목업 이미지 변환 -----------------------------------------------
        controlBtn[1].addEventListener('click',function(e){
            wIdx++;
            work()
            if(wIdx > aa){
                widx = aa;
            }
            console.log(wIdx);
            console.log(aa)
        })

        controlBtn[0].addEventListener('click',function(){
            wIdx--;
            work()
            if(wIdx < 0){
                widx = 0;
            }
            console.log(wIdx)
        })
        
        function work(){
            for(var j=0; j < aa; j++){
                rConMock[j].src = response.workPage[wIdx][j];
                rConMock[j].src = response.workPage[wIdx][j];
                rConMock[j].src = response.workPage[wIdx][j];
            }
        }
        
    });

    //json 호출 2 (project텍스트 컨텐츠)----------------------------------------
    var data2 = new XMLHttpRequest();
        data2.open('GET','json/projectText.json',true);
        data2.send(null);
    
    data2.addEventListener('load',function(){
        var response2 = JSON.parse(data2.responseText);
        var wText = response2.workText;
        var p = document.querySelector('.left_text p');
        var strong = document.querySelector('.left_text strong');
        var span = document.querySelector('.left_text span');
        var li = document.querySelectorAll('.left_text ul li');
        innerWork();
        
        function innerWork(){
            strong.textContent = response2.workText[0][0];
            p.textContent = response2.workText[0][1];
            span.textContent = response2.workText[0][2];
            for(var t = 0; t<li.length; t++){
                li[t].textContent = response2.workText[t][t+3]
            }
        }
    })
    
    //end
})
