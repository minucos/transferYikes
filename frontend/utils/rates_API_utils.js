Date.prototype.ymd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
};

export const fetchRates = (base) => {
    let symbols = ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY'].filter(sym => sym !== base);
    
    return $.ajax({
        method: "GET",
        url: `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols.join(',')}`,
    })
};

export const fetchRate = (from, to) => {
    return $.ajax({
        method: "GET",
        url: `https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`
    })
}

export const fetchHistoricalData = (from, to) => {
    const currDate = new Date();
    const pastDate = new Date(new Date().setDate(new Date().getDate() - 30));
    return $.ajax({
        method: "GET",
        url: `https://api.exchangeratesapi.io/history?start_at=${pastDate.ymd()}&end_at=${currDate.ymd()}&base=${from}&symbols=${to}`,
    })
}