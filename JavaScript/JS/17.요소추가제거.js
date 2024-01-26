const add = document.querySelector("#add");
const calc = document.querySelector("#calc");
const container = document.querySelector(".container")


add.addEventListener("click", () => {

   const row = document.createElement("div");
   row.classList.add("row");

   const input = document.createElement("input");
   input.type = "number"; // = input.setAttribute("type", "number")
   input.classList.add("input-number");


   //그럼 input 한테 클래스를 주고싶으면 input.setAttribute("class" , "name") 이렇게 줄수있는데 내가 만약에 input 이라는 태그에 class 를 또 주고싶으면 input.setAttribute("class" , "name") 이렇게 다시 주면 클래스가 두개 겠지? 하는데 아니다 덮어씌어지는것이다.


   const span = document.createElement("span");
   span.classList.add("remove-row");
   const times = document.createElement("i");
   times.innerHTML = "&times;";
   span.append(times);

   row.append(input, span);
   

 container.append(row)


  times.addEventListener("click", function(e){

      e.target.parentElement.parentElement.remove()


  })

 

})

calc.addEventListener("click", () => {

   let sum = 0;

   const inputList = document.querySelectorAll(".input-number");
   const inputnum = inputList.length;

   for(let i = 0; i < inputnum; i++){
      
    sum += Number(inputList[i].value)

   }
   
alert(sum);

})













/*   
<div class="row">
  <input type="number" class="input-number">
  <span class="remove-row">&times;</span>
</div> */





