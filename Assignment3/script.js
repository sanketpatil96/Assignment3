const greetBtn=document.getElementById("greetBtn");
const nameInput=document.getElementById("nameInput");
const greeting=document.getElementById("greeting");
greetBtn.addEventListener("click",function(){
    const name=nameInput.value;
    if(name===""){
        greeting.innerText="Hello User";
    }
    else{
        greeting.innerText="Hello "+name+"!";
    }
});
function changeColor(box,color){
    box.style.backgroundColor=color;
}