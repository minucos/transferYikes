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

require 'test_helper'

class CurrencyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
