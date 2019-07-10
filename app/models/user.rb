# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    has_one :wallet

    has_many :currencies,
    through: :wallet,
    source: :currencies

    def password=(password)
        @password = password

        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user 
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token!
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token!
    end

    def reset_session_token!
        self.session_token = User.generate_session_token!
        self.save!
        self.session_token
    end

    def currency_balance(currency_type)
        self.wallet.currency_balance(currency_type)
    end

    def send_money(amount, currency_type, receiving_user)
        raise "funds too low" if self.currency_balance(currency_type) < amount

        from_currency = self.currencies.find_by(currency_type: currency_type)
        from_currency.balance -= amount
        from_currency.save!

        receiving_user.receive_money(amount, currency_type)

        return nil
    end

    def receive_money(amount, currency_type)
        to_currency = self.currencies.find_by(currency_type: currency_type)

        if to_currency 
            to_currency.balance += amount
            to_currency.save!
            return to_currency.balance 
        else
            to_currency = Currency.new(currency_type: currency_type, balance: amount, wallet_id: self.wallet.id)
            to_currency.save!
            return to_currency.balance
        end
    end

end


