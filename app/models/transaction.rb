# == Schema Information
#
# Table name: transactions
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  description     :string
#  sent_amount     :float            not null
#  from_currency   :string           not null
#  to_currency     :string           not null
#  sender_id       :integer          not null
#  receiver_id     :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  exchange_rate   :float            not null
#  received_amount :float            not null
#

class Transaction < ApplicationRecord
    CURRENCIES = ['USD','AUD','GBP','EUR','CAD','CNY','JPY']
    
    validates :name, :sent_amount, :received_amount, :from_currency, :to_currency, :sender_id, :receiver_id, presence: true 
    validates :from_currency, :to_currency, inclusion: { in: CURRENCIES }
    validate :sufficient_funds

    after_initialize :calculate_received_amount

    belongs_to :sender, 
    class_name: :User

    belongs_to :receiver, 
    class_name: :User

    def sufficient_funds
        return if User.find(sender_id).email == 'vault@transferyikes.com'
        errors.add("Insufficient funds for this transaction") unless currency_balance >= sent_amount
    end

    def currency_balance
        User.find(sender_id).currency_balance(from_currency)
    end

    def calculate_received_amount
        self.received_amount ||= sent_amount * exchange_rate
    end

end
