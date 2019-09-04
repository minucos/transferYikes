class AddSentAmountAndReceivedAmount < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :amount, :sent_amount
    add_column :transactions, :received_amount, :float, null: false
  end
end
