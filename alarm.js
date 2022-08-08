let btn=document.getElementById("btn");
let set=document.getElementById("set");
btn.addEventListener("click",function(e){
e.preventDefault();
let now=new Date();
let when=new Date(set.value);
let time=when-now;
setTimeout(function(){
    let audio=document.getElementById("audio");
    audio.play();
},time);
})
