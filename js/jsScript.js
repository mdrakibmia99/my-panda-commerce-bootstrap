let h2tags=document.getElementsByTagName("h2");
for(const h2tag of h2tags) {
    h2tag.style.color='lightblue ';
}

// backpack background color toamato
let backpackBackground=document.getElementById('Backpack');
// console.log(backpackBackground);
backpackBackground.style.background='tomato ';

// card border radius 30px
const cardBorder=document.getElementsByClassName('card');

for(let border of cardBorder) {
    
    border.style.borderRadius='30px';
}

const btn=document.getElementById('rkbtn');
// console.log(btn);

    btn.addEventListener('click',function() {
        
        console.log("click event");

    })


let buyNow=document.getElementsByTagName('button');
for(const btn of buyNow) {
    
    if(btn.innerText=="Buy Now"){
        console.log(btn.innerText);
        btn.addEventListener('click',function(event) {
           // console.log(event.target.parentNode);
            event.target.parentNode.removeChild(btn);
        })
    }
}

const inputValue=document.getElementById("inputEmail");

const disblebtn=document.getElementById("rkbtn");
disblebtn.disabled=true;
disblebtn.style.backgroundImage="linear-gradient(to bottom, #dec4cf 50%, #dec4cf 50%)";

inputValue.addEventListener("keyup",function() {
    console.log(inputValue.value);
    

    if(inputValue.value==='email'){
        disblebtn.disabled=false;
        disblebtn.style.backgroundImage= "linear-gradient(to bottom, #FF589B 0%, #ff4b92 100%)";
    
    }else{
        disblebtn.disabled=true;
      
    }
 
 })
//mouseenter time picture change 
const mouseCenter=document.getElementsByTagName('img');
for(const imgChnage of mouseCenter){
    const firstImg=imgChnage.src;
    imgChnage.addEventListener("mouseenter",function() {
        imgChnage.src="images/shoes/shoe-2.png"
         
    })
    imgChnage.addEventListener("mouseout",function() {
        imgChnage.src=firstImg;
             
        })
}

// dblclick then background change
document.getElementById("dblclickChange").addEventListener('dblclick',function(){
    document.getElementById("dblclickChange").style.background="orange";
})

