$(function(){
    //start
        
    var today = new Date();
    var dayString = ["일","월","화","수","목","금","토"];
    var year = today.getFullYear();
        var month = today.getMonth()+1;
        var date = today.getDate();
        var day = dayString[today.getDay()];
        var div = document.querySelector('div');
    console.log(today)
    console.log(today.getFullYear() +'년');
    console.log(today.getMonth()+1 +'월');
    console.log(today.getDate()+'일');
    console.log(dayString[today.getDay()]+ '요일');
    console.log(dayString);
    
    con1 = `${year}년 ${month}월 ${date}일 ${day}요일`
    $('.con1').text(con1);
    
    //d-day구하기
    var startDay = new Date();
    var lastDay = new Date('2020-06-08');
    var endDay = lastDay.getTime() - startDay.getTime();
    var dDay = Math.round(endDay/ (24*60*60*1000));
    
    $('div:nth-of-type(2)').text(`종강일(2020.6.8)까지 D-day:${dDay}일`);
    
//    var year = today.getFullYear();
//        var month = today.getMonth()+1;
//        var date = today.getDate();
//        var day = today.getDay();
//        var div = document.querySelector('div');
//        
//        div.textContent = `${year}+${month}+${date}+${day}`
    
    //case1
//    var event = new Date('2020-04-01');
//    var eventS = event.getDate();
//    var eventE = event.setDate(eventS + 7); 
//    //현 시간에서 +7을 더해 새로 계산한다.
//    
//    console.log(eventS);
//    console.log(event.getDate());
//    if(eventS < eventE){
//       console.log('이벤트 기간입니다.')
//    }else{
//       console.log('이벤트가 종료되었습니다.')
//    }
//    
    //case2
    var event = new Date();
    var eventS = new Date('2020-04-01 08:00:00');
    var eventE = new Date('2020-04-08 18:00:00'); 
    //현 시간에서 +7을 더해 새로 계산한다.
    
    if(event >= eventS && event <= eventE){
       console.log('이벤트 기간입니다.')
    }else{
       console.log('이벤트가 종료되었습니다.')
    }
    //end        
})

