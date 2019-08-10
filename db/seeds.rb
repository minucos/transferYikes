# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Currency.destroy_all
    Wallet.destroy_all 
    User.destroy_all

    #demo user
    toby = User.create!(email:"toby@email.com", fname: "Toby", lname: "Dundridge", password: "password")
    andy = User.create!(email:"andy@email.com", fname: "Andy", lname: "Minucos", password: "password")

    #wallets
    toby_wallet = Wallet.create!(title: "My wallet", user_id: toby.id)
    andy_wallet = Wallet.create!(title: "My wallet", user_id: andy.id)

    #currencies
    # toby
    toby_AUD = Currency.create!(currency_type: "AUD", balance: 900, wallet_id: toby_wallet.id)
    toby_USD = Currency.create!(currency_type: "USD", balance: 1457.23, wallet_id: toby_wallet.id)
    toby_GBP = Currency.create!(currency_type: "GBP", balance: 552.76, wallet_id: toby_wallet.id)
    # andy
    andy_AUD = Currency.create!(currency_type: "AUD", balance: 2649.89, wallet_id: andy_wallet.id)
    andy_AUD = Currency.create!(currency_type: "USD", balance: 3705.28, wallet_id: andy_wallet.id)

end
