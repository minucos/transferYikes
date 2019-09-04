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

require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
