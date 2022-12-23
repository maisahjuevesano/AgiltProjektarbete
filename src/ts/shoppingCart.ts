import { Product } from "./models/Products";
let rootDiv: HTMLDivElement = document.getElementById("root") as HTMLDivElement;
window.onload = function () {
  let cartProducts: Product[] = JSON.parse(
    localStorage.getItem("storageList") || "[]"
  );

  startUp();
  showShoppingCart(cartProducts);
  console.log(cartProducts);

  let emptyBtn = document.getElementById("emptyCart") as HTMLButtonElement;
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

function startUp() {
  let orderContainer: HTMLParagraphElement = document.getElementById(
    "container__ordernumber"
  ) as HTMLParagraphElement;

  let pay: HTMLButtonElement = document.getElementById(
    "pay"
  ) as HTMLButtonElement;

  pay.addEventListener("click", () => {
    window.location.href = "../pages/orderConfirmation.html";
  });
}

// pay.addEventListener("click", () => {
//   let orderNumber: number = Math.floor(Math.random() * 999999 + 111111);
//   console.log(orderNumber);

//   let orderNumberText: string = orderNumber.toString();
//   console.log(orderNumberText);
//   orderContainer.innerHTML = orderNumberText;

//   orderNumberEvent(orderNumberText);
// });

// function orderNumberEvent(orderNumberText: string) {
//   let orderNumberContainer: HTMLDivElement = document.createElement("div");

//   orderNumberContainer.innerHTML;
// }

// console.log(pay);

const showShoppingCart = (cartProducts: Product[]) => {
  for (let i = 0; i < cartProducts.length; i++) {
    let cartArticle: HTMLDivElement = document.createElement("div");
    cartArticle.className = "article--container";

    let articleImg: HTMLImageElement = document.createElement("img");
    articleImg.src = cartProducts[i].imageUrl;
    articleImg.alt = cartProducts[i].name;
    articleImg.className = "article--pic";

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
