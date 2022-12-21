import { Product } from "../../ts/models/Products";

window.onload = function () {
  console.log("tjo");
  getProductDetailsFromLs();
};

let productsToShow: Product[] = [];

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

  let title: HTMLHeadingElement = document.createElement("h1");
  title.innerHTML = product.name;

  let productBrand: HTMLParagraphElement = document.createElement("p");
  productBrand.innerHTML = product.brand;

  let productDescription: HTMLSpanElement = document.createElement("span");
  productDescription.innerHTML = product.description;

  //   let priceTag: HTMLParagraphElement = document.createElement("p");
  //   let price = product.price;
  //   let priceText = price.toString();

  //   priceTag.innerHTML = priceText;

  rootDiv.appendChild(picture);
  rootDiv.appendChild(title);
  rootDiv.appendChild(productBrand);
  rootDiv.appendChild(productDescription);
  //   rootDiv.appendChild(priceTag);
};

// }

// export function startup(product: string) {
//   // alert("tjena");
//   console.log("testar lite");
//   window.open("productDetail/productDetails.html");
//   console.log(product);
//   let title: HTMLHeadingElement = document.createElement("h2");

//   title.innerHTML = product;
//   let rootDiv: HTMLDivElement = document.getElementById(
//     "root"
//   ) as HTMLDivElement;

//   rootDiv.appendChild(title);

//   // window.open("https://www.google.com", "_blank");
//   // window.open("/src/products/productDetails.html", "_blank");

//   //funkar ej, mst ha fler parcel local host igång??
// }
