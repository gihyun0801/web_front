const box = document.querySelectorAll(".box");
const input = document.querySelectorAll(".color-input");
const btn = document.getElementById("changeButton");

btn.addEventListener("click", function(){

  for(let i = 0; i < box.length; i++){
      box[i].style.backgroundColor = `${input[i].value}`
  }
})



