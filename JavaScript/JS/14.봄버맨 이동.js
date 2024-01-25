const boomber = document.querySelector(".big");
const boom = document.getElementById("wrap")
let sum1 = 0;
let sum2 = 0;

document.addEventListener("keydown", function(e){
     


        switch(e.key){
         
            case "ArrowLeft":
            sum1 -= 10;
             boomber.style.left = sum1 + "px";
            break;
          

            case "ArrowRight":
            sum1 += 10;
            boomber.style.left = sum1 + "px";
            break;

            case "ArrowUp":
            sum2 -= 10;
            boomber.style.top = sum2 + "px";
            break;

            case "ArrowDown":
            sum2 += 10;
            boomber.style.top = sum2 + "px";
            break;

            case "x":
            boom.innerHTML += `<img src="../img/boom.png" alt="" class="img" style="transform:translate3d(${sum1}px, ${sum2}px, 0)">`;
            break;

            
            default:
                alert("방향키와 x만 가능")
             break;

             
    
            
    
        }

      
      

    })






 
 



