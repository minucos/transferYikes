json.user do
    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end

json.transactions do
    @user.transactions.each do |transaction|
        json.partial! "api/transactions/transaction", transaction: transaction
    end
end