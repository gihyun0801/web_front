const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");
lottoBoard.style.display = "flex";
lottoBoard.style.flexColumn = "10px";
lottoBoard.style.flexWrap = "wrap";


createBtn.addEventListener("click", () => {



   const str = new Array(30);

   for(let i = 0; i < str.length; i++){
      const div = document.createElement("div");
      div.style.borderRadius = "50px";
      div.style.border = "1px solid black";
      div.style.width = "50px";
      div.style.height = "50px";

      div.innerText = `${i}`;
      lottoBoard.append(div);
   }




})