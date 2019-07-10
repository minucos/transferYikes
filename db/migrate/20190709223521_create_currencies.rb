class CreateCurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :currencies do |t|
      t.string :type, null: false
      t.float :balance, null: false
      t.integer :ord, null: false
      t.integer :wallet_id, null: false
      t.timestamps
    end

    add_index :currencies, :wallet_id
  end
end
