import { Product } from "../../ts/models/Products";

let theShoppingCart: Product[] = [];

export function addToShoppingCart(product: Product) {
  //   let addBtn: HTMLSpanElement = document.getElementById(
  //     "addCart"
  //   ) as HTMLSpanElement;
  theShoppingCart.push(product);

  localStorage.setItem("shoppingCart", JSON.stringify(theShoppingCart));
  //   product.amount = product.amount + 1;

  //   if (product.amount < 2) {
  //     theShoppingCart.push(product);
  //     console.log(theShoppingCart);
  //   } else {
  //     product.amount = product.amount + 1;
  //   }
}

// function sendToCartLs(product: Product) {
//   localStorage.setItem("shoppingCart", JSON.stringify(product));
//   // window.open("productDetail/productDetails.html");
// }
