let sum = 0;


function addToCart(menu, price) {
   
   let gimbap = 0; 
   let ramen = 0;
   let twigim = 0;
   let dduk = 0;
   let dongas = 0;
   let wudong = 0;



   let count = 1;

  
   const cart = document.querySelector("#cart");

   const emptyCart = document.querySelector("#empty-cart");

   emptyCart.style.display = "none";
   cart.style.display = "flex";
   cart.style.flexDirection = "column";

   const cartItem = document.createElement("div");
   cartItem.classList.add("cart-item");

   const span1 = document.createElement("span");
   const span2 = document.createElement("span");
   span2.classList.add("quantity")
   const span3 = document.createElement("span");


   span1.innerHTML = menu;

  
   
   const btn1 = document.createElement("button");
   btn1.innerText = '+';
   const btn2 = document.createElement("button");
   btn2.innerText = '-';
   const span4 = document.createElement("span");
   span4.innerHTML = 1;
   span4.classList.add("chu");
   const span5 = document.createElement("span");
   span5.classList.add("delete-button");
   span5.innerHTML = `&times`;
   span3.append(span5);





 

   
   span2.append(btn1, span4, btn2);

   
   cartItem.append(span1, span2, span3);
   cart.append(cartItem);

  

   sum += price;

   btn1.addEventListener("click", () => {
    count++;
    sum += price;
    span4.innerHTML = count;
    
    total.innerHTML = `합계: ₩${sum}`;
    
 

 
   })



   btn2.addEventListener("click", (e) => {
 
  
   

   if(count > 0){
    count--;
    span4.innerHTML = count;
    
    sum -= price;
   }

    if(sum < 0){
        sum = 0;
    }
   
    total.innerHTML = `합계: ₩${sum}`;
   })

   
  
   span5.addEventListener("click", (e) => {
     e.target.parentNode.parentNode.remove();
       
  
   const quan = span4.textContent;
  sum -= quan * price;
  total.innerHTML = `합계: ₩${sum}`;
   })
  

   
   const total = document.querySelector("#total");
   
  

   total.innerHTML = `합계: ₩${sum}`;

   

  

   

  
}


