window.addEventListener("DOMContentLoaded",function(){
    //start
    
    var leftCon = document.querySelector('.left_con');
    var rightCon = document.querySelector('.right_con');
    var rConMock = document.querySelectorAll('.right_con figure img');
    var foot = document.querySelector('footer');
    var burger = document.querySelector('header .burger');
    var nav = document.querySelector('header nav');
    var linkP = document.querySelector('.controler .link_page');
    var control = document.querySelector('.controler');
    var controlBtn = document.querySelectorAll('.controler figure img');

    window.addEventListener("load",function(){
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

    linkP.addEventListener('click',function(){
        leftCon.classList.remove('active');
        rightCon.classList.remove('active');
        foot.classList.remove('active');
        setTimeout(function(){
            location.href="list.html";
        },1500);
        
    });
    // function ------------------------------------------------------------
    function objActive(){
        leftCon.classList.add('active');
        rightCon.classList.add('active');
        foot.classList.add('active');
        burger.classList.add('active');
    }

    // json 호출 -------------------------------------------------------------
    var data = new XMLHttpRequest();
        data.open('GET','json/project.json',true);
        data.send(null);

    data.addEventListener('load',function(){
        var response = JSON.parse(data.responseText);
        console.log(response.workPage[0][0]);
        for(var k = 0; k<rConMock.length; k++){
            rConMock[k].src = response.workPage[0][k]
        }
        for(let i = 0; i<rConMock.length; i++){
            controlBtn[1].addEventListener('click',function(e){
                rConMock[i].src = response.workPage[1][i]
            })
            controlBtn[0].addEventListener('click',function(){
                rConMock[i].src = response.workPage[0][i]
            })
        }
    })
    //end
})