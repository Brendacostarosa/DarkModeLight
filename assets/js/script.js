let light = document.getElementById("light");
let dark = document.getElementById("dark");
let body = document.getElementById("body");

dark.addEventListener("click",function(){
    body.style.background = "black";
});

light.addEventListener("click",function(){
    body.style.background = "white";
});



