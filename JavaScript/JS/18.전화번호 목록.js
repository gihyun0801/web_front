const numberBox = document.querySelectorAll(".section2-flex-box");

const h2 = document.querySelector(".h2");

document.addEventListener("keydown", (e) => {

let idx;

   switch(e.key){
     

      case "1":
      idx = 0;
      break;

      case "2":
      idx = 1;
      break;

      case "3":
      idx = 2;
      break;

      case "4":
      idx = 3;
      break;

      case "5":
      idx = 4;
      break;

      case "6":
      idx = 5;
      break;

      case "7":
      idx = 6;
      break;

      case "8":
      idx = 7;
      break;

      case "9":
      idx = 8;
      break;

      case "#":
      idx = 9;
      break;

      case "0":
      idx = 10;
      break;

      case "*":
      idx = 11;
      break;
     
      default:
      break;

    }

    numberBox[idx].style.backgroundColor = "#e0e0e0";


    h2.innerText += e.key;








})

document.addEventListener("keyup", (e) => {

let idx;

   switch(e.key){
     

      case "1":
      idx = 0;
      break;

      case "2":
      idx = 1;
      break;

      case "3":
      idx = 2;
      break;

      case "4":
      idx = 3;
      break;

      case "5":
      idx = 4;
      break;

      case "6":
      idx = 5;
      break;

      case "7":
      idx = 6;
      break;

      case "8":
      idx = 7;
      break;

      case "9":
      idx = 8;
      break;

      case "#":
      idx = 9;
      break;

      case "0":
      idx = 10;
      break;

      case "*":
      idx = 11;
      break;
     
      default:
      break;

    }

    numberBox[idx].style.backgroundColor = "white";



})


const chuga = document.querySelector("#chuga-btn");
const choigihwa = document.querySelector("#choigihwa-btn");
const numberList = document.querySelector("#numberList");





choigihwa.addEventListener("click", function(){
     

    while (numberList.firstChild) {
        numberList.firstChild.remove();
    }
    h2.innerText = '';
})


chuga.addEventListener("click", () => {
    const star = document.createElement("span");
star.classList.add("star");
star.innerHTML = "☆"

const xxx = document.createElement("span");
xxx.innerHTML = "&times;"
const textbox = document.createElement("span");
textbox.classList.add("numbers")


    
const coverbox = document.createElement("div")
coverbox.classList.add("coverbox");
textbox.innerText = h2.innerText
coverbox.append(textbox, star, xxx);
h2.innerText = ''


 numberList.append(coverbox);

 xxx.addEventListener("click", function(e){
     e.target.parentElement.remove()
    })
const shasha = document.querySelectorAll(".coverbox")      
const Lists = shasha.length

const luzy = document.querySelectorAll(".star");
const mozi = document.querySelectorAll(".numbers");


  for(let i = 1; i < Lists; i++){
   
    luzy[i].style.color = "red";
    mozi[i].style.color = "Red";

  }
  

  

})

document.addEventListener("keyup", (e) => {
    
    if(e.key == "Enter"){
        const star = document.createElement("span");
        star.classList.add("star");
        star.innerHTML = "☆"
        
        const xxx = document.createElement("span");
        xxx.innerHTML = "&times;"
        const textbox = document.createElement("span");
        textbox.classList.add("numbers")
        
        
            
        const coverbox = document.createElement("div")
        coverbox.classList.add("coverbox");
        textbox.innerText = h2.innerText
        coverbox.append(textbox, star, xxx);
        h2.innerText = ''
        
        
         numberList.append(coverbox);
        
         xxx.addEventListener("click", function(e){
             e.target.parentElement.remove()
            })
        const shasha = document.querySelectorAll(".coverbox")      
        const Lists = shasha.length
        
        const luzy = document.querySelectorAll(".star");
        const mozi = document.querySelectorAll(".numbers");
        
        
          for(let i = 1; i < Lists; i++){
           
            luzy[i].style.color = "red";
            mozi[i].style.color = "Red";
        
          }

         


    }

})
const text = document.querySelector(".h2");


document.addEventListener("keyup", (e) => {
  


    if (e.key === "Backspace") {
   
      

      
        h2.innerText = h2.innerText.slice(0, -1);
    }
})

const arr = [1,2,3,4,5];
console.log(arr.slice(0, 3))













