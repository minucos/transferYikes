json.set! currency.id do
    json.extract! currency, :id, :balance, :currency_type, :wallet_id
end