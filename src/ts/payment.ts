import {
  clickableAllProducts,
  getShoppingCartFromLS,
  amountOfProductsInShoppingcartIcon,
  showAmountsInPaymentPage,
} from "./functions";
import { CartProduct } from "./models/CartProduct";


window.onload = function () {
  //kunna klicka på alla produkter
  clickableAllProducts();

  let cartProducts: CartProduct[] = getShoppingCartFromLS();
  showAmountsInPaymentPage(cartProducts);

};


amountOfProductsInShoppingcartIcon();