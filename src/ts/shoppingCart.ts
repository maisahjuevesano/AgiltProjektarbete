import { Product } from "./models/Products";
let rootDiv: HTMLDivElement = document.getElementById("root") as HTMLDivElement;
let cartProducts: Product[] = JSON.parse(
  localStorage.getItem("storageList") || "[]"
);

window.onload = function () {
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
  showShoppingCart(cartProducts);
}

function startUp() {
  let orderContainer: HTMLParagraphElement = document.getElementById(
    "container__ordernumber"
  ) as HTMLParagraphElement;
  //behövs detta?? ^^

  let pay: HTMLButtonElement = document.getElementById(
    "pay"
  ) as HTMLButtonElement;

  pay.addEventListener("click", () => {
    handlePayClick();
  });
}

function handlePayClick() {
  if (cartProducts.length !== 0) {
    window.location.href = "../pages/orderConfirmation.html";
    emptyShoppingCart(cartProducts);
  } else {
    alert("Ojdå! Ser ut som att din varukorg är tom!");
  }
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
  if (cartProducts.length === 0) {
    let emptyText: HTMLHeadingElement = document.createElement("h3");
    emptyText.innerHTML = "Din varukorg är tom!";
    rootDiv.appendChild(emptyText);
  } else {
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
  }
};
