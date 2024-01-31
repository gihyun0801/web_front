let sum = 0;

function addToCart(menu, price){
  let count = 1;
  

  const emptyCart = document.querySelector("#empty-cart");
  emptyCart.style.display = "none";

  const cart = document.querySelector("#cart")
  const total = document.querySelector("#total");

  cart.style.display = "flex";
  cart.style.flexDirection = "column";

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");

  span1.innerText = menu;

  const number = document.querySelector(".number");
 
  span3.innerHTML = `&times;`;
  span3.classList.add("delete-button");  

  if(menu == "김밥") {

    span2.innerHTML = `<button>+</button>
    <span>1</span>
    <button>-</button>`;

span2.querySelector("button:nth-of-type(1)").addEventListener("click", (e) => {
count++;
const span = span2.querySelector("span");

span.innerText = count;

sum += price;

total.innerText = `합계: ₩${sum} 원`
}) 



span2.querySelector("button:nth-of-type(2)").addEventListener("click", (e) => {

  if(count > 0){
    count--
    const span = span2.querySelector("span");

    span.innerText = count;

    sum -= price;

    total.innerText = `합계: ₩${sum} 원`
  }
})

span3.addEventListener("click", (e) => {

   e.target.parentElement.remove();

   sum -= price * count ;

   total.innerText = `합계: ₩${sum} 원`

})
      
  
  }


  if(menu == "라면"){
    span2.innerHTML = `<button>+</button>
    <span>1</span>
    <button>-</button>`;

    span2.querySelector("button:nth-of-type(1)").addEventListener("click", (e) => {
      count++;
      const span = span2.querySelector("span");
      
      span.innerText = count;
      
      sum += price;
      
      total.innerText = `합계: ₩${sum} 원`
      }) 
      
      
      
      span2.querySelector("button:nth-of-type(2)").addEventListener("click", (e) => {
      
        if(count > 0){
          count--
          const span = span2.querySelector("span");
      
          span.innerText = count;
      
          sum -= price;
      
          total.innerText = `합계: ₩${sum} 원`
        }
      })     
      span3.addEventListener("click", (e) => {

        e.target.parentElement.remove();
     
        sum -= price * count ;
     
        total.innerText = `합계: ₩${sum} 원`
     
     })
  }

  if(menu == "튀김"){
    span2.innerHTML = `<button>+</button>
    <span>1</span>
    <button>-</button>`;

    span2.querySelector("button:nth-of-type(1)").addEventListener("click", (e) => {
      count++;
      const span = span2.querySelector("span");
      
      span.innerText = count;
      
      sum += price;
      
      total.innerText = `합계: ₩${sum} 원`
      }) 
      
      
      
      span2.querySelector("button:nth-of-type(2)").addEventListener("click", (e) => {
      
        if(count > 0){
          count--
          const span = span2.querySelector("span");
      
          span.innerText = count;
      
          sum -= price;
      
          total.innerText = `합계: ₩${sum} 원`
        }
      })     

      span3.addEventListener("click", (e) => {

        e.target.parentElement.remove();
     
        sum -= price * count ;
     
        total.innerText = `합계: ₩${sum} 원`
     
     })
  }


  if(menu == "떡볶이"){
    span2.innerHTML = `<button>+</button>
    <span>1</span>
    <button>-</button>`;

    span2.querySelector("button:nth-of-type(1)").addEventListener("click", (e) => {
      count++;
      const span = span2.querySelector("span");
      
      span.innerText = count;
      
      sum += price;
      
      total.innerText = `합계: ₩${sum} 원`
      }) 
      
      
      
      span2.querySelector("button:nth-of-type(2)").addEventListener("click", (e) => {
      
        if(count > 0){
          count--
          const span = span2.querySelector("span");
      
          span.innerText = count;
      
          sum -= price;
      
          total.innerText = `합계: ₩${sum} 원`
        }
      })    
      
      span3.addEventListener("click", (e) => {

        e.target.parentElement.remove();
     
        sum -= price * count ;
     
        total.innerText = `합계: ₩${sum} 원`
     
     })
  }




  if(menu == "돈까스"){
    span2.innerHTML = `<button>+</button>
    <span>1</span>
    <button>-</button>`;

    span2.querySelector("button:nth-of-type(1)").addEventListener("click", (e) => {
      count++;
      const span = span2.querySelector("span");
      
      span.innerText = count;
      
      sum += price;
      
      total.innerText = `합계: ₩${sum} 원`
      }) 
      
      
      
      span2.querySelector("button:nth-of-type(2)").addEventListener("click", (e) => {
      
        if(count > 0){
          count--
          const span = span2.querySelector("span");
      
          span.innerText = count;
      
          sum -= price;
      
          total.innerText = `합계: ₩${sum} 원`
        }
      })     

      span3.addEventListener("click", (e) => {

        e.target.parentElement.remove();
     
        sum -= price * count ;
     
        total.innerText = `합계: ₩${sum} 원`
     
     })
  }



  if(menu == "우동"){
    span2.innerHTML = `<button>+</button>
    <span>1</span>
    <button>-</button>`;

    span2.querySelector("button:nth-of-type(1)").addEventListener("click", (e) => {
      count++;
      const span = span2.querySelector("span");
      
      span.innerText = count;
      
      sum += price;
      
      total.innerText = `합계: ₩${sum} 원`
      }) 
      
      
      
      span2.querySelector("button:nth-of-type(2)").addEventListener("click", (e) => {
      
        if(count > 0){
          count--
          const span = span2.querySelector("span");
      
          span.innerText = count;
      
          sum -= price;
      
          total.innerText = `합계: ₩${sum} 원`
        }
      })     

      span3.addEventListener("click", (e) => {

        e.target.parentElement.remove();
     
        sum -= price * count ;
     
        total.innerText = `합계: ₩${sum} 원`
     
     })
  }

  

        


  cartItem.append(span1, span2, span3);
  cart.append(cartItem);

  sum += price;

  total.innerText = `합계: ₩${sum} 원`






}