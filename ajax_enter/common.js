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
                var imgTag='';
                    var first = 0;
                    var itemRow = 3;
                    var last = itemRow;
                setTimeout(function(){
                    function getItem(){
                    
                    
                        $(data).find('item').each(function(i){
//                            if(6 <= i < 9){
//                            imgTag = "<img src="+$(this).text()+">";
//                        //    $(this).index(); - item들의 배열값
//                            $('section').append(imgTag); // 데이터 양이 많을때 하나하나 뿌리기
//                                
//                            }
//                            if(3 <= i <6){
//                                imgTag = "<img src="+$(this).text()+">";
//                        //    $(this).index(); - item들의 배열값
//                            $('section').append(imgTag); // 데이터 양이 많을때 하나하나 뿌리기
//                            
//                            }
//                            if(0 <= i < 3){
//                            imgTag = "<img src="+$(this).text()+">";
//                        //    $(this).index(); - item들의 배열값
//                            $('section').append(imgTag); // 데이터 양이 많을때 하나하나 뿌리기
//                            }

                                  if(first <= i && i < last){
                                        imgTag = "<img src="+$(this).text()+">";
                                    //    $(this).index(); - item들의 배열값
                                        $('section').append(imgTag); // 데이터 양이 많을때 하나하나 뿌리기
                                        $('section img').eq(i).hide().fadeIn()
                                    }
                            });
                    }
                    getItem();
                    // $('section').html(imgTag); // 데이터 양이 적을때 한번에 뿌리기
                        $('section').fadeIn();
                        $('button').on('click',function(){
                            first += itemRow;
                            last += itemRow;
                            getItem();
                        });
                    },3000);
                        },
                        error : function(){
                            alert("FAIL");
                        }
        });

    //end
})