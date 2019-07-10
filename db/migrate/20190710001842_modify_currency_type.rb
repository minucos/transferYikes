class ModifyCurrencyType < ActiveRecord::Migration[5.2]
  def change
    remove_column :currencies, :type
    add_column :currencies, :currency_type, :string, null: false
  end
end
