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

    const baseCurrency = isBrlToUsd ? "BRL" : "USD";
    const targetCurrency = isBrlToUsd ? "USD" : "BRL";

    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }

      const data = await response.json();
      const conversionRate = data.rates[targetCurrency];

      if (!conversionRate) {
        throw new Error(`Rate not available for ${targetCurrency}`);
      }

      const convertedAmount = amount * conversionRate;
      document.getElementById("result").textContent = `${amount.toFixed(
        2
      )} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });
