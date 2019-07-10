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
    validate :ensure_one_currency

    after_initialize :add_ord

    belongs_to :wallet

    has_one :user,
    through: :wallet,
    source: :user

    def ensure_one_currency
        if Wallet.find(self.wallet_id).currencies.pluck("currency_type").include?(self.currency_type)
            errors.add(:currency_type, "currency type already in wallet!")
        end
    end

end
