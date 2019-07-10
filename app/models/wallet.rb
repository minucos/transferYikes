# == Schema Information
#
# Table name: wallets
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Wallet < ApplicationRecord
    validates :title, :user_id, presence: true
    validates :user_id, uniqueness: true

    belongs_to :user

    has_many :currencies

    def currency_balance(currency_type)
        self.currencies.each do |currency|
            return currency.balance if currency.currency_type == currency_type
        end

        return 0
    end

end
