const btn = document.querySelector("#reset");
const nums = document.querySelectorAll(".number");
const result = document.querySelector("#result");


btn.addEventListener("click" , () => {

    result.innerHTML = '';
 
 })


 for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener("click", (e) => {
        result.innerHTML += e.target.innerHTML;
    })
 }
 


