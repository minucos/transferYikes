class RemoveOrdFromCurrencies < ActiveRecord::Migration[5.2]
  def change
    remove_column :currencies, :ord
  end
end
