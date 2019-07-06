class CreateWallets < ActiveRecord::Migration[5.2]
  def change
    create_table :wallets do |t|
      t.string :title, null: false
      t.integer :user_id, null: false 
      t.timestamps
    end

    add_index :wallets, :user_id, unique: true
  end
end
