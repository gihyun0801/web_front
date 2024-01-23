const input = document.getElementById("input1");

function check1(){

   const value = Number(input.value);

   if(value > 0){
      alert("양수입니다")
   }else{
     alert("양수가 아닙니다")
   } 



}

// if -else -> 홀짝 판별하기
function check2(){
    //난수 발생 : Math.random()
    //난수 범위 : 0 과 1의 사이 0.1 0.99999
    //Math.floor = 소숫점을 버림
    //Math.ceil = 소숫점을 올림
    //Math.round = 반올림

   const randomNumber = Math.floor(Math.random() * 100);


    

   if(randomNumber % 2 == 1){
    alert(`${randomNumber} 는 홀수입니다`);
   }else{
    alert(`${randomNumber} 는 짝수입니다`)
   }


}


function check3(){
    const math = Math.floor(Math.random() * 7) - 3;
    // - 2.99 < 0 < 3.99;

    let message = math + "은/는";

    if(math == 0){
        message += "0입니다";
    }else if(math > 0){
        message += "양수 입니다";
    }else{
        message += "음수 입니다"
    }
  
    alert(message)

}

//어린이, 청소년, 성인 구분하기

const inputAge = document.getElementById("inputAge");


function check4() {
   //입력한 나이 값 얻어오기
   const age = Number(inputAge.value);

    console.log(age);

   if(age == 0 || isNaN(age)){
    alert("미입력")
   }else{
      // 중첩 if 문

      if(0 < age && age <= 13){
        alert("어린이");
    }else if(14 <= age && age <= 19){
      alert("청소년");
    }else if(20 <= age && age <= 150){
      alert("성인");
    }else if(age < 0 || age > 150){
      alert("잘못 입력 하셨습니다")
    }

   }
}

const number1= document.getElementById("number1");
const number2= document.getElementById("number2");
const calcResult = document.getElementById("calcResult");



function calc(op){
// 매개 변수 
// - 함수 호출 시 전달되는 값을 저장하는 변수

// ex) calc('+')
// '+' 값이 sum 변수에 저장됨


 const value1 = Number(number1.value);
 const value2 = Number(number2.value);

 let result;

//break : switch 문을 멈충
// -> case에 break;를 작성하지 않으면
// 멈추지 않고 다음 case로 넘어간다



 switch(op){
    case '+':
        result  = value1 + value2 ;
        break;

    case '-':
        result  = value1 - value2 ;
        break;

    case '*':
        result = value1 * value2;
        break;

    case '/':
        result  =  value1 / value2;
        break;

    case '%':
        result  =  value1 % value2;
        break;
// 맞는 case가 없을 경우에 적용할 기본값(else)
    default :
        alert("뱡신")
        break;
 }

 calcResult.textContent = result;


 //if 문 버전

 /* if(op == '+'){
    calcResult = value1 + value2;
 }else if(op == '-'){
    calcResult = value1 - value2;
 }else if(op == '*'){
    calcResult = value1 * value2;
 }else if(op == '/'){
    calcResult = value1 / value2;
 }else if(op == '%'){
    calcResult = value1 % value2;
 }else{
    calcResult.textContent = "잘못된 연산자"
 } */




}





