import {
  addFilterFunctionality,
  goToShoppingCart,
  startpageCreateHtml,
} from "./functions";
import { products } from "./services/getData";
import { CartProduct } from "./models/CartProduct";

window.onload = function () {
  let cartProducts: CartProduct[] = JSON.parse(
    localStorage.getItem("cartList") || "[]"
  );
  console.log("Varukorg: ", cartProducts);
  startpageCreateHtml(products);
  addFilterFunctionality(); //möjlighet att filtrera efter kategori

  let cartSymbol: HTMLAnchorElement = document.getElementById(
    "shoppingCartSymbol"
  ) as HTMLAnchorElement;
  cartSymbol.addEventListener("click", () => {
    window.location.href = "pages/shoppingCart.html"; //annan sökväg jämfört med från startpage.html
  });
  // goToShoppingCart(); //eventListener för att gå till shoppingCart.html
};

/************************** 
 * ???? om man vill, 
 * ÄR EJ  mvp
Sortera på brands-egenskapen:
Global
Fiskars
Ronneby Bruk
Satake 
Jamie Oliver
Lodge
********************************/
