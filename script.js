let isBrlToUsd = true;

function switchLabels() {
  isBrlToUsd = !isBrlToUsd;

  const brlLabel = document.getElementById("label-brl");
  const usdLabel = document.getElementById("label-usd");

  [brlLabel.textContent, usdLabel.textContent] = [
    usdLabel.textContent,
    brlLabel.textContent,
  ];
}

async function fetchExchangeRate(baseCurrency, targetCurrency) {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    const data = await response.json();
    const rate = data.rates[targetCurrency];

    if (!rate) throw new Error(`Rate not available for ${targetCurrency}`);
    return rate;
  } catch (error) {
    alert(`Error: ${error.message}`);
    return null;
  }
}

async function handleCurrencyConversion() {
  const amountInput = document.getElementById("amount").value;
  const amount = parseFloat(amountInput);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  const baseCurrency = isBrlToUsd ? "BRL" : "USD";
  const targetCurrency = isBrlToUsd ? "USD" : "BRL";

  const conversionRate = await fetchExchangeRate(baseCurrency, targetCurrency);

  if (conversionRate) {
    const convertedAmount = amount * conversionRate;
    document.getElementById("result").textContent = `${amount.toFixed(
      2
    )} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
  }
}
