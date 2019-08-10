class AddandRemoveStuff < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :fname
    add_column :users, :first_name, :string
  end
end
