json.set! transaction.id do
    json.extract! transaction, 
        :id, 
        :name, 
        :description, 
        :sent_amount,
        :received_amount,
        :from_currency, 
        :to_currency,
        :sender_id,
        :receiver_id,
        :exchange_rate,
        :created_at
end