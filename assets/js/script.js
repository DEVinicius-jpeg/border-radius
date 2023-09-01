const border = document.getElementById("Border-Radius");
const topL = document.getElementById("topL");
const topR = document.getElementById("topR");
const bottomL = document.getElementById("bottomL");
const bottomR = document.getElementById("bottomR");
const styleProp = window.getComputedStyle(border);

topL.addEventListener("change",()=>{
    if (topL.value){
        border.style.borderTopLeftRadius = `${topL.value}px`;
    }else{
        border.style.borderTopLeftRadius = "0px";
    }
    border.textContent = `border-radius:${styleProp.getPropertyValue("border-radius")};`;
})

topR.addEventListener("change",()=>{
    if(topR.value){
        border.style.borderTopRightRadius = `${topR.value}px`;
    }else{
        border.style.borderTopRightRadius = "0px";
    }
    border.textContent = `border-radius:${styleProp.getPropertyValue("border-radius")};`;
})

bottomL.addEventListener("change",()=>{
    if(bottomL.value){
        border.style.borderBottomLeftRadius = `${bottomL.value}px`;
    }else{
        border.style.borderBottomLeftRadius = "0px";
    }
    border.textContent = `border-radius:${styleProp.getPropertyValue("border-radius")};`;
})

bottomR.addEventListener("change",()=>{
    if (bottomR.value) {
        border.style.borderBottomRightRadius = `${bottomR.value}px`;
    }else{
        border.style.borderBottomRightRadius = "0px";
    }
    border.textContent = `border-radius:${styleProp.getPropertyValue("border-radius")};`;
})