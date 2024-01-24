for(let num = 1; num <= 5; num++){
 //조건식이 TRUE 인 경우 반복 수행할 코드;
 console.log("통과!");
}


function check1 (){
    
   let result = "";

  for(let i = 1; i <= 5; i++){
      result += i
  }

  console.log(result)


}

function check2(){
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }
}

function check3(){
    for(let i = 1; i <= 20; i++){
        console.log(i)
    }
}

function check4(){


    for(let i = 5; i <= 15; i++){
        console.log(i)
   
    }

}

function check5(){



    for(let i = 1; i <= 30; i += 2){
        console.log(i )
    }

    
}

function check6(){
  let result = 0;
    for(let i = 1; i <= 10; i++){
    result += i;
    }
  console.log(result);

}


const num1 = document.getElementById("inputNumber1-1");
const num2 = document.getElementById("inputNumber1-2");
const span = document.getElementById("result1")

function sumFn(){
const v1 = Number(num1.value);
const v2 = Number(num2.value);


    let result = 0;

   for(let i = v1; i <= v2; i++){
       result += i
   }
  
   span.textContent = result;

}

const value1 = document.getElementById("inputNumber2-1");
const value2 = document.getElementById("inputNumber2-2");
const value3 = document.getElementById("inputNumber2-3");
const result2 = document.getElementById("result2");

function executeFn2(){

const number1 = Number(value1.value);
const number2 = Number(value2.value);
const number3 = Number(value3.value);    

  let st = "";
  result2.innerHTML = '';
  for(let i = number1; i <= number2; i += number3){
      result2.innerHTML += `<li>${i}</li>`;

      // innerText = HTML 태그를 해석하지 않고 문자열 그대로 적용
      // innerText = HTML 태그를 해석해서 화면에 본 기능대로 출력

  }

  

}

function executeFn3(){
    const input3 = Number(document.getElementById("input3").value);
    
    const result3 = document.getElementById("result3");
    result3.innerHTML = '';
    
    if(input3 >= 2 && input3 <= 9){

        for(let i = 1 ; i <= 9; i++){
           
            result3.innerHTML += `<li>${input3} x ${i}= ${input3 * i}</li> `
   
       }
    }else{
        alert("2 ~ 9 사이만 입력해주세요")
        return; // 함수를 종료하고 호출한 곳으로 돌아감
        // 함수 종료 정도로만 인식
        alert("ㅇ") // < 이전에 reuturn 값이 있어서 실행이 안됌
    }
    

    
    //어떤 코드 
    
    // 어떤 코드가 있어도 return 을 만나면 함수를 종료하고 처음으로 돌아감

}

function check8(){
   // 4바퀴 반복하는 for문
   for(let i = 1; i <= 4; i++){
    
     let st = '';
    //"12345"를 출력하는 구문                              
      for(let j = 1; j <=5; j++){
           st += j;
      }

     console.log(st);
   }

}

function check9(){

  for(let i = 1; i <= 5; i++){
    let st = '';
    
     for(let j = 1; j <= i; j++){
             st += j;
     }


    console.log(st);
  }


}


/* for(let i = 1; i <= 5; i++){

     let star = "";
     
     for(let k = 5; k >= i; k--){
        star += " ";
     }
     for(let j = 1; j <= 2 * i - 1; j++){
          star += '*';
     }



  console.log(star)
}


for(let i = 1; i <= 5; i++){

     let star = "";

     for(let k = 1; k <= i + 1; k++){
        star += " ";
     }
   
     for(let j = 7; j >= 2 * i - 1; j--){
          star += '*';
     }



  console.log(star)
} */

function check16(){
    prompt() ; // < 확인 버튼을 누를시 value값
               // 취소 누를시 null 값이 들어감

   let val; // undefinded

   // 취소를 누르기 전 까지 계속 반복
  // 취소를 누르면 반복하지 않겠다

  while(val !== null){
        // 동일 비교 연산자
        // != : 아니다
        // !== : 값, 자료형이 모두 다른경우 true
        // === : 값, 자료형이 모두 같은경우 true

        val = prompt("입력 후 확인")

        console.log(val);
  }
   

}

/* function check17(){
// 메뉴 가격

 let gimbap = 3000;
 let ramen = 3500;
 let dongas = 5000;

 // 주문 개수 카운트 변수 지정
 let gcount = 0;  //김밥
 let rcount = 0;  //라면
 let dcount = 0;  //돈까스


 // prompt 로 입력한 값을 저장할 변수 선언

 let input;  // undefined

 //prompt 에서 확인 -> 입력한 값
 //            취소 -> null

 while(input !== null){
    //취소 누르기 전까지 반복

  
    input = prompt("메뉴 번호를 입력하세요");

    switch(input){
         case "1" :
         gcount++;
         break;

         case "2" :
         rcount++;
         break;
         
         case "3" :
         dcount++;
         break;
         
         case null :
            alert("주문 완료");
            break;
          
         default :
         alert("숫자는 1부터 3까지 있습니다");
         break;   

    }

     
 }

alert(`김밥 : ${gcount}, 라면 : ${rcount}, 돈까스 : ${dcount}`)
let sum = (gcount * gimbap) + (rcount * ramen) + (dcount * dongas);

alert(`총 가격 : ${sum}원`)

}
 */

function check18(){
    //1부터 10까지 출력

    let num = 1;
  

    while(num < 11){
        console.log(sum);

        num++;
      
    }

    

}



let num = 10;

while(num <= 10 && num >= 1){


   console.log(num)
   
   num--

}

function check17(){

  let gimbap = 3000;
  let ramen = 3500;
  let dongas = 5000;

  let gcount = 0;
  let rcount = 0;
  let dcount = 0;

  let input; 

  while(input !== null){
     
     input = prompt("메뉴숫자를 입력하세요")

    switch(input){
     
        case "1" :
        gcount++
        break 

        case "2" :
        rcount++
        break    

        case "3" :
        rcount++
        break 
        
        case null :
        alert("주문 완료");
        break;

        default :
        alert("숫자는 1~3 까지 있습니다");
        break;
    


    }

    console.log(input)

  }

  alert(`김밥 : ${gcount}개 라면 : ${rcount}개 돈까스 ${dcount}개`)

  let sum = (gcount * gimbap) + (rcount * ramen) + (dongas * dcount)

  alert(`총 가격은 ${sum}원 입니다 `)


}

