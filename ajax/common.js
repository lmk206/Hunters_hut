$(function(){
    //start

        $.ajax({
            url : 'data.xml',
            type : 'GET', //POST
            dataType : 'xml',
            // beforeSend : function(){문서 로드 시 발생.},
            // completed : function(){문서 로드 완료 시 발생.},
            success : function(data){
                var imgTag;
                $(data).find('item').each(function(i){
                    imgTag = "<img src="+$(this).text()+">";
                //    $(this).index(); - item들의 배열값
                    $('section').append(imgTag);
               });
            },
            error : function(){
                alert("FAIL");
            }
        });

    //end
})