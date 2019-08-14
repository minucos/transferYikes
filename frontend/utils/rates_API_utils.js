export const fetchRates = (base) => {
    return $.ajax({
        method: "GET",
        url: `https://api.exchangeratesapi.io/latest?base=${base}&symbols=USD,AUD,GBP,CNY,JPY,CAD,EUR`,
    })
};