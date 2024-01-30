const input = document.querySelector("#text");

const btn = document.querySelector("#btn");

const result = document.querySelector("#result");



btn.addEventListener("click", (e) => {

   const container = document.querySelector("#container");
   
   for(let i = 0; i < Number(input.value); i++){
     
    const inputNumber = document.createElement("input");
    inputNumber.classList.add("input-number");
    inputNumber.setAttribute("type","number");

    container.append(inputNumber);
   } 

  

   



})

function on(){
    const inputsBox = document.querySelectorAll(".input-number");

    let sum = 0;

    for(let i = 0; i < inputsBox.length; i++){
        sum += Number(inputsBox[i].value);
    }

    result.innerHTML = `합은 : ${sum}입니다`

}