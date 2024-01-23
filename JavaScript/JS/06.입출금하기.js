//prompt 사용 연습
function test(){

    //promt 에서 확인 버튼을 누르면 입력한 문자열이 넘어가고
                //  취소버튼을 누르면 null 값이 넘어간다


   const password = prompt("숫자를 입력하세요", "비밀번호를 입력하라고");

   if(password == null){
       alert("취소버튼을 눌럿습니다")  
   }else{
      
        if(password == '1234'){
            alert("비밀번호 일치");
        }else{
            alert("비밀번호 불일치")
        }
}
}

const amount = document.getElementById("amount"); //금액
const output = document.getElementById("output"); //잔액
const password = '1234'; // 비빌번호 저장 변수
let balance = 0;

function deposit(){

  if(amount.value.length == 0){
    alert("값을 입력해주세요")
  }else{
    
    balance += Number(amount.value);

    output.textContent = balance;

  }


}























/* function deposit(){

const v1 = Number(amount.value); //금액
const v2 = Number(output.value); //잔액


if(amount.value.length == 0){
    alert("금액을 작성해주세요")
}else{
    balance += v1;

    output.textContent = balance;

    amount.value = '';
}

}


function withdrawal(){
   
     if(amount.value.length ==0){
        alert("금액을 입력해주세요")
     }else{

       const password = prompt("비밀번호를 입력하세요")

       if(password == null){
        alert("취소")
       }else{
          // 비밀번호가 일치하지 않을 경우

          if(password !== '1234'){
            alert("비밀번호가 일치하지 않습니다")
          }else{
            //비밀번호가 일치하는 경우

            const money = Number(amount.value);

            if(money > balance){
                alert("출금 금액이 잔액보다 클 수 없습니다.")
            }else{
                balance -= money;

                output.textContent = balance;

                amount.value = '';


                alert(`${money}원이 출금되었습니다. 남은 잔액 ${balance}원`)
            }
          }
       }

     }


} */












/* let balance = 0;


function deposit(){

    balance += Number(amount.value);
   
    output.textContent = balance;


     
   
   }



   function withdrawal(){
      
    const result = prompt("비밀번호를 입력하세요");

    const v1 = Number(output.textContent); // 잔액
    const v2 = Number(amount.value);  

    if(result == null){
        alert("입력이 취소되었습니다")
    }else{
         if(result == password){
            
            
           if(v2 > v1){
            alert("잔액보다 출금 금액이 더 많습니다.");
           }else{
            balance -= v2;
            output.textContent = balance;
           }



         }else{

            alert("비밀번호 불일치")


         }


    }


   } */
 
 




