//배열 선언 및 기초 사용법
function check1(){
    

    // 배열 선언 방법 확인
    const array1  = new Array();
    const array2 = new Array(3);
    const array3 = [];
    const array4 = ["사과", "바나나", "딸기"];

    console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(array4);

    // 배열명.length : 배열의 길이(배열에 있는 칸 수 또는 저장된 데이터 수)

    console.log(array1.length);
    console.log(array2.length);
    console.log(array3.length);
    console.log(array4.length);

    // 배열의 index
    /* 
     - 배열의 각 칸을 구분하는 번호
     - 0 부터 시작 !
     - 중간에 번호를 생략할 수 없다(항상 연속적)
     - 마지막 index == 배열길이의 - 1  */

     //배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환

     array2[0] = 100;
     array2[1] = "점심먹자";
     array2[2] = true;

     console.log(array2)
     // JS 배열의 특징 : 인덱스별로 자료형을 다르게 할 수 있다!

     // 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능

     array1[0] = "가";
     array1[1] = "나";
     array1[2] = "다";
     array1[4] = "다";

     console.log(array1)

     //원하는 index에 값을 마음대로 추가할 수 있다
     // -> 중간에 건너튄 index는 빈칸으로 채워짐

}

function check2(){
    // for 문을 이용해서 배열 요소 초기화 하기
    // 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것
    // index : 배열의 각 칸을 구분하는 번호
    // 배열 요소 == 배열의 각 칸

    //for x 

    const arr1 = [];

    arr1[0] = "좋아했다"
    arr1[1] = "사랑했다"
    arr1[2] = "아펐다"
    arr1[3] = "지웠다"

    console.log(arr1);

    //for o

    const arr2 = [];

    for(let i = 0; i <= 3; i++){
        arr2[i] = i * 10
    }

    console.log(arr2)
}

// 배열과 for문 2

function check3(){
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for문을 이용해서 배열의 모든 요소 접근하기


    const arr = [10, 20, 50, 100, 500, 1000];

    for(let i = 0; i <= arr.length - 1; i++){
        console.log(`arr[${i}] == ${arr[i]}`)
    }
}


function check4(){
    //for문을 이용해서 배열을 순서대로 초기화 한 후
    // 다른 for문을 이용해서 배열 요소를 하나씩 모두 출력

    const arr = new Array(5); // 5칸 짜리 배열

    // 1. 배열을 순서대로 초기화

    for(let i = 0; i <= arr.length - 1; i++){
        arr[i] = Number(prompt(`${i} 번째 숫자 입력`));
    }

    // 2. 배열 요소를 하나씩 모두 출력 + sum

    let sum = 0;

    for(let i = 0; i <= arr.length -1; i++){
         console.log(`arr[${i}] : ${arr[i]}`);
         sum += arr[i];
    }

    console.log("sum : " , sum);
}

function selectMenu(){
  
    const menuResult = document.getElementById("menuResult");

    // 저녁 메뉴로 초기화된 배열 생성

    const menu =["갈비찜", "스파게티", "피자", "마라탕", "엽떡", "삼겹살"];

 
  // menu 배열 index 범위 내에서 난수 생성
  const randomNumber = Math.floor(Math.random() * menu.length);

  menuResult.textContent = menu[randomNumber];
 

}

function check5(){
    const arr = [ [1,2,3,4], 
                  [5,6,7,8], 
                  [9,10,11,12] ];

    console.log(arr[1][3]); //8
    console.log(arr[2][2]); //11
    
    const arr1 = [100,200,300,400];
    const arr2 = [900,800,700,600];

    arr[3] = arr1;
    arr[4] = arr2;

    console.log(arr[4][3]); //600
}

//배열명[행][열]

// 2부터 2씩 증가하는 수를
// 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기

function check6(){

 let count = 2;

 const arr  = [];

 for(let i = 0; i <= 4; i++){ //행 제어
       
    arr[i] = [];
    //arr[0] = []
    //arr[1] = []
    //arr[2] = []
    //arr[3] = []
    //arr[4] = []

    for(let col = 0; col < 5; col++){
        arr[i][col] = count; // i행 col열에 count 대입
        count += 2 ; //count를 2증가
        //arr[0][0] = 2
        //arr[0][1] = 4 
        //arr[0][2] = 6
        //arr[0][3] = 8 
        //arr[0][4] = 10
        //-----------------------------
        //arr[1][0] = 12
        //arr[1][1] = 14;
        //...

    }
}
console.log(arr);
}

 
 
