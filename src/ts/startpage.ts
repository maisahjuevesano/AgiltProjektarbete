import { addFilterFunctionality, amountOfProductsInShoppingcartIcon, startpageCreateHtml } from "./functions";
import { products } from "./services/getData";
import { CartProduct } from "./models/CartProduct";


window.addEventListener("load", () => {
  amountOfProductsInShoppingcartIcon();
});


amountOfProductsInShoppingcartIcon();

window.onload = function () {
  let cartProducts: CartProduct[] = JSON.parse(
    localStorage.getItem("cartList") || "[]"
  );
  console.log("Varukorg: ", cartProducts);
  console.log("Varor som visas: ", products);

  startpageCreateHtml(products);
  addFilterFunctionality(); //möjlighet att filtrera efter kategori
 

  let cartSymbol: HTMLAnchorElement = document.getElementById(
    "shoppingCartSymbol"
  ) as HTMLAnchorElement;
  cartSymbol.addEventListener("click", () => {
    window.location.href = "shoppingCart.html"; //annan sökväg jämfört med från startpage.html
    
  });

 

  
};

