import { createHtml, products } from "./main";
import { Product } from "./models/Products";

/****************************** */
export const showAllProducts = () => {
  let unfilteredProd: HTMLAnchorElement = document.getElementById(
    "allProducts"
  ) as HTMLAnchorElement;
  unfilteredProd.addEventListener("click", () => {
    createHtml(products);
  });
};

/************************************* */
let knives: Product[] = [];
export const showKnives = () => {
  let results = products.filter((obj) => {
    return obj.category === "Kniv";
  });
  knives = results;
  console.log("Knivar i lista: ", knives);
  createHtml(knives);
};

/************************************************** */
let fryingPans: Product[] = [];
export const showFryingPans = () => {
  let results = products.filter((obj) => {
    return obj.category === "Stekpanna";
  });
  fryingPans = results;
  console.log("Stekpannor i lista: ", fryingPans);
  createHtml(fryingPans);
};

/************************************************** */

let saucePans: Product[] = [];
export const showSaucePans = () => {
  let results = products.filter((obj) => {
    return obj.category === "Kastrull";
  });
  saucePans = results;
  console.log("Stekpannor i lista: ", saucePans);
  createHtml(saucePans);
};
/******************************** */
