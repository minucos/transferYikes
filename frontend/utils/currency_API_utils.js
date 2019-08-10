
export const fetchCurrencies = () => (
    $.ajax({
        method: "GET",
        url: "api/currencies",
    })
);

export const fetchCurrency = (currencyId) => (
    $.ajax({
    method: "GET",
    url: `api/currencies/${currencyId}`,
    })
);

export const createCurrency = (currency) => (
    $.ajax({
        method: "POST",
        url: "api/currencies",
        data: {currency}
    })
);

export const updateCurrency = (currency) => (
    $.ajax({
        method: "POST",
        url: `api/currencies/${currency.id}`,
        data: {currency}
    })
);

export const deleteCurrency = (currencyId) => (
    $.ajax({
        method: "DELETE",
        url: `api/currencies/${currencyId}`
    })
);