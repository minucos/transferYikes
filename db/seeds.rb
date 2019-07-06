# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Wallet.destroy_all
    User.destroy_all

    #demo user
    toby = User.create!(email:"toby@email.com", fname: "Toby", lname: "Dundridge", password: "password")

    #wallets
    toby_wallet = Wallet.create!(title: "My wallet", user_id: toby.id)
end
