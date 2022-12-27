//import { json } from "stream/consumers";
import { Product } from "./models/Productss";

console.log("Testar");

window.onload = function () {
  createHtml();
};

let products = [
  new Product(
    "Tefal Jamie Oliver Cook's classic",
    680,
    "https://static.goshopping.dk/products/2000/tefal-jamie-oliver-cook-s-classic-stegepande-e3060734-47447-1.jpg",
    "Jamie Oliver",
    1
  ),
  new Product(
    "Lodge stekpanna i gjutjärn, liten",
    330,
    "https://static.goshopping.dk/products/2000/stegepande-af-stoebejern-16-5-cm-h3sk-42134-1.jpg",
    "Lodge",
    1
  ),
  new Product(
    "Ronneby Bruk Koppar Stekpanna",
    1665,
    "https://static.goshopping.dk/products/2000/ronneby-bruk-stekpanna-koppar-94720-27058-1.jpg",
    "Ronneby Bruk",
    1
  ),
  new Product(
    "  Satake Stekpanna Lättviktsgjutjär",
    729,
    "https://static.goshopping.dk/products/2000/satake-stegepande-i-letvaegts-stoebejern-spanna30-45462-1.jpg",
    "Satake",
    1
  ),
  new Product(
    "Fiskars Hard Face pannkakspanna",
    479,
    "https://static.goshopping.dk/products/2000/fiskars-hard-face-pandekagepande-1052229-41932-1.jpg",
    "Fiskars",
    1
  ),
  new Product(
    "Global G-55 kockkniv, 18cm",
    1000,
    "https://static.goshopping.dk/products/2000/global-g-55-kokkekniv-g-55-24334-1.jpg",
    "Global",
    1
  ),
  new Product(
    "Global G-29 Kött/fiskkniv, 18cm",
    2000,
    "https://static.goshopping.dk/products/2000/global-g-29-kniv-18-cm-g-29-6437-1.jpg",
    "Global",
    1
  ),
  new Product(
    "Jamie Oliver Santokukniv, 16cm",
    609,
    "https://static.goshopping.dk/products/2000/jamie-oliver-santokukniv-16-5-cm-k2671555-53446-1.jpg",
    "Jamie Oliver",
    1
  ),
  new Product(
    "Satake Houcho Köttkniv, 17 cm",
    329,
    "https://static.goshopping.dk/products/2000/satake-koedkniv-svk009-17979-1.jpg",
    "Satake",
    1
  ),
  new Product(
    "Fiskars Titanium Santokukniv, 16 cm",
    1099,
    "https://static.goshopping.dk/products/2000/fiskars-titanium-santokukniv-16-cm-1027295-34933-1.jpg",
    "Fiskars",
    1
  ),
  new Product(
    "Ronneby Bruk Lätt Gjutjärn Såskastrull",
    855,
    "https://static.goshopping.dk/products/2000/ronneby-bruk-laett-gjutjaern-saaskastrull-med-100080-27053-1.jpg",
    "Ronneby Bruk",
    1
  ),
  new Product(
    "Fiskars Norden kastrull, rostfritt",
    1699,
    "https://static.goshopping.dk/products/2000/fiskars-norden-kastrull-rostfritt-staal-1026909-34921-1.jpg",
    "Fiskars",
    1
  ),
];
/*export let articlePrice: Product[] = JSON.parse(
  localStorage.getItem("storageList") || "[]"

);
*/
//funkar inte att exportera priset, kanske gör något fel!!!

function createHtml() {
  for (let i = 0; i < products.length; i++) {
    let objectContainer: HTMLDivElement = document.createElement("div");
    objectContainer.className = "productContainer";

    let clickableContainer: HTMLAnchorElement = document.createElement("a");
    clickableContainer.className = "clickContainer";
    clickableContainer.setAttribute(
      "href",
      "productDetail/productDetails.html"
    );

    // clickableContainer.setAttribute("href", "./../productDetails.html");

    let picture: HTMLImageElement = document.createElement("img");
    picture.src = products[i].imageUrl;
    picture.alt = products[i].name;

    let title: HTMLParagraphElement = document.createElement("p");
    title.className = "product__title";
    title.innerHTML = products[i].name;

    let price: HTMLParagraphElement = document.createElement("p");
    price.className = "product__price";
    price.innerHTML = products[i].price + "kr";

    // let addToCartBtn: HTMLButtonElement = document.createElement("button");
    // addToCartBtn.type = "button";
    let addToCartBtn: HTMLSpanElement = document.createElement("span");
    // addToCartBtn.innerHTML = "Lägg till i varukorg";
    addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i>`;

    let rootContainer: HTMLDivElement = document.getElementById(
      "root"
    ) as HTMLDivElement;

    clickableContainer.appendChild(picture);
    clickableContainer.appendChild(title);
    clickableContainer.appendChild(price);
    objectContainer.appendChild(clickableContainer);

    // objectContainer.appendChild(picture);
    // objectContainer.appendChild(title);
    // objectContainer.appendChild(price);
    objectContainer.appendChild(addToCartBtn);
    rootContainer.appendChild(objectContainer);

    picture.addEventListener("click", test);
    title.addEventListener("click", test);
    price.addEventListener("click", test);

    //

    // Fixa funktionalitet för att lägga till i varukorgs-array
    //Skicka med objektet som man klickade på som parameter till
    //addToCartBtn.addEventListener("click", funktion för varukorgssidan och listan(parameter objekt) ... )

    /*************************************** */
    //Funktionalitet för att komma till produktbeskrivning. Eventlistener på picture, title och price.

    // picture.addEventListener("click", produktbeskrivning skapa ny html skicka med objektet du klickade på)
    //     title.addEventListener("click", () => {
    //   window.location.replace("./../productDetails.html");
    // });
  }
}

function test() {
  // alert("tjena");
  console.log("testar lite");
  // window.open("https://www.google.com", "_blank");
  // window.open("/src/products/productDetails.html", "_blank");

  //funkar ej, mst ha fler parcel local host igång??
}
