import {
  clickableAllProducts,
  getShoppingCartFromLS,
  amountOfProductsInShoppingcartIcon,
  showAmountsInPaymentPage,
  goToShoppingCart,
} from "./functions";
import { CartProduct } from "./models/CartProduct";

window.onload = function () {
  //kunna klicka på alla produkter
  goToShoppingCart();
  clickableAllProducts();
  let cartProducts: CartProduct[] = getShoppingCartFromLS();
  showAmountsInPaymentPage(cartProducts);
  amountOfProductsInShoppingcartIcon();

  //kunna klicka på beställ-knapp
  // let sendme = document.getElementById("payButton") as HTMLButtonElement;
  // sendme.addEventListener("click", () => {
  //   console.log("hej");

  //   window.location.href = "orderConfirmation.html";
  // });
};
