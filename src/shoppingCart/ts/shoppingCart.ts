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
