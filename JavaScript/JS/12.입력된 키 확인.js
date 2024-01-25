const body = document.querySelector("body")
const key = document.querySelectorAll(".key")

/* body.addEventListener("keydown", function(e){
    const li = e.key.toLowerCase()


 if(li == 'q'){
    KeyElement1.style.backgroundColor ="aquamarine"
 }
 if(li == 'w'){
    KeyElement2.style.backgroundColor ="aquamarine"
 }
 if(li == 'e'){
    KeyElement3.style.backgroundColor ="aquamarine"
 }
 if(li == 'r'){
    KeyElement4.style.backgroundColor ="aquamarine"
 }



})

const keyElements = document.querySelectorAll('.key');

const KeyElement1 = keyElements[0];
const KeyElement2 = keyElements[1];
const KeyElement3 = keyElements[2];
const KeyElement4 = keyElements[3];

body.addEventListener("keyup", function(e){
   
    const li = e.key.toLowerCase()

    if(li == 'q'){
     KeyElement1.style.backgroundColor =""
    }
    if(li == 'w'){
        KeyElement2.style.backgroundColor =""
    }
    if(li == 'e'){
        KeyElement3.style.backgroundColor =""
    }
    if(li == 'r'){
        KeyElement4.style.backgroundColor =""
    }
   
   
   
   }) */


/* body.addEventListener("keydown", function(e){

   let idx;

   switch(e.key.toLowerCase()){

         case 'q':
         idx = 0;
         break;

         case 'w':
         idx = 1;
         break;
         
         case 'e':
         idx = 2;
         break;

         case 'r':
         idx = 3;
         break;

         default:
         return;  
      }

      key[idx].style.backgroundColor = "deepPqink";



})

body.addEventListener("keyup", function(e){

   let idx;

   switch(e.key.toLowerCase()){

         case 'q':
         idx = 0;
         break;

         case 'w':
         idx = 1;
         break;
         
         case 'e':
         idx = 2;
         break;

         case 'r':
         idx = 3;
         break;

         default:
         return;  
      }

      key[idx].style.backgroundColor = "";



}) */




document.body.addEventListener("keydown", function(e) {
  let idx;

  switch (e.key.toLowerCase()) {
    case 'q':
      idx = 0;
      break;
    case 'w':
      idx = 1;
      break;
    case 'e':
      idx = 2;
      break;
    case 'r':
      idx = 3;
      break;
    default:
      return;
  }

  key[idx].style.backgroundColor = "deepPink";
});

document.body.addEventListener("keyup", function(e) {
  let idx;

  switch (e.key.toLowerCase()) {
    case 'q':
      idx = 0;
      break;
    case 'w':
      idx = 1;
      break;
    case 'e':
      idx = 2;
      break;
    case 'r':
      idx = 3;
      break;
    default:
      return;
  }

  key[idx].style.backgroundColor = "white";
});


















//문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
//문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A);


