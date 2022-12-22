//vi ska appenda så att vår ordernummer syns i p taggen med klassen container__ordernumber.
let orderNumber: number = Math.floor(Math.random() * 999999 + 111111);
let orderNumberText: string = orderNumber.toString();
let confirmationNumber = document.getElementById(
  "orderConfirmationNumber"
) as HTMLParagraphElement;
confirmationNumber.innerHTML = "Ordernummer: " + orderNumberText;
