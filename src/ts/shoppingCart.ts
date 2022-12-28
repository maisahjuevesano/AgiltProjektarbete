// import { stringify } from "querystring";
// import { noDouble, products } from "./main";
import { Product } from "./models/Products";
//import { articlePrice } from "../ts/products";
let rootDiv: HTMLDivElement = document.getElementById("root") as HTMLDivElement;
let cartProducts: Product[] = JSON.parse(
  localStorage.getItem("cartList") || "[]"
);

window.onload = function () {
  totalAmount(cartProducts);
  startUp();
  noDouble();
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
//test 1
export function noDouble() {
  for (let i = 0; i < cartProducts.length; i++) {
    let selectedAmount = cartProducts[i].amount;
    // let selectedAmountText = selectedAmount.toString();

    for (let x = 0; x < cartProducts.length; ++x) {
      if (i !== x) {
        if (cartProducts[i].id === cartProducts[x].id) {
          cartProducts.splice(x, 1);
          cartProducts[i].amount++;
          newAmountOfProducts(cartProducts);
        }
      }
    }
  }
  console.log(cartProducts);
}

export const showShoppingCart = (cartProducts: Product[]) => {
  // noDouble();

  rootDiv.innerHTML = "";
  if (cartProducts.length === 0) {
    let emptyText: HTMLHeadingElement = document.createElement("h3");
    emptyText.innerHTML = "Din varukorg är tom!";
    rootDiv.appendChild(emptyText);
  } else {
    for (let i = 0; i < cartProducts.length; i++) {
      //för mina knappar
      let amountContainer: HTMLDivElement = document.createElement("div");
      let amountNumber: HTMLParagraphElement = document.createElement("p");
      let addIcon: HTMLDivElement = document.createElement("div");
      let subIcon: HTMLDivElement = document.createElement("div");

      //klasser så jag kan styla
      amountContainer.classList.add("amountContainer");
      amountNumber.classList.add("amountContainer__number");
      addIcon.classList.add("amountContainer__addIcon");
      subIcon.classList.add("amountContainer__subIcon");

      let cartArticle: HTMLDivElement = document.createElement("div");
      cartArticle.className = "article--container";

      let articleImg: HTMLImageElement = document.createElement("img");
      articleImg.src = cartProducts[i].imageUrl;
      articleImg.alt = cartProducts[i].name;
      articleImg.className = "article--pic";

      let articleTitle: HTMLParagraphElement = document.createElement("p");
      articleTitle.innerHTML = cartProducts[i].name;

      // let articleAmount: HTMLParagraphElement = document.createElement("p");
      // let amountText = cartProducts[i].amount.toString();
      // articleAmount.innerHTML = amountText + " st";

      let articlePrice: HTMLParagraphElement = document.createElement("p");
      let priceText = cartProducts[i].price.toString();
      articlePrice.innerHTML = priceText + " kr";

      let removeArticle: HTMLSpanElement = document.createElement("span");
      removeArticle.className = "delete--article";
      removeArticle.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

      let selectedAmount = cartProducts[i].amount;
      let selectedAmountText = selectedAmount.toString();

      addIcon.addEventListener("click", () => {
        selectedAmount++;
        console.log(selectedAmount);
        selectedAmountText = selectedAmount.toString();
        amountNumber.innerHTML = `${selectedAmountText} st`;
        cartProducts[i].amount++;
        newAmountOfProducts(cartProducts);
        totalAmount(cartProducts);
        console.log(cartProducts);
      });

      subIcon.addEventListener("click", () => {
        selectedAmount--;
        selectedAmountText = selectedAmount.toString();
        amountNumber.innerHTML = `${selectedAmountText} st`;
        if (cartProducts[i].amount >= 1) {
          cartProducts[i].amount--;
          newAmountOfProducts(cartProducts);
        }
        if (selectedAmount < 1) {
          let index = cartProducts.indexOf(cartProducts[i]);
          cartProducts.splice(index, 1);
          console.log("Ny varukorg: ", cartProducts);
          localStorage.setItem("cartList", JSON.stringify(cartProducts));
          showShoppingCart(cartProducts);
        }
        console.log(selectedAmount);
        totalAmount(cartProducts);
        console.log(cartProducts);
      });

      addIcon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
      amountNumber.innerHTML = `${selectedAmountText} st`;
      subIcon.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;

      removeArticle.addEventListener("click", () => {
        let index = cartProducts.indexOf(cartProducts[i]);
        cartProducts.splice(index, 1);
        console.log("Ny varukorg: ", cartProducts);
        localStorage.setItem("cartList", JSON.stringify(cartProducts));
        showShoppingCart(cartProducts);
      });

      cartArticle.appendChild(articleImg);
      cartArticle.appendChild(articleTitle);
      // cartArticle.appendChild(articleAmount);
      cartArticle.appendChild(articlePrice);
      cartArticle.appendChild(amountContainer);
      amountContainer.appendChild(subIcon);
      amountContainer.appendChild(amountNumber);
      amountContainer.appendChild(addIcon);
      cartArticle.appendChild(removeArticle);
      rootDiv.appendChild(cartArticle);
      // noDouble();
    }
  }
};

const totalAmount = (articlePrice: Product[]) => {
  let container: HTMLDivElement = document.createElement("div");
  let motherContainer: HTMLDivElement = document.getElementById(
    "root_sum"
  ) as HTMLDivElement;
  let sum: number = 0;
  let sumText = "";
  container.innerHTML = "";
  motherContainer.innerHTML = "";

  for (let i = 0; i < articlePrice.length; i++) {
    sum += articlePrice[i].price * articlePrice[i].amount;
  }
  sumText = sum.toString();
  container.innerHTML = sumText;
  motherContainer.appendChild(container);
  console.log(sum);
  return sum;
};

function newAmountOfProducts(cartProducts: Product[]) {
  localStorage.setItem("cartList", JSON.stringify(cartProducts));
}

//let displaySum: HTMLDivElement = document.createElement("div");
//displaySum.innerHTML = totalAmount + "kr";

//den lyckas inte få in data från listan
