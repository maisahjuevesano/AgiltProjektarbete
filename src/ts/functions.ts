import { createHtml } from "./main";
import { Product } from "./models/Products";
import { products } from "./services/getData";

/****************************** */
export const showAllProducts = () => {
  let unfilteredProd: HTMLAnchorElement = document.getElementById(
    "allProducts"
  ) as HTMLAnchorElement;
  unfilteredProd.addEventListener("click", () => {
    window.location.href = "../index.html";
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
  // window.location.href = "index.html";
  let rootContainer: HTMLDivElement = document.getElementById(
    "root"
  ) as HTMLDivElement;
  rootContainer.innerHTML = "";
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
  let rootContainer: HTMLDivElement = document.getElementById(
    "root"
  ) as HTMLDivElement;
  rootContainer.innerHTML = "";
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
