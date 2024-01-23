// 변수 선언

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

function minusFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
  

    result.textContent =  value1 - value2;
}

function multiFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
   

    result.textContent =  value1 * value2;
}

function divFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    

    result.textContent =  value1 / value2;
}

function modFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
 

    result.textContent =  value1 % value2;
}


function plusFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  
 
  //input 태그안에 작성한 값들은 문자열임

  /* 
   두 수의 합을
   아이디가 "calcResult 인 요소(result 변수)의
    내부 글자 (innterText, HTML 요소 내용)로 대입하기"
  
  */

  result.textContent = value1 + value2;
  
}


const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");

function totalFn(){
   const value1 = Number(num1.value);
   const value2 = Number(num2.value);
   const value3 = Number(num3.value);

   const result = value1+ value2 +value3;

   total.textContent = result
}


//증가, 감소할 수를 저장할 변수 선언

let num = 0;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const sumsum = document.getElementById("result2")

function decrease() {
    num--;

    sumsum.textContent = num;
}


function increase() {
    num++;

    sumsum.textContent = num;
}


//전위, 후위 연산 확인하기

function check() {
    let count = 100;
    //함수 밖, 안은 구분되는 공간으로 생각하면 된다
   
    //컴퓨터한테 연산은 코드를 하나하나 실행하는 것들이 연산이다

    //전위 연산(++count, --count)
    //-> 다른 연산보다 먼저 수행된다
    // -> count 값이 먼저 증가, 감소된 후 console에 출력
    console.log("count : " + ++count);
    console.log("count : " + ++count);
    console.log("count : " + ++count);
    console.log("count : " + --count);
    console.log("count : " + --count);
    console.log("count : " + --count);

    //후위 연산(count++, count--) 확인
    // -> 다른 연산이 다 끝나고 마지막에 수행

    count = 50;

    console.log("count : " + count++) //50 출력 후 51로 증가;
    console.log("후위 연산 후 count: " + count++);

    console.log("count-- : " , count--);
    console.log("count-- : " , count);


    console.log("----------------------");

    let a = 10;
    let b = 5;
    let c = ++a * b--;

    //최종적으로 a,b,c 에 저장된 값을 얼마?

    //a == ?
    //b == ?
    //c == ?


}


const userName = document.getElementById("userName");
const userAge = document.getElementById("userAge");
const userGender = document.getElementById("userGender");

function printJSObject(){

    const num1 = userName.value;
    const num2 = userAge.value;
    const num3 = userGender.value;

    console.log({이름 : num1 , 나이 : num2 , 성별 : num3});

    

}






    



  



 

 










