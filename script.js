const convertButton = document.getElementById("convert");
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const resultParagraph = document.getElementById("result");

const usdToInrRate = 82.81;
const inrToUsdRate = 1 / 82.81;

convertButton.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const currency = currencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultParagraph.textContent = "Please enter a valid amount.";
    return;
  }

  let result;
  if (currency === "USD") {
    result = (amount * usdToInrRate).toFixed(2);
    resultParagraph.textContent = `Amount Is: ₹ ${result}`;
  } else {
    result = (amount * inrToUsdRate).toFixed(2);
    resultParagraph.textContent = `Amount Is: $ ${result}`;
  }

});