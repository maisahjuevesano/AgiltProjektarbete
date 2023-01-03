import {
  clickableAllProducts,
  getShoppingCartFromLS,
  showAmountsInPaymentPage,
} from "./functions";
import { CartProduct } from "./models/CartProduct";

window.onload = function () {
  //kunna klicka på alla produkter
  clickableAllProducts();

  let cartProducts: CartProduct[] = getShoppingCartFromLS();
  showAmountsInPaymentPage(cartProducts);

  //kunna klicka på betala-knapp
  let sendme = document.getElementById("payButton") as HTMLButtonElement;
  sendme.addEventListener("click", () => {
    console.log("hej");

    window.location.href = "orderConfirmation.html";
  });
};
