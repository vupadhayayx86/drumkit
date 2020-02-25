//document.querySelector("button").addEventListener("click",handleClick); // will be activated when click event will happen
//document.querySelector("button").addEventListener("click",handleClick()); // will be activated when event listenter is added

var nosofdbtns=document.querySelectorAll(".drum").length;
for(var i=0;i<nosofdbtns;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

function handleClick(){
  //var audio=new Audio('sounds/tom-1.mp3');
  //audio.play();
  //this.style.color="white";
  var btnclicked=this.innerHTML;
  soundPlay(btnclicked);

}

document.addEventListener("keypress",function(e){
var x=e.key;
soundPlay(x);

});

function soundPlay(param1){
  btngot=param1;
  switch (btngot) {
    case "w":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "a":
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
      break;
    case "s":
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "d":
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "j":
    var audio=new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "k":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case "l":
    var audio=new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    default:
    alert("Key with no sound :(")


  }
}
