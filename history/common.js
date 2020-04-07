window.addEventListener('DOMContentLoaded',function(){

    var all = document.querySelector('nav');
    var img = document.querySelector('section img');
    
    
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET","data.json");
    xhr.send(null);
    xhr.onload = function(){
        var data = JSON.parse(xhr.responseText);
        
        //pushState -> 해시번호 변경 및 history 저장
        //onpopstate -> 브라우저 변경

        all.addEventListener('click',function(e){
            var target = e.target;
            var idx = target.dataset.id; // data의 숫자 가져오기
            view(idx);
            history.pushState({page:idx},'title','page='+idx);
            console.log(history.state.page);
            //객체 안의 page번호를 호출
            
            
//            history.pushState('object','title','hash');       //                              {page:1}          page:1
//             title 조작하는 history의 제목
//             hash 조작하는 history 가 가지는 상단 브라우저 부분의 //             번호 ex) hash1 --> string
//             object -> 임의로 남기는 값. ex page1로 지정하면 //   //               object는 1이 된다. --> object (객체)
        });
        
        function view(i){
            img.src = data.event[i];
        }
// case1        
//        window.onpopstate = function(){
//        view(history.state.page)
//    }

// case2
       window.addEventListener('popstate',function(){
         view(history.state.page)
       })
//        history 제어 / history.length 이용 
//        history.back();
//        history.forward();
//        history.go(-1 or 1..);
}
    
    
});