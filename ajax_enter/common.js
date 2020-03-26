$(function(){
    //start

        $.ajax({
            url : 'data.xml',
            type : 'GET', //POST
            dataType : 'xml',
            // timeout: 2000,
            beforeSend : function(){
                console.log('로딩중');
                $('.loading').fadeIn();
            },
            complete : function(){
                setTimeout(function(){
                $('.loading').fadeOut();
                },2000);
                console.log('로딩완료');
            },
            success : function(data){
                setTimeout(function(){
                    var imgTag='';
                    $(data).find('item').each(function(i){
                        if(5<9){

                        }
                        if(2<6){

                        }
                        if(i<3){
                        imgTag = "<img src="+$(this).text()+">";
                    //    $(this).index(); - item들의 배열값
                        $('section').append(imgTag); // 데이터 양이 많을때 하나하나 뿌리기
                        }
                    });
                    // $('section').html(imgTag); // 데이터 양이 적을때 한번에 뿌리기
                    $('section').fadeIn();
                },3000);
            },
            error : function(){
                alert("FAIL");
            }
        });

    //end
})