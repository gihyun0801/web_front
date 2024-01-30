
const size = document.querySelector("#size");
const color = document.querySelector("#color");

const apply = document.querySelector("#apply");

const textarea = document.querySelector("#content");

const result = document.querySelector("#result");

const registration = document.querySelector("#registration");

apply.addEventListener("click", () => {
   textarea.style.color = color.value;
   textarea.style.fontSize = `${size.value}px`;
});


registration.addEventListener("click", (e) => {

   const box = document.createElement("div");
   box.innerText = textarea.value;
   box.style.color = `${color.value}`;
   box.style.fontSize = `${size.value}px`;
   result.append(box);

   size.value = '';
   color.value = '';
   textarea.value = '';

   textarea.style.color = "black";
   textarea.style.fontSize = `16px`;
})
