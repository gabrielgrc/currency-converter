let isBrlToUsd = true;

document.getElementById("switch-button").addEventListener("click", () => {
  isBrlToUsd = !isBrlToUsd;

  const brlLabel = document.getElementById("label-brl");
  const usdLabel = document.getElementById("label-usd");
  const brlText = brlLabel.textContent;
  brlLabel.textContent = usdLabel.textContent;
  usdLabel.textContent = brlText;
});

document
  .getElementById("convert-button")
  .addEventListener("click", async () => {
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const conversionRate = isBrlToUsd ? 0.2 : 5.0;

    const convertedAmount = amount * conversionRate;
    const currencyFrom = isBrlToUsd ? "BRL" : "USD";
    const currencyTo = isBrlToUsd ? "USD" : "BRL";

    document.getElementById("result").textContent = `${amount.toFixed(
      2
    )} ${currencyFrom} = ${convertedAmount.toFixed(2)} ${currencyTo}`;
  });
