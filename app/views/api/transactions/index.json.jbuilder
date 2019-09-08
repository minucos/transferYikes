json.transactions do
    @transactions.each do |transaction|
        json.partial! 'transaction', transaction: transaction
    end
end

json.users do
    @user.users.each do |user|
        json.set! user.id do
            json.partial! "api/users/user", user: user
        end
    end
end

