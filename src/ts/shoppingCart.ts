import {
  addEmptyShoopingCart,
  beingAbleToPay,
  createShoppingCartHtml,
  amountOfProductsInShoppingcartIcon,
  totalAmount,
  totalAmountOfCartProducts,
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
  totalAmountOfCartProducts(cartProducts); //räknar ut antalet varor i varukorg
  totalAmount(cartProducts); //räknar ut totalbelopp att betala i varukorg
  createShoppingCartHtml(cartProducts); //skapar html för varukorgens varor
  amountOfProductsInShoppingcartIcon();
};


 