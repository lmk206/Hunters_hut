$(function(){
    //start
    
        $.ajax({
            url : 'data.xml',
            type : 'GET', //POST
            dataType : 'xml',
            success: function(data){
                var thum,name,time;
                var workMain;
                var workList='';
            //data - xml 에서 
            $(data).find('work').each(function(i){
                thum = $(this).find('thum').text();
                name = $(this).find('name').text();
                time = $(this).find('time').text();
                
                if(!$('section').hasClass('work')){
                    main(i);
                }else{
                    sub(i);
                }
            });
                function main(i){
                    workMain = "<figure><a href=sub-xml.html#"+i+"><img src="+thum+"><figcaption>"+name+"</figcaption></a></figure>";
                    $('section').append(workMain);
                };
                function sub(i){
                    workList = "<li>";                   workList += "<figure>";
                    workList += "<img src="+thum+">";
                    workList += "<figcaption>";
                    workList += "<span>"+name+"</span>";
                    workList += "<span>"+time+"</span>";
                    workList += "</figcaption>";
                    workList += "</figure>";
                    workList += "</li>";
                    
                    $('section ul').append(workList);
                };
                
                $('section ul li').on('click',function(e){
                    var idx = $(this).index();
                    console.log($(this));
                    detail(e);
                });
                function detail(e){
                    var detail = $(data).find('work').eq(e).find('detail').text();
                    var contentName = $(data).find('work').eq(e).find('name').text();
                    var contentTime = $(data).find('work').eq(e).find('time').text();
                    var contentLink = $(data).find('work').eq(e).find('link').text();
                    
                    $('article img').attr('src',detail);
                    $('article figcaption span').eq(0).text(contentName);
                    $('article figcaption span').eq(1).text(contentTime);
                    $('article figcaption a').attr('href',contentLink);
                }
            }
        // ajax end
        });
    
    //end   
});