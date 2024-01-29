const emptyCart = document.querySelector("#empty-cart");

const cartItem = document.querySelector("#cart");

function addToCart(menu, price) {
    let gimbap = 3000;
    let ramen = 4500;
    let twigim = 5000;
    let dduk = 6000;
    let dongas = 7500;
    let wudong = 5000;

    let gcount = 0;
    let rcount = 0;
    let tcount = 0;
    let dcount = 0;
    let dongasCount = 0;
    let wcount = 0;

    switch (menu) {
        case '김밥':
            gcount++;
            break;
        case '라면':
            rcount++;
            break;
        case '튀김':
            tcount++;
            break;
        case '떡볶이':
            dcount++;
            break;
        case '돈까스':
            dongasCount++;
            break;
        case '우동':
            wcount++;
            break;
        default:
            break;
    }

    emptyCart.style.display = "none";

   cartItem.style.display = "flex";

   cartItem.style.flexDirection = "column";;

   const item = document.createElement("div");
   item.classList.add("cart-item");

   cartItem.append(item);
}