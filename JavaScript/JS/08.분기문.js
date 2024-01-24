function check1(){
    //1부터 10까지 1씩 증가하다가 5가 되면 멈춤;
    
    

    for(let i = 1; i <= 10; i++){
        console.log(i)

       if(i == 5){
           break
       }

    }

}

//무한 반복하는 while 문 멈추기

function check2(){
    
        
        let i = 1;
        while(true){
    
        //10 초과시 멈춤
    
        i++
    
        if(i > 10){
            break
        }
    
    
        }
    }

// countinue 확인하기
function check3(){
    // 1부터 20까지 출력, 단 , 3의 배수는 건너뛰기

   for(let i = 1; i <= 20; i++){

    //3의 배수인 경우

    if(i % 3 == 0){
        continue

        //3의 배수인 경우 아래 코드는 실행하지 않고
        //가장 가까운 반복문으로 다시 돌아가 실행
    }
      
        console.log(i)

   }



}


//1부터 30까지 1씩 증가하며 출력 단, 홀수 또는 10의 배수는 건너 뛰기

function check4(){
  
  for(let i = 1; i <= 30; i++){

     if(i % 2 == 1 || i % 10 == 0){
          continue

     }
  
     console.log(i)

  }


}

//0 ~ 9 까지 5줄 출력
 // 각줄에서 4의 배수는 건너뛰기
 // 3번째 줄 출력 후 멈추기

function check5(){
    

  for(let i = 1; i <= 5; i++){
    let str = "";

    


     for(let k = 0; k <= 9; k++){
         
         if(k % 4 == 0 && k != 0){
            continue
         }
         str += k;
     }
  console.log(str)

  if(i == 3){
    break
  }
    
  }

}




function startGame(){

  let randomCount = Math.floor(Math.random() * 101);

  let input;

  while(true){
    input = prompt("숫자를 입력하세요");

     if(input === null){
        break;
     }


     if(1 > input || input > 100){
        alert("1부터 100사이 숫자를 입력하세요");
     }else if(input > randomCount){
        alert("입력한 숫자보다 큽니다")
     }else if(input < randomCount){
        alert("입력한 숫자보다 작습니다")
     }else{
        alert("정답입니다 : 게임 종료")
        break;
     }

  }








}