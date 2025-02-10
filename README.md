# Currency Converter

A simple, responsive web-based currency converter that allows users to convert between US Dollars (USD) and Brazilian Reais (BRL). The application fetches real-time exchange rates and performs the conversion seamlessly.

## Demo

You can view the live version of the project here: [Currency Converter](https://gabrielgrc.github.io/currency-converter/)

---

## Features

- Convert between USD and BRL, or vice versa.
- Real-time exchange rates using an API.
- Clean, responsive design.
- Easy-to-use interface with input validation.

---

## Project Structure

The project consists of three main files:

- **`index.html`**  
  The main structure of the web page, including input fields, buttons, and containers for displaying the conversion results.

- **`style.css`**  
  Provides a clean and modern design for the web app, including responsive layout and button hover effects.

- **`script.js`**  
  Contains all the logic for fetching exchange rates, handling currency conversions, and dynamically updating the UI.

---

## How to Use

1. **Enter the amount** in the input field.
2. **Choose the conversion direction**:
   - By default, the conversion is from BRL to USD.
   - Click the "Switch" button to toggle between BRL → USD and USD → BRL.
3. Click the **"Convert" button**.
4. View the converted amount displayed below the button.

---

## Technical Details

- **Exchange Rate API**: The app fetches real-time exchange rates from the [ExchangeRate API](https://www.exchangerate-api.com).
- **Logic**: Conversion rates are dynamically fetched and calculated based on user input.
- **Responsive Design**: Works on desktops, tablets, and mobile devices.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gabrielgrc/currency-converter.git

2. Navigate to the project folder:
   ```bash
   cd currency-converter

3. Open the index.html file in your browser.

---

## Technologies Used

- **HTML5** for structure. 
- **CSS3** for styling.
- **JavaScript** for logic and API integration.

---

## Future Improvements

- Add support for more currencies.
- Enhance error handling for API failures.
- Add unit tests for JavaScript functions.

---

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## Acknowledgments

- [ExchangeRate API](https://www.exchangerate-api.com) for providing exchange rate data.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) for helpful documentation.
