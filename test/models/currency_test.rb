# == Schema Information
#
# Table name: currencies
#
#  id            :bigint           not null, primary key
#  balance       :float            not null
#  wallet_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  currency_type :string           not null
#

require 'test_helper'

class CurrencyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
