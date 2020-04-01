$(function(){
    //start
        
    var today = new Date();
    
    console.log(today);
    console.log( '년도'+today.getFullYear() ); // 년도    
    console.log( today.getMonth()+1 ); // 0~11월(+1하면 정상)    
    console.log( today.getDate() ); // 일
    console.log( today.getDay() ); // 일~토요일
    console.log( '시간'+today.getHours() ); // 시간
    console.log( '분'+today.getMinutes() ); // 분
    console.log( '초'+today.getSeconds() ); // 초
    
    var day = ['일','월','화','수','목','금','토'];
    console.log(day[today.getDay()]);
    
    //날짜 변경
    
    //2일 추가
    var lastDate = today.setDate(today.getDate()+2);
    var aa = new Date(lastDate); //변경된 날짜로 바꿈
    console.log(aa.getDate()); //변경된 날짜 확인
    
    //받고 2일 더 추가.
    today.setDate(today.getDate()+2); //날짜 변경
    console.log('4일후'+today) //변경된 날짜
    
    //4월 5일 부터 4월 10까지의 시간 계산.
    //today는 현재 4월 5일로 설정되어있으므로,
    var oneDay = 24*60*60*1000;
    var changeDate = new Date('2020-04-10');
    console.log('월' + (changeDate.getMonth()+1));
    console.log((changeDate - today)/oneDay);
    console.log( Math.round((changeDate - today)/oneDay))
    // 시간 계산 기준
    console.log( lastDate ); // 1970sus 1월 1일 0시 ~ 현재 까지의 초
    
//        하루24
//        1시간 60분
//        1분 60초
//        1초 1000밀리초
        
//    console.log(24*60*60*1000) //하루의 초
//    
//    var oneDay = 24*60*60*1000;
//    console.log(oneDay*365); //1년의 초    
//    console.log(oneDay*365*50); //50년의 초
    
    //end        
})