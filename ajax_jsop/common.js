
function jsop(data){
console.log(data.event)            
    for(var i in data.event){
        console.log(data.event[i]);
        var imgNode = "<img src="+ data.event[i] +">"

        $("section").append(imgNode);
    }
}  

