class AddConversionRateToTransaction < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :exchange_rate, :float, null: false
  end
end
