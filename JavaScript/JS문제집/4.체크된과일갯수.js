const fruit = document.querySelectorAll(".fruit");
const input = document.querySelectorAll(".numbers");
let apple = 2000;
let banana = 3000;
let melon = 5000;

let appleNum = 0;
let bananaNum = 0;
let melonNum = 0;





const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click" , (e) => {
   if(fruit[0].checked){
        
      appleNum = Number(input[0].value);
 
    }
 
     if(fruit[1].checked){
         
       bananaNum = Number(input[1].value);
 
    }
 
     if(fruit[2].checked){
         
       melonNum = Number(input[2].value);
 
    }
 
   let sum = (appleNum * 2000) + (bananaNum * 3500) + (melonNum * 5000);
   result.innerHTML = `사과 ${appleNum}개 , 바나나 ${bananaNum}개 . 멜론 ${melonNum}개 총합 ${sum}원`
})

