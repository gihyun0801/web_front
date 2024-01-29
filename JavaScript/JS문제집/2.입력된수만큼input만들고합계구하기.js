const btn = document.querySelector("#btn");
const container = document.querySelector("#container");
const text = document.querySelector("#text");
const result = document.querySelector("#result")

btn.addEventListener("click", (e) => {

    if(text.value.trim().length == 0 || isNaN(Number(text.value))){
        alert("갯수를 입력하세요");
        return;
    }

    for(let i = 0; i < Number(text.value); i++){
       
   const input = document.createElement("input");

   input.setAttribute("type", "number");
   input.classList.add("input-number");

   
   container.append(input);
    }






})

function on(){
    let sum = 0
    const boxs = document.querySelectorAll(".input-number")
  


    for(let i = 0; i < Number(text.value); i++){
        sum += Number(boxs[i].value)
    }



    result.innerText = sum;


}