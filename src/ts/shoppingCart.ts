// import { stringify } from "querystring";
import { products } from "./main";
import { Product } from "./models/Products";
//import { articlePrice } from "../ts/products";
let rootDiv: HTMLDivElement = document.getElementById("root") as HTMLDivElement;
let cartProducts: Product[] = JSON.parse(
  localStorage.getItem("cartList") || "[]"
);

window.onload = function () {
  totalAmount(cartProducts);
  startUp();
  //itemList(cartProducts,products);
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
  localStorage.setItem("cartList", JSON.stringify(cartProducts));
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

const showShoppingCart = (cartProducts: Product[]) => {
  rootDiv.innerHTML = "";
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

      let removeArticle: HTMLSpanElement = document.createElement("span");
      removeArticle.className = "delete--article";
      removeArticle.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

      removeArticle.addEventListener("click", () => {
        let index = cartProducts.indexOf(cartProducts[i]);
        cartProducts.splice(index, 1);
        console.log("Ny varukorg: ", cartProducts);
        localStorage.setItem("cartList", JSON.stringify(cartProducts));
        showShoppingCart(cartProducts);
      });

      cartArticle.appendChild(articleImg);
      cartArticle.appendChild(articleTitle);
      cartArticle.appendChild(articleAmount);
      cartArticle.appendChild(articlePrice);
      cartArticle.appendChild(removeArticle);
      rootDiv.appendChild(cartArticle);
    }
  }
};

const totalAmount = (articlePrice: Product[]) => {
  let sum: number = 0;

  for (let i = 0; i < articlePrice.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let motherContainer: HTMLDivElement = document.getElementById(
      "root_sum"
    ) as HTMLDivElement;
    let sumString: string = sum.toString();
    container.innerHTML = sumString;
    motherContainer.appendChild(container);

    sum += articlePrice[i].price * articlePrice[i].amount;
  }
  console.log(sum);
  return sum;
};

//let displaySum: HTMLDivElement = document.createElement("div");
//displaySum.innerHTML = totalAmount + "kr";

// let displaySum = document.getElementById("root_sum") as HTMLDivElement;
// displaySum.innerHTML = totalAmount + "kr";
