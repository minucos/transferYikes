@transactions.each do |transaction|
    json.partial! 'transaction', transaction: transaction
end