function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Mock conversion rates for demonstration
    const conversionRates = {
        'USD': { 'INR': 74.5, 'EUR': 0.85, 'RUB': 73.5, 'USD': 1 },
        'EUR': { 'INR': 88.0, 'USD': 1.18, 'RUB': 86.5, 'EUR': 1 },
        'RUB': { 'INR': 1.0, 'USD': 0.014, 'EUR': 0.012, 'RUB': 1 },
        'INR': { 'USD': 0.013, 'EUR': 0.011, 'RUB': 1.0, 'INR': 1 }
    };

    const conversionRate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    document.getElementById('result').innerText = `Result: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
