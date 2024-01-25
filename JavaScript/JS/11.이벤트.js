/* 인라인 이벤트 모델 확인 */
function check1 (btn){

    //매개변수 btn  == 클릭한 버튼(this)
  console.log(btn);

  // 버튼의 배경색을 얻어와 저장

  const bgColor = btn.style.backgroundColor;

  console.log(bgColor);

  //버튼이 클릭 될 때 마다 pink <=> yellow 변경

  if(bgColor == "yellow"){
    btn.style.backgroundColor = "pink";
  }else{
    btn.style.backgroundColor = "yellow";
  }
}



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//고전 이벤트 모델 확인

// 아이디가 test1-1 인 요소를 얻어와 test1a 변수에 저장

const test1a = document.querySelector("#test1-1");

// *** 고전 이벤트 모델 작성법 ***

//요소.이벤트리스너 = 이벤트핸들러

test1a.onclick = function(){
    alert("고전 이벤트 모델 확인 버튼 클릭됨")
}

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭시
// #test1-1 의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기

const test2a = document.querySelector("#test1-2");

test2a.onclick = function(){

    //기존 onclick의 이벤트 핸들러를
    //null 로 덮어씌움 (이벤트 제거)
    test1a.onclick = null;
    alert("이벤트 제거 됨")
}

//고전 이벤트 모델 단점
//  #test 1-3 요소를 얻어와 test1c 변수에 저장

const test1c = document.querySelector("#test1-3");
// #test1-3 요소가 클릭 되었을 때 배경색을 red로 변경
test1c.onclick = function(){
    test1c.style.backgroundColor = "red";
}

// 고전 이벤트 작성한 후 나중에 까먹었을때 

// test1-3이 클릭 됐을 때 글자색을 "white" 로 변경 하려고 했다 
test1c.onclick = function(){
    test1c.style.color = "white";
}

// -> onclick 에 저장된 값이 덮어씌워지면서 
// 이전 코드 배경색이 사라지는 문제가 발생


//표준 이벤트 모델 확인하기
/* 
let count = 0;

const test2 = document.querySelector("#test2");

//표준 이벤트 모델

test2.addEventListener("click", function(){
  // 투명도 1 (불투명) ->0(투명) 0.1씩 감소  

  // 현재 #test2 의 투명도 확인

  let curr = test2.style.opacity
  console.log(curr)

  //맨처음에는 투명도 '' 이라서 1을 대입해준다 일단

  if(curr == ''){
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도 0.1감소
  test2.style.opacity = curr - 0.1;

  
  if(test2.style.opacity == 0){
    test2.style.opacity = 1;
  }
});


// #test2 요소를 클릭하면 클릭 횟수 카운트

test2.addEventListener("click", function(){
    count++

    //표준 이벤트 모델의 이벤트 핸들러 안에서 this == 이벤트가 발생한 요소

    this.innerText = count;
}) */

const box3 = document.querySelector("#box3");
const input3 = document.querySelector("#input3");

input3.addEventListener("keyup", function(e){

    const back = input3.value;

   if(e.key == "Enter"){
     box3.style.backgroundColor = `${back}`
   }

})


// #box3 를 클릭하면 현재 배경색을 alert로 출력

box3.addEventListener("click", function(e){

  console.log(e)

      alert(`배경색 : ${e.target.style.backgroundColor}`)

    //e.target : 이벤트가 발생한 대상 요소 

})




