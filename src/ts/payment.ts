let sendme = document.getElementById("payButton") as HTMLButtonElement;

sendme.addEventListener("click", () => {
  console.log("hej");

  window.location.href = "../pages/orderConfirmation.html";
});
