window.addEventListener('DOMContentLoaded',function(){
    //start
    var nav = document.querySelector('nav');
    nav.addEventListener('click',function(e){
        e.target.style.color="red";
        var target = e.target.textContent; //html의 key값은 page
        localStorage.page = target;

        // localStorage.index = "index1";
        // localStorage.company = "company1";
        // localStorage.service = "service1";
        // localStorage.mypage = "mypage1";
    });

    // //case1
    // switch(localStorage.page){
    //     case 'index':nav.children[0].style.color = '#f00' ;break;
    //     case 'company':nav.children[1].style.color = '#f00' ;break;
    //     case 'service':nav.children[2].style.color = '#f00' ;break;
    //     case 'mypage':nav.children[3].style.color = '#f00' ;break;
    // }

    //case2
    // var idx=0;
    // switch(localStorage.page){
    //     case 'index':idx=0 ;break;
    //     case 'company':idx=1 ;break;
    //     case 'service':idx=2 ;break;
    //     case 'mypage':idx=3 ;break;
    // }
    // nav.children[idx].style.color = '#f00';

    //case3
    for(var i = 0;i<nav.length;i++){
        nav.children[i].style.color = '#f00'
    };

    var button = document.querySelector('button');
    var input = document.querySelectorAll('div input');
    var img = document.querySelectorAll('div img');
    var figure = document.querySelectorAll('div figure')
    var favorites,imgSrc;

        // //case1
        button.addEventListener('click',function(){
            favorites = document.querySelectorAll('input:checked');
            var imgArry = [];
            for(var i =0 ; i<favorites.length;i++){
                imgSrc = favorites[i].nextElementSibling.src;
                imgArry.push(imgSrc); 
            }
            console.log(imgArry);
            localStorage.favorites = imgArry;
        });

        console.log(localStorage.favorites);
        
        var imgString = localStorage.favorites;
        var myImg = imgString.split(',');
        var div = document.querySelector('.page4');
        
        for(let m=0;m<myImg.length;m++){
            div.innerHTML+="<img src="+myImg[m]+">";
            console.log(myImg[i]);
        };
       
        console.log( imgString.split(',') ); //split() -> ()안의 값을 기준으로 분할 시켜놓기
        
        
        // //case2
        // button.addEventListener('click',function(){
        //     var target = input.checked.nextElementSibling.src;
        //     console.log(target);
        //     if(input.checked){
        //         localStorage.mypage = target;
        //     }
        // });

    //end
});