class AddFNameToUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    add_column :users, :fname, :string, null: false
  end
end
