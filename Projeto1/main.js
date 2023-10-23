function addOpinion(){
    var list = document.getElementById("list");
    var text = document.getElementById("opinion").value;
     
    if(text.laught == 0){ 
    alert ('Comentário inválido!');
    return;
 }

var listFilm = document.createElement("li");   
const textOpinion = document.createTextNode(text);
listFilm.appendChild(textOpinion);
list.appendChild(listFilm);
}


function OpenMenu(){

var Side = document.getElementById('SideBar');
var content = document.getElementById('content');
var showSide = false;

showSide = !showSide;
console.log(showSide);

if(showSide){

Side.style.marginLeft= '-87vw';
Side.style.animationName=('showSide');
content.style.filter = 'blur(1px)';

}
}
function CloseMenu(){

    var Side1 = document.getElementById('SideBar');
    var content1 = document.getElementById('content');
    var showSide1 = false;
    
    showSide1 = !showSide1;
    console.log(showSide1);
    
    if(showSide1){
    
    Side1.style.marginLeft= '-200vw';
    Side1.style.animationName=('');
    content1.style.filter = '';
    }



}
function popup(){
    
const button = document.getElementById("botao");
const modal = document.getElementById("dialog");

modal.showModal()




}