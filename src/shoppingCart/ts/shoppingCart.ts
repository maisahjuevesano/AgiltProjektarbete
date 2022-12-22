import { Product } from "../../ts/models/Products";

let emptyBtn = document.getElementById("emptyCart") as HTMLButtonElement;

window.onload = function () {
  let cartProducts: Product[] = JSON.parse(
    localStorage.getItem("storageList") || "[]"
  );

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
}

//hama och maisah

let orderContainer: HTMLParagraphElement = document.getElementById(
  "container__ordernumber"
) as HTMLParagraphElement;

let pay: HTMLButtonElement = document.getElementById(
  "pay"
) as HTMLButtonElement;

//funktion till betala knappen så man kommer till orderConfirmation.html

pay.addEventListener("click", () => {
  window.location.href = "../../orderConfirmation/orderConfirmation.html";
});

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
