/* 매개변수, 전달인지 */

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달 받아 출력하는 함수
function print1 (num, str){// 함수 선언
    // 함수 정의 
    console.log(`${num} 은/는 ${str}입니다`);
}

    

/* #btn1 클릭 시 #input1의 값을 읽어와 print() 함수 호출 */

btn1.addEventListener("click", function(){
    const value = input1.value;

   if(isNaN(value) || value.trim().length == 0){
      console.log("숫자를 입력해주세요")
      return ; // 함수 종료 + 호출한 곳으로 돌아감
   }else{
           
   }
   

   let result;

   if(Number(value) == 0) result ="0";
   else if(Number(value) > 0) result = "양수";
   else                       result = "음수";

 /* 함수 호출(값 전달) */
 /* 중요!! 전달되는 값의 순서가 중요하다 */
   print1(Number(value), result);

})
/* 매개변수로 배열 전달하기 */



function arrayTest(arr){
  // 전달 받은 배열의 모든 요소 출력하기

  for(let i = 0; i < arr.length; i++){

      if(arr[i] == '멜론') arr[i] = "딸기";
  

      console.log(`${i}번의 인덱스값 :`  + arr[i]);
  }

}


// #btn2a 클릭 되었을 떄 arrayTest()  함수 호출

document.querySelector("#btn2a").addEventListener("click", function(){


   const arr1 = [10, 20, 30];
   const arr2 = ["사과", "바나나", "멜론"];





arrayTest(arr1);
arrayTest(arr2);

console.log("arr2[2] :" , arr2[2] )

// 왜 멜론이 아니라 딸기가 출력될까?
// ->arrayTest(arr2) 호출시
// arr2 배열을 통째로 복사해서 전달하는 것이 아닌
// arr2에 저장된 주소만 보내서 함수를 수행

//arrayTest() 함수에서 arr2와 같은 배열을 참조해서 수정

//- > 함수 수행 후 돌아와서도
// 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음


/* 
 참조란?
 - 객체 지향 언어에서
 배열, 객체 등 object는 값을 여러개 가지고 있는 자료형인데 변수는 값을 1개만 저장할 수 있기 때문에

 object 얘네는 메모리 다른곳에 저장하고
 지정된 곳의 주소를 변수에 저장해서

 필요할때 마다 해당 주소를 찾아가
 원하는 값을 얻어오거나 수정할 수 있게 하는 것

 == 주소를 찾아 가는 것을 == [참조]

*/





})

//매개 변수로 요소 전달


function btn2bFn(el){
    // 매개변수 el (element) : 이벤트가 발생한 요소
    el.style.backgroundColor = "yellow";
}

// 매개변수로 함수 전달

function print2(sum){
    console.log(`a + b = ${sum(3, 4)}`);
}

document.querySelector("#btn2c").addEventListener("click", function(){
    // 함수도 변수에 저장 가능 ! 변수명 == 함수명

    const sumFn = function(a, b){
                return a + b; 


                // 함수를 끝내고 호출한 곳으로 돌아감 
                // a, b 를 + 한 값을 가지고 호출한 곳으로 돌아간다는 뜻
    }

    print2(sumFn);
})

// 전달 받은 수 x제곱하여 반환
function pow(num, x){
    let result = 1; //곱했을 때 결과에 영향을 주지 않기 위해 1 초기화

    for(let i = 0; i < x; i++){
        result *= num;
    }

    return result;
}

function sumFn(looz){
     let count = 0;

     for(let i = 0; i < looz.length; i++){
        count += looz[i];
     }

     return count;
}


document.querySelector("#btn3a").addEventListener("click", function(){
    const numbers = []; //비어있는 배열 생성

    // 배열.push(값) : 배열의 마지막 요소로 값을 추가
    numbers.push(1);
    numbers.push(2);
    numbers.push(4);
    numbers.push(3);

    numbers.push( pow(2,5) )


   /*  console.log(numbers) */
     
   
   console.log("합계 : ", sumFn(numbers));

})

//화살표 함수 --------------------------------------


const arrowList = document.querySelectorAll(".arrow");

//화살표 함수 기본 형태

arrowList[0].addEventListener("click", () => {
    alert("화살표 함수 기본 형태 연습")
});


//매개변수가 1개인 경우 : e => {} 이런식으로 소괄호 생략가능
//or (e) => {}

function print3(otherFn){
  const numbers = [1,2,3,4];
  console.log( otherFn(numbers) );
  
  
  arrowList[1].addEventListener("click", e => {
      e.target.style.backgroundColor = "green";
  
      print3( arr => {
              let result = 0;
  
              for(let i = 0; i < arr.length; i++){
                  result += arr[i];
              }
  
              return result;
      } );
  }) 
}





// 화살표함수의 매개변수가 1개일땐 소괄호 생략 가능 
 // e = 매개변수 = 그 태그에 이벤트 관련 정보가 담겨있는 객체
 // e.target = 이벤트가 발생한 요소



 //------------------------------------------------ return 한 줄만 작성된 경우

 function twoNumberPlus( otherFn ) {
    const input1 = Number(prompt("첫 번째 값"));
    const input2 = Number(prompt("두 번째 값"));

    alert( otherFn(input1, input2) );
 }

 arrowList[2].addEventListener("click", () => {
     
    twoNumberPlus( (a, b) => a + b );
    //return 이 한줄만 있는 경우 중괄호와 return 키워드 생략가능
    // 원래는 {return a + b } 형태인데 ->  a + b 
   

 }) //매개 변수가 없어도 소괄호 생략 불가


 //------------------return 한 줄인데 object 반환하는 경우

 function printObject(otherFn){
     const obj = otherFn( "홍길동", 20 );

     console.log(`obj.name : ${obj.name}`);
     console.log(`obj.age : ${obj.age}`);


 }

 arrowList[3].addEventListener("click", () => {
      
        printObject( (name, age) => {
              return {"name" : name, "age" : age};
              //JS 객체 {k:v , k:v}
        } );


 })



// 즉시 실행 함수

( () => {
    console.log("즉시 실행 함수입니다")
    console.log("함수 모양이 좀 어렵죠")
})()





