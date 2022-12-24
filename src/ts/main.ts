// import { prova } from "../productDetail/ts/productDetails";
// import { provaLite } from "../productDetail/ts/productDetails";
import { Product } from "./models/Products";

console.log("Testar");

window.onload = function () {
  createHtml();
  console.log("test");
};

export let products = [
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
    "Med en gjutjärnspanna har du ett mångsidigt köksredskap som kan användas år efter år, och som bara blir bättre med tiden. Denna mellanstora gjutjärnspanna från Lodge har en diameter på 16,5 cm och tack vare det hållbara materialet kan den med fördel även användas i ugn till t.ex. bakning. Gjutjärnspannan kan användas på alla typer av spisar och den passar extra bra till induktion, då gjutjärn är ett magnetiskt material. Gjutjärn har en naturlig yta som fördelar värmen jämnt och effektivt, samtidigt som den kan användas på både väldigt höga och låga temperaturer. Tack vare detta kan du servera mängder av olika rätter direkt ur pannan. Stekpannan värmebehandlas i en speciell ugn vid höga temperaturer, vilket förändrar järns molekylära struktur. Det är inte en beläggning som stekpannan har fått, men processen påminner om härdat stål, vilket ses av t.ex. köksknivar. Denna värmelagring gör gjutjärnspannan extremt beständig och ger en lång hållbarhet.",
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
    "Satakes stekpannor har fantastiska egenskaper som vi gillar skarpt. Stekpannorna är tillverkade i lättviktsgjutjärn med Honeycomb Whitford Xylan-beläggning som är en patenterad non-stickbeläggning. Den utklassar kanske allt vi tidigare provat! Den knottriga stekytan gör att råvaran inte fastnar i pannan. Stekpannan kombinerar de suveräna egenskaperna hos en gjutjärnspanna med fördelarna av non-stick-beläggning.",
    "Stekpanna"
  ),
  new Product(
    "Fiskars Hard Face pannkakspanna",
    479,
    "https://static.goshopping.dk/products/2000/fiskars-hard-face-pandekagepande-1052229-41932-1.jpg",
    "Fiskars",
    1,
    "Med denna fina pannkakspanna från Fiskars Hard Face-kollektion kan du göra varje morgon lite mer speciell. Stekpannan är nämligen designad för att grädda fina pannkakor och de låga kanterna gör det lätt att komma åt med stekspaden för att vända pannkakan. Pannkakspannan ingår i Fiskars Hard Face-serie, som är extra slitstark och har en tålig beläggning som klarar allt från användning av metallredskap till att köras i diskmaskin. Dessutom tål stekpannan också att användas i ugnen i upp till 150°C, och alla stekpannor och kokkärl i Hard Face-serien passar utmärkt till att använda utomhus, både på grillen eller över en öppen eld",
    "Stekpanna"
  ),
  new Product(
    "Global G-55 kockkniv, 18cm",
    1000,
    "https://static.goshopping.dk/products/2000/global-g-55-kokkekniv-g-55-24334-1.jpg",
    "Global",
    1,
    "Global Kockkniv 18 cm. Kockkniv i medelstorlek, lättarbetad och en utmärkt allroundkniv. Många tjejers favorit eftersom den passar för lite mindre händer. Bladets längd: 18 cm",
    "Kniv"
  ),
  new Product(
    "Global G-29 Kött/fiskkniv, 18cm",
    2000,
    "https://static.goshopping.dk/products/2000/global-g-29-kniv-18-cm-g-29-6437-1.jpg",
    "Global",
    1,
    "Global kött- och fiskkniv 18 cm. En allsidig kniv. Som med sitt kraftiga och höga blad är utmärkt för hantering av både fisk och fågel.",
    "Kniv"
  ),
  new Product(
    "Jamie Oliver Santokukniv, 16cm",
    609,
    "https://static.goshopping.dk/products/2000/jamie-oliver-santokukniv-16-5-cm-k2671555-53446-1.jpg",
    "Jamie Oliver",
    1,
    "Den här santokukniven från Jamie Oliver har ett lätt blad som passar perfekt för de mer precisionskrävande köksuppgifterna. Du kan med fördel använda den till exempel för att finhacka och tärna grönsaker till en gryta, eller för att skära lax i tunna skivor när du gör en elegant carpaccio. Kniven är tillverkad av rostfritt stål som är ishärdat för att ge dig maximal prestanda och en otrolig slitstyrka. Den är dessutom mycket välbalanserad, så att du får ett grepp som är både bekvämt och säkert. Knivbladet är 16,5 centimeter långt, och knivens totallängd är 30,3 centimeter. Ett riktigt måste i köket – nu kan du skära med mer precision än någonsin. Jamie Oliver och det franska märket Tefal är utan tvekan ett perfekt matlagningsteam, och har utvecklat produkter ihop i nästan två decennier. Medan Jamie bidrar med sin stora kunskap och passion för mat, står Tefal för innovativ teknik och förstklassig prestanda. Resultatet är pålitliga produkter av hög kvalitet som gör det till en riktig fröjd att laga mat från grunden.",
    "Kniv"
  ),
  new Product(
    "Satake Houcho Köttkniv, 17 cm",
    329,
    "https://static.goshopping.dk/products/2000/satake-koedkniv-svk009-17979-1.jpg",
    "Satake",
    1,
    "En av de vassaste kockknivarna du kan hitta. Knivbladets design gör den underbar att hacka och skiva med. Material: Hi Carbon Steel. Bladlängd: 17 cm. Slipvinkel 15 grader. Handtag i magnoliaträ. Slipas med sten eller keramiskt bryne",
    "Kniv"
  ),
  new Product(
    "Fiskars Titanium Santokukniv, 16 cm",
    1099,
    "https://static.goshopping.dk/products/2000/fiskars-titanium-santokukniv-16-cm-1027295-34933-1.jpg",
    "Fiskars",
    1,
    "Santokukniv från Fiskars innovativa serie Titanium, tillverkad av titan och med en revolutionerande LZR-EDGE™-teknik. En santokukniv är förmodligen den populäraste kniven från det japanska köket, mycket tack vare sin flexibla förmåga att skära, tärna och strimla allt från kött, fågel, grönsaker och fisk. Med sitt breda blad är den enkel att använda och blir en riktig allroundkniv! Denna modell från Fiskars är perfekt för dig som vill ha en kniv som ligger bekvämt i handen, med en sylvass egg och som ger dig full kontroll över hackandet. Knivbladet är tillverkat av titan och ger därför en extrem precision och ligger samtidigt lätt i handen. Med sin revolutionerande LZR-EDGE ™-teknik håller sig dessutom bladet vasst upp till 4 gånger längre än en vanlig kniv, allt för din bekvämlighet!",
    "Kniv"
  ),
  new Product(
    "Ronneby Bruk Lätt Gjutjärn Såskastrull",
    855,
    "https://static.goshopping.dk/products/2000/ronneby-bruk-laett-gjutjaern-saaskastrull-med-100080-27053-1.jpg",
    "Ronneby Bruk",
    1,
    "Ronneby Bruk såskastrull i lätt gjutjärn med rostfritt handtag med silikonbeklädnad för bra grepp. Tål ugnstemperatur upp till 220 grader. Förinstekt med vegetabilisk olja. Fungerar på alla typer av värmekällor, från vedspis till induktionsspis. Produkten är tillverkade av exakt samma gjutjärnssammansättning som traditionellt sandgjutna, tyngre, pannor. Att den är så lätt och lätthanterliga beror på att Ronneby Bruk under ett par års tid deltagit i att utveckla en för husgeråd helt ny gjuteriteknik. Denna gör att produkterna går att gjuta mycket tunnare än de traditionellt gjutna, utan att tappa de fina stekegenskaperna hos gjutjärn. P.g.a att de är tunna, blir de också enormt mycket snabbare heta.",
    "Kastrull"
  ),
  new Product(
    "Fiskars Norden kastrull, rostfritt",
    1699,
    "https://static.goshopping.dk/products/2000/fiskars-norden-kastrull-rostfritt-staal-1026909-34921-1.jpg",
    "Fiskars",
    1,
    "Oavsett om du vill smälta, pochera, karamellisera eller koka är denna kastrull från Fiskars ett utmärkt val. Med sin snabba och jämna värmefördelning, naturliga non-stickegenskap och invändiga måttskala blir den snabbt en naturlig del i din matlagning. Den effektiva uppvärmningen kommer från den smarta 3-lagerskonstruktionen, där en kärna av aluminium försluts av rostfritt stål. Detta skapar inte bara en läcker finish utan ser också till att du hela tiden får en jämn och effektiv uppvärmning. Kastrullen är dessutom designad med en smart kant-till-kantkonstruktion som ser till att hela ytan av kärlet värms upp! Serien Norden är, som namnet avslöjar, inspirerat av den nordiska naturen och alla dess fanatiska råvaror. Detta ger en slitstark serie med stek- och kokkärl i rostfritt stål som alltid kommer att stå redo att hjälpa dig i din matlagning.",
    "Kastrull"
  ),
];

export let cartProducts: Product[] = JSON.parse(
  localStorage.getItem("storageList") || "[]"
);

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
  console.log(cartProducts); //visar alla produkter i ens varukorg

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

    let addToCartBtn: HTMLSpanElement = document.createElement("span");
    addToCartBtn.className = "addToCart";
    addToCartBtn.id = "addCart";
    addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i>`;

    let rootContainer: HTMLDivElement = document.getElementById(
      "root"
    ) as HTMLDivElement;

    clickableContainer.appendChild(picture);
    clickableContainer.appendChild(title);
    clickableContainer.appendChild(price);

    objectContainer.appendChild(clickableContainer);
    objectContainer.appendChild(addToCartBtn);
    rootContainer.appendChild(objectContainer);

    clickableContainer.addEventListener("click", () => {
      window.location.href = "pages/productDetails.html";
      sendProductDetailsToLs(products[i]);
    });

    let cartSymbol: HTMLAnchorElement = document.getElementById(
      "cart"
    ) as HTMLAnchorElement;

    cartSymbol.addEventListener("click", () => {
      window.location.href = "pages/shoppingCart.html";
    });

    addToCartBtn.addEventListener("click", () => {
      handleClick(products[i]);
    });
  }
}

export function handleClick(product: Product) {
  cartProducts.push(product);
  localStorage.setItem("storageList", JSON.stringify(cartProducts));
  console.log(cartProducts);
}

function sendProductDetailsToLs(product: Product) {
  localStorage.setItem("productDetails", JSON.stringify(product));
}
