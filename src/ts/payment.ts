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

};
