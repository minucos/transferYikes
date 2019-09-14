# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Transaction.destroy_all
    Currency.destroy_all
    Wallet.destroy_all 
    User.destroy_all

    # demo user
    toby = User.create!(email:"toby@email.com", fname: "Toby", lname: "Dundridge", password: "password")
    
    # users
    andy = User.create!(email:"andy@email.com", fname: "Andy", lname: "Minucos", password: "password")

    # used for deposits/withdrawals
    bank = User.create!(email:"vault@transferyikes.com", fname: "Scrooge", lname: "McDuck", password: "no1dime")

    # transactions
    # andy deposits
    deposit1 = Transaction.create!(name: "Deposit", sent_amount: 1000, from_currency: "USD", to_currency: "USD", sender_id: bank.id, receiver_id: andy.id, exchange_rate: 1, created_at: '01/10/2018')
    deposit2 = Transaction.create!(name: "Deposit", sent_amount: 1200, from_currency: "AUD", to_currency: "AUD", sender_id: bank.id, receiver_id: andy.id, exchange_rate: 1, created_at: '10/8/2018')
    deposit3 = Transaction.create!(name: "Deposit", sent_amount: 800, from_currency: "GBP", to_currency: "GBP", sender_id: bank.id, receiver_id: andy.id, exchange_rate: 1, created_at: '12/12/2018')
    # toby deposits
    deposit4 = Transaction.create!(name: "Deposit", sent_amount: 3400, from_currency: "USD", to_currency: "USD", sender_id: bank.id, receiver_id: toby.id, exchange_rate: 1, created_at: '01/01/2019')
    deposit5 = Transaction.create!(name: "Deposit", sent_amount: 5600, from_currency: "AUD", to_currency: "AUD", sender_id: bank.id, receiver_id: toby.id, exchange_rate: 1, created_at: '27/02/2019')
    deposit6 = Transaction.create!(name: "Deposit", sent_amount: 450, from_currency: "GBP", to_currency: "GBP", sender_id: bank.id, receiver_id: toby.id, exchange_rate: 1, created_at: '16/03/2019')
    # toby tansfers
    transfer1 = Transaction.create!(name: "Transfer", sent_amount: 150, from_currency: "USD", to_currency: "AUD", sender_id: toby.id, receiver_id: andy.id, exchange_rate: 1.47, created_at: '01/06/2019')
    transfer2 = Transaction.create!(name: "Transfer", sent_amount: 300, from_currency: "AUD", to_currency: "USD", sender_id: toby.id, receiver_id: toby.id, exchange_rate: 0.67, created_at: '26/07/2019')
    transfer3 = Transaction.create!(name: "Transfer", sent_amount: 200, from_currency: "GBP", to_currency: "AUD", sender_id: toby.id, receiver_id: andy.id, exchange_rate: 1.8, created_at: '06/08/2019')
    # andy tansfers
    transfer1 = Transaction.create!(name: "Transfer", sent_amount: 350, from_currency: "USD", to_currency: "GBP", sender_id: andy.id, receiver_id: toby.id, exchange_rate: 0.81, created_at: '14/05/2019')
    transfer2 = Transaction.create!(name: "Transfer", sent_amount: 300, from_currency: "USD", to_currency: "EUR", sender_id: andy.id, receiver_id: andy.id, exchange_rate: 0.9, created_at: '08/08/2019')
    transfer3 = Transaction.create!(name: "Transfer", sent_amount: 200, from_currency: "AUD", to_currency: "EUR", sender_id: andy.id, receiver_id: toby.id, exchange_rate: 0.62, created_at: '17/08/2019')

end
