class ChangeNullOnUserAndBoard < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :user_id
    remove_column :pins, :board_id

    add_column :pins, :user_id, :string
    add_column :pins, :board_id, :string
  end
end
