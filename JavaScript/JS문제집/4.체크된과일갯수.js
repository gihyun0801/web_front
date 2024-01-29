const appleinput = document.querySelector("#apple");
const bananainput = document.querySelector("#banana");
const meloninput = document.querySelector("#melon");

let apple = 0;
let banana = 0;
let melon = 0;

let sum = 0;

const result = document.querySelector("#result");

const number1 = document.querySelector("#number1")
const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {


 if(appleinput.checked){

    apple = Number(number1.value);

 }

 if(bananainput.checked){

  banana = Number(bananainput.value);

 }

 if(meloninput.checked){

  melon =  Number(number1.value);

 }

 sum = (apple * 2000) + (banana * 3000) + (melon * 5000);

 result.innerHTML = `사과 ${apple}개 바나나 ${banana}개 메론 ${melon}개 총합 ${sum}`

})