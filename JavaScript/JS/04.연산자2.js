const num1 = document.getElementById("compareValue1")
const num2 = document.getElementById("compareValue2")
const num3 = document.getElementById("result1")

function compareFn1(){
 const sum1 = Number(num1.value);
 const sum2 = Number(num2.value);

 if(sum1 == sum2){
    num3.textContent = "true"
 }else{
    num3.textContent = "false"
 }

}

const v3 = document.getElementById("compareValue3");
const v4 = document.getElementById("compareValue4");
const result2 = document.getElementById("result2");

function compareFn2() {
    const cv3 = Number(v3.value);
    const cv4 = Number(v4.value);

    result2.textContent = (cv3 > cv4);
}

//배수확인

const input3_1 = document.getElementById("input3_1");

const input3_2 = document.getElementById("input3_2");

const result3 = document.getElementById("result3");

function checkFn3(){
    const gg1 = Number(input3_1);
    const gg2 = Number(input3_2);
    
     //A가 B의 배수 == A를 B로 나눳을대 나머지가 0

     // 문자열 전체를 백틱으로 감싼 후
     //변수, 연산결과 등이 출력되는 자리에
     //${변수명} or ${연산식} 을 작성

     result3.textContent = `${gg1}는 ${gg2}의 배수 : ${gg1 % gg2 == 0}`;
    



}



//입력된 값 만큼 누적/차감

let count4 = 0;

const input4 = document.getElementById("input4");
const result4 = document.getElementById("result4");

function minus4(){
  
    const value = Number(input4.value);
  
    count4 -= value;

    result4.textContent = count4;
}

function plus4(){
    const up = Number(input4.value);
    count4 += up;

    result4.textContent = count4;
}

//논리 연산자 확인하기

function checkFn5(){
    //AND (&&)
    const bool1 = (104 > 100) && (104 % 2 == 0);
    console.log(`104는 100 이상의 수 이면서 짝수인가? ${bool1}`);
    
    const bool2 = (50 <= 70) && (50 % 4 == 0);
    console.log(`50은 70 이하이고, 4의 배수인가? ${bool2}`);

    const bool3 = (1 < 13) && (13 <= 10);
    console.log(`13은 1부터 10 사이의 수가 맞는가? ${bool3}`);

    //OR (||)

    //---------------------------------------------------------------------------

    const bool4 = (4 > 10) || (4 % 2 == 0);
    console.log(`4는 10을 초과하거나, 짝수인가? ${bool4}`);

    const bool5 = (50 <= 0) || (50 >= 40);
    console.log(`50은 0이하 또는 40 이상인가? ${bool5}`);

    //---------------------------------------------------------------------------

    // NOT(!)

    console.log(`!true = ${!true}`);
    console.log(`!false = ${!false}`);

    const bool6 = false;
    console.log( !(bool6 != true) );
 
}

/* const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login(){

  const id = inputId.value;
  const pw = inputPw.value;

  
  const success = "로그인 성공!";
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다";

  //alert에 출력될 내용을 저장할 변수 선언
  const message 
        = (id == "member01" && pw == "pass01!") ? success : fail; 

  alert(message);

}
 */


