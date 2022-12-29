import { showAllProducts } from "./functions";
import { Product } from "./models/Products";

window.onload = function () {
  goToShoppingCart();
  console.log("tjo");
  getProductDetailsFromLs();
};

function getProductDetailsFromLs() {
  let productDetails: Product = JSON.parse(
    localStorage.getItem("productDetails") || "[]"
  );
  console.log("Du har klickat på: ", productDetails);
  //   productsToShow.push(productDetails)
  showDescription(productDetails);
}

export const showDescription = (product: Product) => {
  let rootDiv: HTMLDivElement = document.getElementById(
    "productDetailRoot"
  ) as HTMLDivElement;

  let picture: HTMLImageElement = document.createElement("img");
  picture.src = product.imageUrl;
  picture.alt = product.name;

  let title: HTMLHeadingElement = document.createElement("h2");
  title.innerHTML = product.name;

  let productBrand: HTMLParagraphElement = document.createElement("p");
  productBrand.innerHTML = "Märke: " + product.brand;

  let productDescription: HTMLSpanElement = document.createElement("span");
  productDescription.innerHTML = product.description;

  let priceTag: HTMLHeadingElement = document.createElement("h3");
  let price = product.price;
  let priceText = price.toString();
  priceTag.innerHTML = priceText + "kr";

  // let addToCart: HTMLSpanElement = document.createElement("span");
  // addToCart.className = "addToCart";
  // addToCart.id = "addCart";
  // addToCart.innerHTML = `<i class="fas fa-cart-plus"></i>`;

  let goBackBtn: HTMLButtonElement = document.createElement("button");
  goBackBtn.type = "button";
  goBackBtn.innerHTML = "Tillbaka till föregående sida";
  goBackBtn.addEventListener("click", () => {
    history.back();
  });

  rootDiv.appendChild(goBackBtn);
  rootDiv.appendChild(picture);
  rootDiv.appendChild(title);
  rootDiv.appendChild(productDescription);
  rootDiv.appendChild(productBrand);
  rootDiv.appendChild(priceTag);
  // rootDiv.appendChild(addToCart);
};

function goToShoppingCart() {
  let cartSymbol: HTMLAnchorElement = document.getElementById(
    "cart"
  ) as HTMLAnchorElement;

  cartSymbol.addEventListener("click", () => {
    window.location.href = "shoppingCart.html";
  });
}

//filter knappen så man kommer till alla produkter från productDetails

export const filterfromproductdetails = () => {
  let filterallproducts: HTMLAnchorElement = document.getElementById(
    "allProducts"
  ) as HTMLAnchorElement;
  filterallproducts.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
};

filterfromproductdetails();
