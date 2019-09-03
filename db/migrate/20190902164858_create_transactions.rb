class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :name, null: false
      t.string :description
      t.float :amount, null: false
      t.string :from_currency, null: false
      t.string :to_currency, null: false
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.timestamps
    end

    add_index :transactions, :sender_id
    add_index :transactions, :receiver_id
    add_index :transactions, :from_currency
    add_index :transactions, :to_currency
  end
end
