import { addFilterFunctionality, createDescriptionHtml, amountOfProductsInShoppingcartIcon } from "./functions";


window.addEventListener("load", () => {
  amountOfProductsInShoppingcartIcon();
});


amountOfProductsInShoppingcartIcon();

window.onload = function () {
  createDescriptionHtml(); //skapa html med just DEN varan

  //eventListener för att gå till shoppingCart.html
  let cartSymbol: HTMLAnchorElement = document.getElementById(
    "shoppingCartSymbol"
  ) as HTMLAnchorElement;
  cartSymbol.addEventListener("click", () => {
    window.location.href = "shoppingCart.html"; //annan sökväg jämfört med från startpage.html
  });

  let unfilteredProducts: HTMLAnchorElement = document.getElementById(
    "allProducts"
  ) as HTMLAnchorElement;
  unfilteredProducts.addEventListener("click", () => {
    window.location.href = "index.html";
  });
};
