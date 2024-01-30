const numbers = document.querySelectorAll(".number");

const span = document.querySelector("#result");

const reset = document.querySelector("#reset");



for(let i = 0; i < numbers.length; i++){
    

    numbers[i].addEventListener("click", (e) => {
         span.innerHTML += numbers[i].textContent
    })
   
    
}

reset.addEventListener("click", (e) => {
    span.innerHTML = ''
})
 


