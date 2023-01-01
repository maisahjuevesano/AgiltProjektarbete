import { clickableAllProducts } from "./functions";

window.onload = function () {
  //kunna klicka på alla produkter
  clickableAllProducts();

  //kunna klicka på betala-knapp
  let sendme = document.getElementById("payButton") as HTMLButtonElement;
  sendme.addEventListener("click", () => {
    console.log("hej");

    window.location.href = "orderConfirmation.html";
  });
};
