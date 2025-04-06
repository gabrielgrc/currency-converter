let isBrlToUsd = true;

function switchCurrencies() {
  const fromCurrency = document.getElementById("from-currency");
  const toCurrency = document.getElementById("to-currency");

  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
}

// function switchLabels() {
//   isBrlToUsd = !isBrlToUsd;

//   const brlLabel = document.getElementById("label-brl");
//   const usdLabel = document.getElementById("label-usd");

//   [brlLabel.textContent, usdLabel.textContent] = [
//     usdLabel.textContent,
//     brlLabel.textContent,
//   ];
// }

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

  const baseCurrency = document.getElementById("from-currency").value;
  const targetCurrency = document.getElementById("to-currency").value;

  if (baseCurrency == targetCurrency) {
    alert("Please select two different currencies");
    return;
  }

  const conversionRate = await fetchExchangeRate(baseCurrency, targetCurrency);

  if (conversionRate) {
    const convertedAmount = amount * conversionRate;
    document.getElementById("result").textContent = `${amount.toFixed(
      2
    )} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
  }
}
