import { Product } from "../../ts/models/Products";
let rootDiv: HTMLDivElement = document.getElementById("root") as HTMLDivElement;
window.onload = function () {
  let cartProducts: Product[] = JSON.parse(
    localStorage.getItem("storageList") || "[]"
  );

  let emptyBtn = document.getElementById("emptyCart") as HTMLButtonElement;

  showShoppingCart(cartProducts);
  console.log(cartProducts);

  emptyBtn.addEventListener("click", () => {
    emptyShoppingCart(cartProducts);
  });
};

function emptyShoppingCart(cartProducts: Product[]) {
  cartProducts.splice(0, cartProducts.length);
  //   localStorage.clear();
  localStorage.setItem("storageList", JSON.stringify(cartProducts));
  console.log(cartProducts);
  rootDiv.innerHTML = "";
}

const showShoppingCart = (cartProducts: Product[]) => {
  for (let i = 0; i < cartProducts.length; i++) {
    let cartArticle: HTMLDivElement = document.createElement("div");
    cartArticle.className = "articleContainer";

    let articleImg: HTMLImageElement = document.createElement("img");
    articleImg.src = cartProducts[i].imageUrl;

    let articleTitle: HTMLParagraphElement = document.createElement("p");
    articleTitle.innerHTML = cartProducts[i].name;

    let articleAmount: HTMLParagraphElement = document.createElement("p");
    let amountText = cartProducts[i].amount.toString();
    articleAmount.innerHTML = amountText + " st";

    let articlePrice: HTMLParagraphElement = document.createElement("p");
    let priceText = cartProducts[i].price.toString();
    articlePrice.innerHTML = priceText + " kr";

    cartArticle.appendChild(articleImg);
    cartArticle.appendChild(articleTitle);
    cartArticle.appendChild(articleAmount);
    cartArticle.appendChild(articlePrice);

    rootDiv.appendChild(cartArticle);
  }
};
