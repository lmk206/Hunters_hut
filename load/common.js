$(function(){
    //start
        $('header').load('header.html nav'); //.load()를 사용하여 다른 페이지 및 소스를 불러올 수 있다.
        $('section').load('main.html');
        $('footer').load('header.html .foot');// 문서 뒤에 특정 태그나 클래스를 호출하여 출력 할 수 있다.
        // $('section').css({
        //     opacity:0,
        //     transition:'.5s'
        // })
        $('body').addClass('active');

    setTimeout(function(){
        $('header nav a').on('click',function(e){
            e.preventDefault();

            var link = $(this).attr('href');

            $('body').removeClass('active');

            setTimeout(function(){
                location.href = link; //location -> 브라우저가 가지고 있는 자체적 객체 속성
            },500)
            // $('section').fadeOut(600, function(){
                
            // });
        });
    },100); // 지연시간을 부여하면 작동됨.(지연시간이 없을 경우 문서를 새로 읽기 때문에 작동되지 않는다.)
    //end
    //공통된 header footer 를 만들어 두어, 서브페이지 관리가 용이하다.
})

// $(function(){
//     //start
//     $('header').load("header.html nav");
//     $('footer').load("header.html .foot");
//     $('section').load("main.html");
    
//     $('section').addClass('active');
    
//     setTimeout(function(){
//         $('header nav a').on('click',function(e){
//             e.preventDefault();
            
//             var link = $(this).attr('href');
            
//             $('section').removeClass('active');
            
//             setTimeout(function(){
//                 location.href = link;          
//             },500)
            
//         });
        
//     },10);
    
    