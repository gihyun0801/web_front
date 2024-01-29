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

const inputName = document.querySelector("#inputName");
const span2 = document.querySelector("#span2");

inputName.addEventListener("keyup", (e) => {

 const str = /^[ㄱ-힣]{2,5}$/;

  
 if(str.test(e.target.value)){
    span2.innerText = "정상입력";
    span2.classList.add("color-green")
    span2.classList.remove;("color-red");
 }else{
    span2.classList.add("color-red");
    span2.classList.remove("color-green");
    span2.innerText = "한글만 입력하세요"
 }
})

const btn1 = document.querySelector("#button1").addEventListener("click", (e) => {
    e.preventDefault()
    valiedate();
})



function valiedate(){
const radio = document.querySelectorAll(".radio");

for(let i = 0; i < radio.length; i++){
    
    if(radio[i].checked){
      
    }else{
        alert("성별을 선택해주세요");
        
        return;
    }
}

    

}

const inputNumber = document.querySelector("#inputNumber");
const span3 = document.querySelector("#span3")
const str = /^[0][0-9]{1,2}\-[0-9]{1,4}\-[0-9]{1,4}$/;
inputNumber.addEventListener("keyup", (e) => {
   

    if(str.test(e.target.value)){
       span3.innerText = "올바른 전화번호 방식입니다"
    }else{
        alert("전화번호의 형식이 올바르지 않습니다")
    }
})