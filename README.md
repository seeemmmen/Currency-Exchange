
# Currency Exchange

This project provides a currency exchange rate converter, where users can convert between USD and other selected currencies in real-time. It fetches the latest exchange rates using the CurrencyFreaks API.

## Features

- **Currency Conversion**: Converts an amount in USD to a selected currency.
- **Real-Time Updates**: The exchange rates and conversions are updated in real-time as you type or select a different currency.
- **Currency Selection**: You can choose from a variety of currencies, and the result is automatically updated.
- **Supports Multiple Currencies**: It supports a range of currencies including EUR, GBP, UAH, and many others.

## Technologies Used

- **JavaScript**: The application is built using JavaScript to handle the logic.
- **HTML/CSS**: Simple HTML structure with styling.
- **CurrencyFreaks API**: The exchange rates are fetched via the CurrencyFreaks API (https://currencyfreaks.com/).
- **Fetch API**: Fetches data asynchronously from the CurrencyFreaks API.

## Setup Instructions

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/seeemmmen/Currency-Exchange.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd Currency-Exchange
   ```

3. **Open the `index.html` file** in your browser:

   - You can either open it directly by double-clicking the `index.html` file or using a live server in an editor like Visual Studio Code.
   - Make sure your browser has an active internet connection, as the app relies on fetching data from the CurrencyFreaks API.

## How It Works

1. **Initial Load**: The page loads with the currency options pre-populated (including USD). The conversion from USD to the default currency (USD) is shown.
2. **Currency Selection**: You can select a currency from the dropdown list. The conversion is updated immediately.
3. **Amount Input**: You can input an amount in USD. The app will automatically update the converted value in the selected currency as you type.

## API Usage

This app uses the [CurrencyFreaks API](https://currencyfreaks.com/) to get the latest exchange rates. The API provides exchange rates for multiple currencies based on USD (or other base currencies).

- The API is used to fetch rates for a specific currency and the full list of currency rates.
  
### API Request Example:

```javascript
fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=YOUR_API_KEY&symbols=EUR,GBP,UAH&base=USD`)
```

You need a valid API key to access the CurrencyFreaks API. To get your key, sign up at [CurrencyFreaks](https://currencyfreaks.com/).

## Contributing

Contributions are welcome! If you want to help improve the project, feel free to fork the repository and submit a pull request.

### To contribute:

1. Fork this repository.
2. Clone your fork to your local machine.
3. Make changes or fix bugs.
4. Submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or inquiries, you can contact the project maintainer:

- GitHub: [https://github.com/seeemmmen](https://github.com/seeemmmen)
- Email: `your-email@example.com` *(replace with your actual email)*
