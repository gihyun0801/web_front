// window.setTimeout()


const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function(){

  setTimeout(() => {
      alert("1초후 출력!");
  }, 1000)

});


//window.setInterval()

let interval;// setInterval 을 저장하기 위한 전역 변수

// 현재 시간을 문자열로 반환 함수
function currentTime(){

  const now = new Date();
  
  let hour = now.getHours(); // 시
  let minute = now.getMinutes();//분
  let sec = now.getSeconds();//초
   
  if(hour < 10) hour = "0" + hour;
  if(minute < 10) minute = "0" + minute;
  if(sec < 10) sec = "0" + sec;

  return hour + " : " + minute + " : " + sec;
}
 
function clockFn(){
    const clock = document.getElementById("clock");

  
    
    interval = setInterval(() => {
        clock.innerText = currentTime();
    },1000);

}

clockFn(); // 함수 호출

//clearInterval
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
})


