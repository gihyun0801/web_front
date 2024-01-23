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
           
            result3.innerHTML += (`<li>${input3} x ${i}</li>`)
   
       }
    }


}