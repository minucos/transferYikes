# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'
require 'faker'

ActiveRecord::Base.transaction do
    Transaction.destroy_all
    User.destroy_all

    # used for deposits/withdrawals
    bank = User.create!(email:"vault@transferyikes.com", name: "Scrooge McDuck", password: "no1dime")

    # demo user
    toby = User.create!(email:"toby@gmail.com", name: "Toby Dundridge", password: "password")
    
    # users
    User.create!([
        { email:"andy@aa.io", name: "Andy Minucos", password: "password" },
        { email:"holly@gmail.com", name: "Holly Minucos", password: "password" },
        { email:"jenn@aa.io", name: "Jennifer Kennedy", password: "password" },
        { email:"elliott@aa.io", name: "Elliott Humphrey", password: "password" },
        { email:"ronil@aa.io", name: "Ronil Bhatia", password: "password" },
        { email:"ryan@aa.io", name: "Ryan Mapa", password: "password" },
        { email:"dean@aa.io", name: "Matt Lacap", password: "password" },
        { email:"mike@aa.io", name: "Mike Madsen", password: "password"},
        { email:"vanessa@aa.io", name: "Vanessa Chen", password: "password"},
        { email:"angela@aa.io", name: "Angela Topchev", password: "password"},
        { email:"carlos@aa.io", name: "Carlos Garcia", password: "password"},
        { email:"alissa@aa.io", name: "Alissa Crane", password: "password"},
        { email:"helen@aa.io", name: "Helen Yu", password: "password"},
        { email:"michelle@aa.io", name: "Michelle Kim", password: "password"},
        { email:"walker@aa.io", name: "Sam Walker", password: "password"},
        { email:"darren@aa.io", name: "Darren Eid", password: "password"}
    ])

    # transactions
    # initial deposits
    User.where.not(email: 'vault@transferyikes.com').each do |user|
        Transaction.create!(name: "Deposit", sent_amount: 100000, from_currency: "USD", to_currency: "USD", sender_id: bank.id, receiver_id: user.id, exchange_rate: 1, created_at: (DateTime.now - 181).to_s)
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
        date = (DateTime.now - dates.sample).to_s
        sender_id = all_user_ids.sample
        receiver_id = all_user_ids.sample

        until sender_id != receiver_id
            receiver_id = all_user_ids.sample
        end

        Transaction.create!({
            name: Faker::TvShows::Simpsons.character,
            description: Faker::TvShows::Simpsons.quote,
            sent_amount: amount, 
            from_currency: "USD", 
            to_currency: currency, 
            sender_id: sender_id, 
            receiver_id: receiver_id, 
            exchange_rate: rate, 
            created_at: date
        })
    end
end
