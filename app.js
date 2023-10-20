let hill5=document.querySelector(".hill5");
let tree=document.querySelector(".tree");
let hill4=document.querySelector(".hill4");
let leaf=document.querySelector(".leaf");
let h1=document.querySelector("#h1");
window.addEventListener("scroll",()=>{
    let v=window.scrollY;
    h1.style.marginTop=v*(2.5)+"px";
    leaf.style.top=v*(-1.5)+"px";
    hill5.style.left=v*(1.5)+"px";
    hill4.style.left=v*(-1)+"px";
   


})