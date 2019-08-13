export const fetchRates = () => (
    $.ajax({
        method: "GET",
        url: `http://data.fixer.io/api/latest?access_key=${window.currencyAPI}&format=1&symbols=USD,AUD,GBP,CNY,JPY,XBT,CAD`,
    })
);