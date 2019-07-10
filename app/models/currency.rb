# == Schema Information
#
# Table name: currencies
#
#  id         :bigint           not null, primary key
#  type       :string           not null
#  balance    :float            not null
#  ord        :integer          not null
#  wallet_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Currency < ApplicationRecord
    validates :currency_type, :balance, presence: true
    validates :currency_type, inclusion: { in: ['USD','AUD','GBP','EUR','CAD','CNY','JPY', 'XBT'] }
    validates :currency_type, uniqueness: { scope: :wallet_id }

    belongs_to :wallet

    has_one :user,
    through: :wallet,
    source: :user

end
