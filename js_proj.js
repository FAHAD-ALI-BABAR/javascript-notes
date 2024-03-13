let body1=document.querySelector("body");
let buttons=document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click",function(clicks){
        console.log(clicks);
        console.log(clicks.target);
        if(clicks.target.id==="grey"){
            body1.style.backgroundColor=clicks.target.id;
        }
        if(clicks.target.id==="blue"){
            body1.style.backgroundColor=clicks.target.id;
        }
        if(clicks.target.id==="green"){
            body1.style.backgroundColor=clicks.target.id;
        }
        if(clicks.target.id==="yellow"){
            body1.style.backgroundColor=clicks.target.id;
        }
    });
});