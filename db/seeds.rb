# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'

ActiveRecord::Base.transaction do
    Transaction.destroy_all
    User.destroy_all

    # demo user
    toby = User.create!(email:"toby@gmail.com", fname: "Toby", lname: "Dundridge", password: "password")
    
    # users
    User.create!([
        { email:"andy@aa.io", fname: "Andy", lname: "Minucos", password: "password" },
        { email:"holly@gmail.com", fname: "Holly", lname: "Minucos", password: "password" },
        { email:"jenn@aa.io", fname: "Jennifer", lname: "Kennedy", password: "password" },
        { email:"elliott@aa.io", fname: "Elliott", lname: "Humphrey", password: "password" },
        { email:"ronil@aa.io", fname: "Ronil", lname: "Bhatia", password: "password" },
        { email:"ryan@aa.io", fname: "Ryan", lname: "Mapa", password: "password" },
        { email:"dean@aa.io", fname: "Matt", lname: "Lacap", password: "password" },
        { email:"mike@aa.io", fname: "Mike", lname: "Madsen", password: "password"},
        { email:"vanessa@aa.io", fname: "Vanessa", lname: "Walker", password: "password"},
        { email:"angela@aa.io", fname: "Angela", lname: "Topchev", password: "password"},
        { email:"carlos@aa.io", fname: "Carlos", lname: "Garcia", password: "password"},
        { email:"alissa@aa.io", fname: "Alissa", lname: "Crane", password: "password"},
        { email:"helen@aa.io", fname: "Helen", lname: "Yu", password: "password"},
        { email:"michelle@aa.io", fname: "Michelle", lname: "Kim", password: "password"},
        { email:"walker@aa.io", fname: "Sam", lname: "Walker", password: "password"},
        { email:"darren@aa.io", fname: "Darren", lname: "Eid", password: "password"}
    ])

    # used for deposits/withdrawals
    bank = User.create!(email:"vault@transferyikes.com", fname: "Scrooge", lname: "McDuck", password: "no1dime")

    # transactions
    # initial deposits
    User.where.not(email: 'vault@transferyikes.com').each do |user|
        Transaction.create!(name: "Deposit", sent_amount: 100000, from_currency: "USD", to_currency: "USD", sender_id: bank.id, receiver_id: user.id, exchange_rate: 1, created_at: '01/01/2019')
    end

    all_user_ids = User.where.not(email: 'vault@transferyikes.com').pluck(:id)
    currencies = ['USD','AUD','GBP','EUR','CAD','CNY','JPY']
    rates = {
        USD: 1,
        AUD: 1.45,
        GBP: 0.8,
        EUR: 0.9,
        CAD: 1.32,
        CNY: 7.08,
        JPY: 107.99
    }

    amounts = (1..1000).to_a
    dates = (0..180).to_a
    
    def random_variance
        n = rand()
        until n > -0.1 && n < 0.1
            n = rand() - rand()
        end
        n.round(3)
    end

    1000.times do |i|
        amount = amounts.sample
        currency = currencies.sample
        rate = rates[currency.to_sym] + random_variance
        date = DateTime.now - dates.sample
        sender_id = all_user_ids.sample
        receiver_id = all_user_ids.sample

        until sender_id != receiver_id
            receiver_id = all_user_ids.sample
        end

        Transaction.create!({
            name: "Transfer", 
            sent_amount: amount, 
            from_currency: "USD", 
            to_currency: currency, 
            sender_id: sender_id, 
            receiver_id: receiver_id, 
            exchange_rate: rate, 
            created_at: date.to_s
        })
    end
end
