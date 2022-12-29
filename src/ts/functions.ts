// import { createHtml } from "./main";
import { Product } from "./models/Products";
import { CartProduct } from "./models/CartProduct";
import { products } from "./services/getData";

//FÖRST hämta sparad varukorg i LS. Lista består av CartProduct-objekt
let cartProducts: CartProduct[] = getShoppingCartFromLS();

//Skriver ut produkter på startsida
export function startpageCreateHtml(products: Product[]) {
  let rootContainer: HTMLDivElement = document.getElementById(
    "rootStart"
  ) as HTMLDivElement;
  rootContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let objectContainer: HTMLDivElement = document.createElement("div");
    objectContainer.className = "productContainer";

    let clickableContainer: HTMLDivElement = document.createElement("div");
    clickableContainer.className = "clickContainer";

    let picture: HTMLImageElement = document.createElement("img");
    picture.src = products[i].imageUrl;
    picture.alt = products[i].name;

    let title: HTMLParagraphElement = document.createElement("p");
    title.className = "product__title";
    title.innerHTML = products[i].name;

    let price: HTMLParagraphElement = document.createElement("p");
    price.className = "product__price";
    price.innerHTML = products[i].price + "kr";

    let addToCartBtn: HTMLSpanElement = document.createElement("span");
    addToCartBtn.className = "addToCart";
    addToCartBtn.id = "addToCartBtn";
    addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i>`;

    clickableContainer.appendChild(picture);
    clickableContainer.appendChild(title);
    clickableContainer.appendChild(price);

    objectContainer.appendChild(clickableContainer);
    objectContainer.appendChild(addToCartBtn);
    rootContainer.appendChild(objectContainer);

    clickableContainer.addEventListener("click", () => {
      //sparar klickade produkten i LS för att sen kunna visa just den produktens beskrivning
      localStorage.setItem("productDetails", JSON.stringify(products[i]));
      //klicka för att komma till produktbeskrivningssida
      console.log("klickat obj: ", products[i]);

      window.location.href = "pages/productDetails.html";
      // createDescriptionHtml(products[i]);
    });

    addToCartBtn.addEventListener("click", () => {
      addToShoppingCart(products[i], cartProducts);
    });
  }
}

//lägger till varor i varukorgen
export const addToShoppingCart = (
  chosenProduct: Product,
  cartProducts: CartProduct[]
) => {
  for (let i = 0; i < cartProducts.length; i++) {
    //Loopa varukorgen för att se om det redan finns varor med samma id där som det man försöker lägga till
    if (cartProducts[i].product.id === chosenProduct.id) {
      cartProducts[i].amount++; //Om id redan finns i varukorg, öka antal
      console.log("Tillagd i varukorgen: ", chosenProduct);
      console.log("Ny varukorg: ", cartProducts);
      localStorage.setItem("cartList", JSON.stringify(cartProducts)); //Spara i LS för varukorgen cartList
      return;
    }
  }

  //Om samma id INTE hittas i varukorgen, skapa nytt objekt för produkten.
  let newCartProduct: CartProduct = new CartProduct(chosenProduct, 0);
  newCartProduct.amount++; //sätt antal = 1
  cartProducts.push(newCartProduct); //lägg till nya objektet i varukorg
  console.log("Varukogen med nytt objekt: ", cartProducts);
  localStorage.setItem("cartList", JSON.stringify(cartProducts)); //Spara i LS för varukorgen cartList
};

/****************************** */

export const goToShoppingCart = () => {
  let cartSymbol: HTMLAnchorElement = document.getElementById(
    "shoppingCartSymbol"
  ) as HTMLAnchorElement;

  cartSymbol.addEventListener("click", () => {
    window.location.href = "pages/shoppingCart.html";
  });
};

/************************************ */

export function getShoppingCartFromLS() {
  let cartProducts: CartProduct[] = JSON.parse(
    localStorage.getItem("cartList") || "[]"
  );
  return cartProducts;
}

/****************************** */

export function addFilterFunctionality() {
  document
    .getElementById("saucePans")
    ?.addEventListener("click", showSaucePans);
  document
    .getElementById("fryingPans")
    ?.addEventListener("click", showFryingPans);
  document.getElementById("knives")?.addEventListener("click", showKnives);

  let unfilteredProducts: HTMLAnchorElement = document.getElementById(
    "allProducts"
  ) as HTMLAnchorElement;
  unfilteredProducts.addEventListener("click", () => {
    startpageCreateHtml(products);
  });
}

/*****************************' */

let knives: Product[] = [];
export const showKnives = () => {
  let results = products.filter((obj) => {
    return obj.category === "Kniv";
  });
  knives = results;
  console.log("Knivar i lista: ", knives);
  let rootContainer: HTMLDivElement = document.getElementById(
    "rootStart"
  ) as HTMLDivElement;
  rootContainer.innerHTML = "";
  startpageCreateHtml(knives);
};

/************************************************** */
let fryingPans: Product[] = [];
export const showFryingPans = () => {
  let results = products.filter((obj) => {
    return obj.category === "Stekpanna";
  });
  fryingPans = results;
  console.log("Stekpannor i lista: ", fryingPans);
  let rootContainer: HTMLDivElement = document.getElementById(
    "rootStart"
  ) as HTMLDivElement;
  rootContainer.innerHTML = "";
  startpageCreateHtml(fryingPans);
};

/************************************************** */

let saucePans: Product[] = [];
export const showSaucePans = () => {
  let results = products.filter((obj) => {
    return obj.category === "Kastrull";
  });
  saucePans = results;
  console.log("Stekpannor i lista: ", saucePans);
  let rootContainer: HTMLDivElement = document.getElementById(
    "rootStart"
  ) as HTMLDivElement;
  rootContainer.innerHTML = "";
  startpageCreateHtml(saucePans);
};
/******************************** */

export const createDescriptionHtml = () =>
  // productToDescribe: Product
  {
    //Hämta tidigare varukorg
    let productToDescribe: Product = JSON.parse(
      localStorage.getItem("productDetails") || "[]"
    );

    console.log("Du har klickat på: ", productToDescribe);

    let rootDiv: HTMLDivElement = document.getElementById(
      "productDetailRoot"
    ) as HTMLDivElement;

    let picture: HTMLImageElement = document.createElement("img");
    picture.src = productToDescribe.imageUrl;
    picture.alt = productToDescribe.name;

    let title: HTMLHeadingElement = document.createElement("h2");
    title.innerHTML = productToDescribe.name;

    let productBrand: HTMLParagraphElement = document.createElement("p");
    productBrand.innerHTML = "Märke: " + productToDescribe.brand;

    let productDescription: HTMLSpanElement = document.createElement("span");
    productDescription.innerHTML = productToDescribe.description;

    let priceTag: HTMLHeadingElement = document.createElement("h3");
    let price = productToDescribe.price;
    let priceText = price.toString();
    priceTag.innerHTML = priceText + "kr";

    let addToCartBtn: HTMLSpanElement = document.createElement("span");
    addToCartBtn.className = "addToCart";
    addToCartBtn.id = "addToCartBtn";
    addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i>`;
    addToCartBtn.addEventListener("click", () => {
      addToShoppingCart(productToDescribe, cartProducts);
    });

    let goBackBtn: HTMLButtonElement = document.createElement("button");
    goBackBtn.type = "button";
    goBackBtn.innerHTML = "Tillbaka till föregående sida";
    goBackBtn.addEventListener("click", () => {
      history.back();
    });

    rootDiv.appendChild(goBackBtn);
    rootDiv.appendChild(picture);
    rootDiv.appendChild(title);
    rootDiv.appendChild(productDescription);
    rootDiv.appendChild(productBrand);
    rootDiv.appendChild(priceTag);
    rootDiv.appendChild(addToCartBtn);
  };

/************************************* */

export function beingAbleToPay() {
  let pay: HTMLButtonElement = document.getElementById(
    "goToPayForm"
  ) as HTMLButtonElement;

  pay.addEventListener("click", () => {
    handlePayClick();
  });
}

/************************************ */

export function handlePayClick() {
  if (cartProducts.length !== 0) {
    window.location.href = "../pages/payment.html";
  } else {
    alert("Ojdå! Ser ut som att din varukorg är tom!");
  }
}

/************************************ */

export const addEmptyShoopingCart = (cartProducts: CartProduct[]) => {
  let rootDiv: HTMLDivElement = document.getElementById(
    "rootShoppingCart"
  ) as HTMLDivElement;

  let emptyBtn = document.getElementById("emptyCart") as HTMLButtonElement;
  emptyBtn.addEventListener("click", () => {
    emptyingShoppingCart(cartProducts); //skicka med varukorgens array och diven som ska tömmas
  });
};

export function emptyingShoppingCart(cartProducts: CartProduct[]) {
  let rootDiv: HTMLDivElement = document.getElementById(
    "rootShoppingCart"
  ) as HTMLDivElement;

  cartProducts.splice(0, cartProducts.length); //töm arrayn
  localStorage.setItem("cartList", JSON.stringify(cartProducts)); //spara den tömda varukorgen
  console.log(cartProducts);
  rootDiv.innerHTML = ""; //töm html
  window.location.reload();
  createshoppingCartHtml(cartProducts); //ifall listans längd är 0 skriver createshoppingCartHtml ut "varukorgen är tom"
  totalAmount(cartProducts); //totalbeloppet att betala uppdateras
}

export const totalAmount = (articlePrice: CartProduct[]) => {
  let container: HTMLDivElement = document.createElement("div");
  let motherContainer: HTMLDivElement = document.getElementById(
    "root_sum"
  ) as HTMLDivElement;
  let sum: number = 0;
  let sumText = "";
  container.innerHTML = "";
  motherContainer.innerHTML = "";

  for (let i = 0; i < articlePrice.length; i++) {
    sum += articlePrice[i].product.price * articlePrice[i].amount;
  }

  sumText = sum.toString();
  container.innerHTML = sumText;
  motherContainer.appendChild(container);
  console.log(sum);
  return sum;
};

/******************************************* */

export const createshoppingCartHtml = (cartProducts: CartProduct[]) => {
  let rootDiv: HTMLDivElement = document.getElementById(
    "rootShoppingCart"
  ) as HTMLDivElement;

  rootDiv.innerHTML = "";

  //om listan är tom
  if (cartProducts.length === 0) {
    let emptyText: HTMLHeadingElement = document.createElement("h3");
    emptyText.innerHTML = "Din varukorg är tom!";
    rootDiv.appendChild(emptyText);
  } else {
    //om listan inte är tom
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
      articleImg.src = cartProducts[i].product.imageUrl;
      articleImg.alt = cartProducts[i].product.name;
      articleImg.className = "article--pic";

      let articleTitle: HTMLParagraphElement = document.createElement("p");
      articleTitle.innerHTML = cartProducts[i].product.name;

      // let articleAmount: HTMLParagraphElement = document.createElement("p");
      // let amountText = cartProducts[i].amount.toString();
      // articleAmount.innerHTML = amountText + " st";

      let articlePrice: HTMLParagraphElement = document.createElement("p");
      let priceText = cartProducts[i].product.price.toString();
      articlePrice.innerHTML = priceText + " kr";

      let removeArticle: HTMLSpanElement = document.createElement("span");
      removeArticle.className = "delete--article";
      removeArticle.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

      let selectedAmount = cartProducts[i].amount;
      let selectedAmountText = selectedAmount.toString();

      addIcon.addEventListener("click", () => {
        selectedAmount++;
        console.log("Antal: ", selectedAmount);
        selectedAmountText = selectedAmount.toString();
        amountNumber.innerHTML = `${selectedAmountText} st`;
        cartProducts[i].amount++;
        newAmountOfProducts(cartProducts);
        totalAmount(cartProducts);
        console.log("Uppdaterad varukorg: ", cartProducts);
      });

      subIcon.addEventListener("click", () => {
        selectedAmount--;
        selectedAmountText = selectedAmount.toString();
        amountNumber.innerHTML = `${selectedAmountText} st`;
        if (cartProducts[i].amount >= 1) {
          cartProducts[i].amount--;
          newAmountOfProducts(cartProducts);
        }
        if (cartProducts[i].amount < 1) {
          let index = cartProducts.indexOf(cartProducts[i]);
          cartProducts.splice(index, 1);
          console.log("Ny varukorg: ", cartProducts);
          localStorage.setItem("cartList", JSON.stringify(cartProducts));
          createshoppingCartHtml(cartProducts);
        }

        // console.log(selectedAmount);
        totalAmount(cartProducts); //
        // console.log(cartProducts);
      });

      addIcon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
      amountNumber.innerHTML = `${selectedAmountText} st`;
      subIcon.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;

      removeArticle.addEventListener("click", () => {
        removeArticleFromCart(cartProducts[i], cartProducts); //tar bort produkten
        totalAmount(cartProducts); //räkna om totalbelopp
        createshoppingCartHtml(cartProducts); //skapa ny html
      });

      cartArticle.appendChild(articleImg);
      cartArticle.appendChild(articleTitle);
      cartArticle.appendChild(articlePrice);
      cartArticle.appendChild(amountContainer);
      amountContainer.appendChild(subIcon);
      amountContainer.appendChild(amountNumber);
      amountContainer.appendChild(addIcon);
      cartArticle.appendChild(removeArticle);
      rootDiv.appendChild(cartArticle);
    }
  }
};

export function removeArticleFromCart(
  productToRemove: CartProduct,
  cartProducts: CartProduct[]
) {
  let index = cartProducts.indexOf(productToRemove);
  cartProducts.splice(index, 1);
  console.log("Ny varukorg: ", cartProducts);
  localStorage.setItem("cartList", JSON.stringify(cartProducts));
}

export function newAmountOfProducts(cartProducts: CartProduct[]) {
  localStorage.setItem("cartList", JSON.stringify(cartProducts));
}
