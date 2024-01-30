const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard")

createBtn.addEventListener("click", (e) => {
   const array = new Array(45);

   for(let i = 0; i < array.length; i++){
      const number = document.createElement("div");
      number.classList.add("number");
      number.innerText = [i];

      lottoBoard.append(number);
   }

   const boxs = document.querySelectorAll(".number");
  
   for(let i = 0; i < boxs.length; i++){

      boxs[i].addEventListener("click", (e) => {
            boxs[i].style.backgroundColor = "orange"
      })
   
   }
    
})







