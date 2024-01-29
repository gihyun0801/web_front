document.getElementById("btn1").addEventListener("click", () => {


         //정규표현식 객체 생성
        const regExp1 = new RegExp("script");
        // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

        const regExp2 = /java/;
                    //"java"와 일치하는 문자열이 있는지 검사하는 정규표현식

          const str1 = "저희는 지금 javascript를 공부하고 있습니다";
          const str2 = "jsp(java server page)도 나중에 할겁니다";
          const str3 = "java, java, java";

      

    
          
          console.log("regExp1.test(str1) : " + regExp1.test(str1));
          console.log(regExp1.exec(str1));


          console.log("regExp2.test(str1) : " + regExp2.test(str2));
          console.log(regExp2.exec(str2));
});  

document.getElementById("btn2").addEventListener("click", function(){

   

     const div1 = document.getElementById("div1");

     // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
     
     const regExp1 = /a/;
     div1.innerHTML += "/a/, apple :" + regExp1.test("apple") + "<hr>"
     div1.innerHTML += "/a/, price" +  regExp1.test("price") + "<hr>"


     //[abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색;

     const regExp2 = /[abcd]/;
     div1.innerHTML += `/[abcd] , apple` + regExp2.test("apple") + "<hr>";
    

     // ^ (캐럿) : 문자열의 시작을 의미

     const regExp3 = /^group/; //문자열의 시작이 group인지 확인
     div1.innerHTML += `/^group/ , group100` + regExp3.test("group100") + "<hr>";
     div1.innerHTML += `/^group/ , group100` + regExp3.test("100group") + "<hr>";


     // $ (달러) : 문자열의 끝을 의미

     const regExp4 = /group$/;//문자열의 끝이 group인지 확인

     div1.innerHTML += regExp4.test("100group");

    })

//이름 유효성 검사하기

    const input = document.getElementById("inputName");
 

    input.addEventListener("keyup", (e) => {

        const span = document.getElementById("inputNameResult");

        const regExp1 = /^[ㄱ-힣]{2,5}$/;

        //빈칸인지 검사

        if(input.value.trim().length == 0){
            alert("글자를 입력하세요");
            span.innerText = '';
            return;
        }

        if(regExp1.test(input.value)){
              

              span.style.color = "green";
              span.innerText = "유효한 이름 형식입니다";



        }else{
            span.innerText = "이름형식이 유효하지않습니다";
            span.style.color = "red"
        }



        


    })


 // 주민등록번호 유효성 검사

 document.getElementById("inputPno").addEventListener("keyup", (e) => {

    const span = document.getElementById("inputPnoResult");

    if(e.target.value.trim().length == 0){

        span.style.color = "red";
        span.style.fontWeight = "bold";
        span.innerText = "주민번호를 작성해주세요";

        return;
    }else{

       
    

    }


    const regExp = /^\d{6}\-\d{7}$/;

    if(regExp.test(e.target.value)){
        span.style.color = "green";
        span.style.fontWeight = "bold";
        span.innerText = "유효한 주민번호 형식입니다";
    }else{
        span.style.color = "red";
        span.style.fontWeight = "bold";
        span.innerText = "유효하지 않습니다";
    }

 })
 
 


     



   


