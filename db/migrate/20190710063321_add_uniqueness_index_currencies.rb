class AddUniquenessIndexCurrencies < ActiveRecord::Migration[5.2]
  def change
    add_index :currencies, [ :currency_type, :wallet_id ], unique: true
  end
end
