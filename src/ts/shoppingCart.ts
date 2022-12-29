import {
  addEmptyShoopingCart,
  beingAbleToPay,
  createshoppingCartHtml,
  totalAmount,
} from "./functions";
import { CartProduct } from "./models/CartProduct";

window.onload = function () {
  let cartProducts: CartProduct[] = JSON.parse(
    localStorage.getItem("cartList") || "[]"
  );

  let unfilteredProducts: HTMLAnchorElement = document.getElementById(
    "allProducts"
  ) as HTMLAnchorElement;
  unfilteredProducts.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  console.log("Din varukorg: ", cartProducts);
  // addFilterFunctionality(); //möjlighet att filtrera efter kategori
  beingAbleToPay(); //eventListener på "gå vidare"-knapp
  addEmptyShoopingCart(cartProducts); //eventListener på "töm hela varukorgen"-knapp
  totalAmount(cartProducts); //räknar ut totalbelopp att betala i varukorg
  createshoppingCartHtml(cartProducts); //skapar html för varukorgens varor
};
