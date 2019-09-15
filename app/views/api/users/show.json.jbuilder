json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.num_trans @user.transactions.count
end