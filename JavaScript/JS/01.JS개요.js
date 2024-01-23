function externalFn(){
    alert("외부 파일에 작성된 externalFn 함수가 호출됨")
}

/* 버튼 클릭시 body 태그의 글자색, 배경색을 변경 */

const body = document.querySelector("body");
/*
 body 태그를 선택 */

function darkMode(){
    body.style.color = "white";
    body.style.backgroundColor = "black"
}

function lightMode(){
   body.style.color = "black";
   body.style.backgroundColor = "white"
}

btn.addEventListener("click", function(){
    body
})