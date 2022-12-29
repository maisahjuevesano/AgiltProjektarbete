// import { prova } from "../productDetail/ts/productDetails";
// import { provaLite } from "../productDetail/ts/productDetails";
import {
  showAllProducts,
  showFryingPans,
  showKnives,
  showSaucePans,
} from "./functions";
import { Product } from "./models/Products";
import { SelectedCartItem } from "./models/SelectedCartItem";
import { products } from "./services/getData";
import { noDouble, showShoppingCart } from "./shoppingCart";

// import { SelectedProduct } from "./models/SelectedProducts";

window.onload = function () {
  createHtml(products);
  showAllProducts();
  addFilterFunctionality();
};

export let cartProducts: Product[] = JSON.parse(
  localStorage.getItem("cartList") || "[]"
);

/************************** 
Sortera på brands-egenskapen:

Global
Fiskars
Ronneby Bruk
Satake 
Jamie Oliver
Lodge
********************************/
export function createHtml(products: Product[]) {
  console.log("Varukorg: ", cartProducts); //visar alla produkter i ens varukorg
  let rootContainer: HTMLDivElement = document.getElementById(
    "root"
  ) as HTMLDivElement;
  rootContainer.innerHTML = "";

  for (let i = 1; i < products.length; i++) {
    let objectContainer: HTMLDivElement = document.createElement("div");
    objectContainer.className = "productContainer";

    let clickableContainer: HTMLDivElement = document.createElement("div");
    clickableContainer.className = "clickContainer";
    // clickableContainer.setAttribute(
    //   "href",
    //   "productDetail/productDetails.html"
    // );

    let picture: HTMLImageElement = document.createElement("img");
    picture.src = products[i].imageUrl;
    picture.alt = products[i].name;

    let title: HTMLParagraphElement = document.createElement("p");
    title.className = "product__title";
    title.innerHTML = products[i].name;

    let price: HTMLParagraphElement = document.createElement("p");
    price.className = "product__price";
    price.innerHTML = products[i].price + "kr";

    let addToCartBtn: HTMLSpanElement = document.createElement("span");
    addToCartBtn.className = "addToCart";
    addToCartBtn.id = "addCart";
    addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i>`;

    clickableContainer.appendChild(picture);
    clickableContainer.appendChild(title);
    clickableContainer.appendChild(price);

    objectContainer.appendChild(clickableContainer);
    objectContainer.appendChild(addToCartBtn);
    rootContainer.appendChild(objectContainer);

    clickableContainer.addEventListener("click", () => {
      window.location.href = "../pages/productDetails.html";

      sendProductDetailsToLs(products[i]);
      // noDouble();
    });

    let cartSymbol: HTMLAnchorElement = document.getElementById(
      "cart"
    ) as HTMLAnchorElement;

    cartSymbol.addEventListener("click", () => {
      window.location.href = "../pages/shoppingCart.html";
    });

    addToCartBtn.addEventListener("click", () => {
      // test();
      handleClick(products[i]);
      console.log("Varukorg: ", cartProducts);
      // noDouble();
    });
  }
}

// listan

export function handleClick(product: Product) {
  cartProducts.push(product);
  localStorage.setItem("cartList", JSON.stringify(cartProducts));
  // console.log("Varukorg: ", cartProducts);
  // noDouble();
}

export function addFilterFunctionality() {
  document
    .getElementById("saucePans")
    ?.addEventListener("click", showSaucePans);
  document
    .getElementById("fryingPans")
    ?.addEventListener("click", showFryingPans);
  document.getElementById("knives")?.addEventListener("click", showKnives);
}

/******************************* */

function sendProductDetailsToLs(product: Product) {
  localStorage.setItem("productDetails", JSON.stringify(product));
}
