import { clickableAllProducts, getShoppingCartFromLS } from "./functions";
import { CartProduct } from "./models/CartProduct";

window.onload = function () {
  clickableAllProducts();

  let orderNumber: number = Math.floor(Math.random() * 999999 + 111111);
  let orderNumberText: string = orderNumber.toString();
  let confirmationNumber = document.getElementById(
    "orderConfirmationNumber"
  ) as HTMLParagraphElement;
  confirmationNumber.innerHTML = "Ordernummer: " + orderNumberText;

  let cartProducts: CartProduct[] = getShoppingCartFromLS();
  cartProducts.splice(0, cartProducts.length); //töm arrayn
  localStorage.setItem("cartList", JSON.stringify(cartProducts)); //spara den tömda varukorgen
  console.log(cartProducts);
};
