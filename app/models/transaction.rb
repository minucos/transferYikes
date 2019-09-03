# == Schema Information
#
# Table name: transactions
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  description   :string
#  amount        :float            not null
#  from_currency :string           not null
#  to_currency   :string           not null
#  sender_id     :integer          not null
#  receiver_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Transaction < ApplicationRecord
    validates :name, :amount, :from_currency, :to_currency, :sender_id, :receiver_id, presence: true 
    validates :from_currency, :to_currency, inclusion: { in: ['USD','AUD','GBP','EUR','CAD','CNY','JPY'] }

    belongs_to :sender, 
    class_name: :User

    belongs_to :receiver, 
    class_name: :User

end
