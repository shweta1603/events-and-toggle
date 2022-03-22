let numberofClicks=0;
function validate(){
    numberofClicks++;
    if(numberofClicks>3){
        alert("Can't click more" );
        return;
    }
   
   // console.log(`click number:-${numberofClicks}`); or below
    document.getElementById("div").innerText=`Click num:- ${numberofClicks}`;
}
let btn=document.getElementById("button")
btn.addEventListener('click',validate);

function changeTheme(){
    if(document.body.style.backgroundColor!=='black'){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    themeButton.innerText='Light Theme';
    return;
    }
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    themeButton.innerText='Dark Theme';
}
let themeButton= document.getElementById("theme-btn");
themeButton.addEventListener('click', changeTheme);