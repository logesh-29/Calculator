function clearScreen(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value+=value;
}
function calculate(){
    var a=document.getElementById("result").value;
    var c=eval(a);
    document.getElementById("result").value=c;
}
function deleted(){
    document.getElementById("result").value="";
}