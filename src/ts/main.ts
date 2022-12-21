// import { prova } from "../productDetail/ts/productDetails";
// import { provaLite } from "../productDetail/ts/productDetails";
import { Product } from "./models/Products";

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
    1,
    "Unna dig själv den här extremt hållbara stekpannan, garanterat en bästa vän under många år framöver. Pannan är den del av Cook's Classic-serien och tillverkad i hårdanodiserad stål, ett otroligt slitstarkt och hållbart material. Pannan har även en effektiv non-stick beläggning, helt fri från PFOA, och förstärkt med titanpartiklar för enkel rengöring. Denna stekpanna är designad av Jamie Oliver i samarbete med Tefal, och den är utrustad med Thermo-Signal teknologi som talar om för dig när optimal temperatur är uppnådd. Den mångsidiga pannan är kompatibel med alla värmekällor, inkl. induktion och ugn upp till 210°C. Med denna stekpanna är möjligheterna oändliga.",
    "Stekpanna"
  ),
  new Product(
    "Lodge stekpanna i gjutjärn, liten",
    330,
    "https://static.goshopping.dk/products/2000/stegepande-af-stoebejern-16-5-cm-h3sk-42134-1.jpg",
    "Lodge",
    1,
    "",
    "Stekpanna"
  ),
  new Product(
    "Ronneby Bruk Koppar Stekpanna",
    1665,
    "https://static.goshopping.dk/products/2000/ronneby-bruk-stekpanna-koppar-94720-27058-1.jpg",
    "Ronneby Bruk",
    1,
    "Ronneby Bruk Maestro Induction Koppar är en serie med kastruller, stekpannor och grytor konstruerade för att användas på alla typer av spisar och hällar, även induktion.    Handtag och skaft är gjutna i rostfritt stål som ger ett skönt och säkert grepp. Kärlen är tillverkade i tre lager, koppar ytterst, därefter aluminium och på insidan rostfritt stål 18/10. De två yttre lagren ger en mycket god värmeledning och den rostfria insidan ett hygieniskt och lättskött kokkärl.    Tjock botten för jämn och god värmefördelning, gjord för bästa funktion även på induktion.",
    "Stekpanna"
  ),
  new Product(
    "Satake Stekpanna Lättviktsgjutjär",
    729,
    "https://static.goshopping.dk/products/2000/satake-stegepande-i-letvaegts-stoebejern-spanna30-45462-1.jpg",
    "Satake",
    1,
    "",
    "Stekpanna"
  ),
  new Product(
    "Fiskars Hard Face pannkakspanna",
    479,
    "https://static.goshopping.dk/products/2000/fiskars-hard-face-pandekagepande-1052229-41932-1.jpg",
    "Fiskars",
    1,
    "",
    "Stekpanna"
  ),
  new Product(
    "Global G-55 kockkniv, 18cm",
    1000,
    "https://static.goshopping.dk/products/2000/global-g-55-kokkekniv-g-55-24334-1.jpg",
    "Global",
    1,
    "Beskrivning",
    "Kniv"
  ),
  new Product(
    "Global G-29 Kött/fiskkniv, 18cm",
    2000,
    "https://static.goshopping.dk/products/2000/global-g-29-kniv-18-cm-g-29-6437-1.jpg",
    "Global",
    1,
    "",
    "Kniv"
  ),
  new Product(
    "Jamie Oliver Santokukniv, 16cm",
    609,
    "https://static.goshopping.dk/products/2000/jamie-oliver-santokukniv-16-5-cm-k2671555-53446-1.jpg",
    "Jamie Oliver",
    1,
    "",
    "Kniv"
  ),
  new Product(
    "Satake Houcho Köttkniv, 17 cm",
    329,
    "https://static.goshopping.dk/products/2000/satake-koedkniv-svk009-17979-1.jpg",
    "Satake",
    1,
    "",
    "Kniv"
  ),
  new Product(
    "Fiskars Titanium Santokukniv, 16 cm",
    1099,
    "https://static.goshopping.dk/products/2000/fiskars-titanium-santokukniv-16-cm-1027295-34933-1.jpg",
    "Fiskars",
    1,
    "",
    "Kniv"
  ),
  new Product(
    "Ronneby Bruk Lätt Gjutjärn Såskastrull",
    855,
    "https://static.goshopping.dk/products/2000/ronneby-bruk-laett-gjutjaern-saaskastrull-med-100080-27053-1.jpg",
    "Ronneby Bruk",
    1,
    "",
    "Kastrull"
  ),
  new Product(
    "Fiskars Norden kastrull, rostfritt",
    1699,
    "https://static.goshopping.dk/products/2000/fiskars-norden-kastrull-rostfritt-staal-1026909-34921-1.jpg",
    "Fiskars",
    1,
    "",
    "Kastrull"
  ),
];

/************************** 
Sortera på brands-egenskapen:

Global
Fiskars
Ronneby Bruk
Satake 
Jamie Oliver
Lodge
********************************/
function createHtml() {
  for (let i = 0; i < products.length; i++) {
    let objectContainer: HTMLDivElement = document.createElement("div");
    objectContainer.className = "productContainer";

    let clickableContainer: HTMLDivElement = document.createElement("div");
    clickableContainer.className = "clickContainer";
    // clickableContainer.setAttribute(
    //   "href",
    //   "productDetail/productDetails.html"
    // );

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
    // addToCartBtn.innerHTML = "Lägg till i varukorg";

    let addToCartBtn: HTMLSpanElement = document.createElement("span");
    addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i>`;

    let rootContainer: HTMLDivElement = document.getElementById(
      "root"
    ) as HTMLDivElement;

    clickableContainer.appendChild(picture);
    clickableContainer.appendChild(title);
    clickableContainer.appendChild(price);

    // objectContainer.appendChild(picture);
    // objectContainer.appendChild(title);
    // objectContainer.appendChild(price);
    objectContainer.appendChild(clickableContainer);
    objectContainer.appendChild(addToCartBtn);
    rootContainer.appendChild(objectContainer);

    clickableContainer.addEventListener("click", () => {
      window.location.href = "productDetail/productDetails.html";
      sendProductDetailsToLs(products[i]);
    });

    // clickableContainer.addEventListener("click", () => {
    //   window.location.href = "product-details.html";
    //   sendProductDetailsToLs(product);
    // });

    // <a href = "javascript:;" onclick = "this.href='Page2.htm?name=' + document.getElementById('txtName').value">Send</a>
    // picture.addEventListener("click", test);
    // title.addEventListener("click", test);
    // price.addEventListener("click", test);

    //

    // Fixa funktionalitet för att lägga till i varukorgs-array
    // Skicka med objektet som man klickade på som parameter till
    //addToCartBtn.addEventListener("click", funktion för varukorgssidan och listan(parameter objekt) ... )

    /*************************************** */
    //Funktionalitet för att komma till produktbeskrivning. Eventlistener på picture, title och price.

    // picture.addEventListener("click", produktbeskrivning skapa ny html skicka med objektet du klickade på)
    //     title.addEventListener("click", () => {
    //   window.location.replace("./../productDetails.html");
    // });
  }

  function sendProductDetailsToLs(product: Product) {
    localStorage.setItem("productDetails", JSON.stringify(product));
    // window.open("productDetail/productDetails.html");
  }
}

// function prova(obj: Product) {
//   window.open("productDetail/productDetails.html");
//   provaLite(obj);
// }
