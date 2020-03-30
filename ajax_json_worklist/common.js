$(function(){
    //start

        $.ajax({
            url : 'data.xml',
            type : 'GET', //POST
            dataType : 'xml',
            success:function(data){
                var thum,name,time;
                var workList='',workMain;
                $(data).find('work').each(function(i){
                    // xml info
                    thum = $(this).find('thum').text();
                    name = $(this).find('name').text();
                    time = $(this).find('time').text();
                    // 메인일때만 메인페이지 작동
                    if(!$('.work')){funMain()};
                    
                    workList += "<li>";
                    workList += "<figure>";
                    workList += "<img src="+thum+">";
                    workList += "<figcaption>";
                    workList += "<span>"+name+"</span>";
                    workList += "<span>"+time+"</span>";
                    workList += "</figcaption>";
                    workList += "</figure>";
                    workList += "</li>";
                });
                 $('section ul').append(workList)
                console.log(workList)
                    // tag + info
                    function funMain(){
                    workMain = "<figure><img src="+thum+"><figcaption>"+name+"</figcaption></figure>";
                    
                    $('section').append(workMain)
                    }
                console.log(workMain)


                
//                main: 썸네일, 제목
//                sub : 썸네일, 제목
//                detail : 큰 이미지, 제목, 기간
            }
        });    
    //end
        
})