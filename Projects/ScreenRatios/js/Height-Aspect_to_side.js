

function calc(vertical, horizontal){
    var size = Number(document.sizetoside.size.value);
    
    var x = Math.sqrt((size * size)/((vertical * vertical) + (horizontal * horizontal))).toFixed(2);
    
    var vertSize = x * vertical;
    var horiSize = x * horizontal;
    
    document.getElementById("answerH").innerHTML = horiSize + " " +"inches";
    document.getElementById("answerV").innerHTML = vertSize + " " +"inches";
    
        

}
