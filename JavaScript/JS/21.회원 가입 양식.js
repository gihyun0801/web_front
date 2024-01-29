const inputId = document.querySelector("#inputId").addEventListener("keyup", (e) => {

     if(e.target.value.trim().length == 0){
        
        e.target.style.backgroundColor = "white"
     }


     const str =   /^[a-zA-Z0-9\-_]{6,14}$/;
                   
     if(str.test(e.target.value)){

         e.target.style.backgroundColor = "green";

     }else{
        e.target.style.backgroundColor = "white";
     }
            

})

const inputPwCofirm = document.querySelector("#inputPwCofirm");
const inputPw = document.querySelector("#inputPw");

inputPwCofirm.addEventListener("keyup", (e) => {
    if(inputPw.value.trim().length == 0 && inputPwCofirm.value.trim().length == 0){
        span1.innerText = ''
     }
    


    if(inputPw.value.trim().length == 0){
        alert("비밀번호를 입력해주세요");
        e.target.value = '';
        inputPw.value = ''
        inputPw.focus();
        
       }

       if(inputPw.value ==  inputPwCofirm.value){
        span1.classList.add("color-green");
        span1.classList.remove("color-red");
        span1.innerText = "비밀번호일치"
 }else{
      span1.classList.add("color-red");
      span1.classList.remove("color-green");
      span1.innerText = "비밀번호불일치"
 }

 


})
const span1 = document.querySelector("#span1")
inputPw.addEventListener("keyup", (e) => {

  
    if(inputPw.value.trim().length == 0 && inputPwCofirm.value.trim().length == 0){
        span1.innerText = ''
     }

    if(inputPw.value ==  inputPwCofirm.value){
           span1.classList.add("color-green");
           span1.classList.remove("color-red");
           span1.innerText = "비밀번호일치"
    }else{
         span1.classList.add("color-red");
         span1.classList.remove("color-green");
         span1.innerText = "비밀번호불일치"
    }
})

