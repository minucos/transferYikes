json.transaction do
    json.partial! 'transaction', transaction: @transaction

end

json.users do
    @transaction.users.each do |user|
        json.set! user.id do
            json.partial! "api/users/user", user: user
        end
    end
end