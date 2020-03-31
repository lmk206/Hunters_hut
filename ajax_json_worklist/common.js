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

                if(!$('section').hasClass('work')){
                    funMain(i)
                }else{
                    funSub(i)
                };
            });
            
                    // tag + info
                function funMain(idx){
                    workMain = "<figure><a href=sub.html#"+idx+"><img src="+thum+"><figcaption>"+name+"</figcaption></a></figure>";
                    //#0으로 해시태그를 이용한다.
                    // 각각의 함수 i 를 실행 함수에 넣어주고, 실행함수에서는 idx로 받는다.
                    $('section').append(workMain)
                    }
                
                function funSub(){
                    
                    // 브라우저 객체 location -> hash를 통해 현재 페이지의 해시태그를 불러올 수 있다.
                    // 해시태그를 가져와 해당 li를 불러 올 수 있다.
                    
                        workList = "<li>";
                        workList += "<figure>";
                        workList += "<img src="+thum+">";
                        workList += "<figcaption>";
                        workList += "<span>"+name+"</span>";
                        workList += "<span>"+time+"</span>";
                        workList += "</figcaption>";
                        workList += "</figure>";
                        workList += "</li>";
                        
                        $('section ul').append(workList);
                    }

                    $('section ul li').on('click',function(){
                        var idx = $(this).index();
                        detail(idx);

                    });
                
                    function detail(fIdx){
                        var detail = $(data).find('work').eq(fIdx).find('detail').text();
                        var nameDetail = $(data).find('work').eq(fIdx).find('name').text();
                        var timeDetail = $(data).find('work').eq(fIdx).find('time').text();
                        var linkDetail = $(data).find('work').eq(fIdx).find('link').text();
                        
                        $('article img').attr('src',detail);
                        $("article figcaption span").eq(0).text(nameDetail);
                        $("article figcaption span").eq(1).text(timeDetail);
                        $("article figcaption a").attr('href',linkDetail);
                }
                  var url = location.hash.substr(1);
                  $('section ul li').eq(url).addClass('active');
                
                detail(url)
                }
            });    
    //end
        
})