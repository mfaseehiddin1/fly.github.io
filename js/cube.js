function one(spining) {

 document.getElementById("cube").style.transform = 'rotateY(0deg)'
   
}
function two() {
    document.getElementById("cube").style.transform = "rotateX(-90deg)";
    document.getElementsByClass("faceoptions").style.transform = "rotateY(0deg)";
    document.getElementsByClass("faceoptions").style.opacity = "0.5";
}

function three() {
    document.getElementById("cube").style.transform = "rotateX(90deg)";
}
function four() {
    document.getElementById("cube").style.transform = "rotateY(-90deg)";
}
function five() {
    document.getElementById("cube").style.transform = "rotateY(90deg)";
}

function six() {
    document.getElementById("cube").style.transform = "rotateY(180deg)";
}
