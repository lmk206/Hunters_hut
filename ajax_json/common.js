$(function(){
    //start

        $.ajax({
            url : 'data.json',
            type : 'GET', //POST
            dataType : 'json',
            success:function(data){
                
//                for(var i = 0; i<data.event.length;i++){
//                    console.log(data.event[i]);    
//                }
                
//                for(var i of data.event){
//                    console.log(data.event);
//                }
                
                for(var i in data.event){
                    console.log(data.event[i]);
//                    var imgNode = document.createElement('img');
//                    imgNode.src = data.event[i];
                    var imgNode = "<img src="+ data.event[i] +">"
                   
                    $("section").append(imgNode);
                }
            }
        })    
    //end
        
})