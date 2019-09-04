json.user do
    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end

json.balances @user.balances

json.currencies do
    @user.currencies.each do |currency|
        json.set! currency.id do
            json.partial! "api/currencies/currency", currency: currency 
        end
    end
end
