json.user do
    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end

json.wallet do
    json.set! @user.wallet.id do
        json.partial! "api/wallets/wallet", wallet: @user.wallet
    end
end

json.currencies do
    @user.currencies.each do |currency|
        json.set! currency.id do
            json.partial! "api/currencies/currency", currency: currency 
        end
    end
end
