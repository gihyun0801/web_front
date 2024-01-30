const inputId = document.querySelector("#inputId");
const span1 = document.querySelector("#span1");

inputId.addEventListener("keydown", (e) => {

  const str = /^[a-zA-Z0-9\-\_]{6,14}$/;

  if(str.test(e.target.value)){
      e.target.style.backgroundColor = "green";
  }else{
    e.target.style.backgroundColor = "red";
  }

  if(e.target.value.trim().length == 0){
    e.target.style.backgroundColor = "white";
  }

})

const inputPw = document.querySelector("#inputPw");
const inputPwCofirm = document.querySelector("#inputPwCofirm");


inputPw.addEventListener("keyup", (e) => {
   if(e.target.value == inputPwCofirm.value){
    span1.classList.add("color-green");
    span1.classList.remove("color-red");
    span1.innerText = "비밀번호가 일치합니다";
    
   }else{
    span1.classList.add("color-red");
    span1.innerText = "비밀번호가 일치하지않습니다";
    span1.classList.remove("color-green");
   }

   if(e.target.value.trim().length && inputPwCofirm.value.trim().length == 0){
    span1.innerText = ''
   }
})

inputPwCofirm.addEventListener("keyup", (e) => {
    if(inputPw.value.trim().length == 0){
        alert("비밀번호를 입력하세요");
        e.target.value = '';
        inputPw.focus()
    }

    if(e.target.value == inputPw.value){
        span1.classList.add("color-green");
        span1.classList.remove("color-red");
        span1.innerText = "비밀번호가 일치합니다";
       
       }else{
        span1.classList.add("color-red");
        span1.innerText = "비밀번호가 일치하지않습니다";
        span1.classList.remove("color-green");
       }

       if(e.target.value.trim().length && inputPw.value.trim().length == 0){
        span1.innerText = ''
       }
})

const inputName = document.querySelector("#inputName");
const span2 = document.querySelector("#span2");


inputName.addEventListener("keyup", (e) => {

  const str = /^[가-힣]{2,5}$/;

  if(str.test(e.target.value)){
    span2.innerText = "정상입력";
    span2.classList.add("color-green");
    span2.classList.remove("color-red");
  }else{
    span2.innerText = "한글만 입력하세요";
    span2.classList.add("color-red");
    span2.classList.remove("color-green");
  }

})

const button1 = document.querySelector("#button1");

button1.addEventListener("click", (e) => {
    validate(e);
})

function validate(e){

   const radio = document.querySelector(".radio:checked");
   const inputNumber = document.querySelector("#inputNumber");
   const span3 = document.querySelector("#span3");

   if(!radio){
            alert("성별을 선택해주세요");
            e.preventDefault()
   }

   const str = /^[0][0-9]{1,2}\-[0-9]{1,4}\-[0-9]{1,4}$/;

   if(!str.test(inputNumber.value)){
       alert("전화번호의 형식이 올바르지 않습니다");
       span3.innerText = "전화번호의 형식이 올바르지 않습니다"
       span3.classList.add("color-red");
       e.preventDefault()
       
   }else{
       span3.classList.remove("color-red");
   }
    


}