json.set! @currency.id do
    json.partial! "api/currencies/currency", currency: @currency
end