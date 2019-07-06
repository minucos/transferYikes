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
