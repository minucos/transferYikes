export const fetchRates = (base) => {
    let symbols = ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY'].filter(sym => sym !== base);
    
    return $.ajax({
        method: "GET",
        url: `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols.join(',')}`,
    })
};