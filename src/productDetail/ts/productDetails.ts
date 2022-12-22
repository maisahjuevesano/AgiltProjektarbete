import { cartProducts } from "../../ts/main";
import { Product } from "../../ts/models/Products";

window.onload = function () {
  console.log("tjo");
  getProductDetailsFromLs();
};

function getProductDetailsFromLs() {
  let productDetails: Product = JSON.parse(
    localStorage.getItem("productDetails") || "[]"
  );
  console.log(productDetails);
  //   productsToShow.push(productDetails)
  showDescription(productDetails);
}

export const showDescription = (product: Product) => {
  let rootDiv: HTMLDivElement = document.getElementById(
    "root"
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

  let addToCart: HTMLSpanElement = document.createElement("span");
  addToCart.className = "addToCart";
  addToCart.id = "addCart";
  addToCart.innerHTML = `<i class="fas fa-cart-plus"></i>`;

  rootDiv.appendChild(picture);
  rootDiv.appendChild(title);
  rootDiv.appendChild(productDescription);
  rootDiv.appendChild(productBrand);
  rootDiv.appendChild(priceTag);
  rootDiv.appendChild(addToCart);

  // addToCart.addEventListener("click", () => {});
};
