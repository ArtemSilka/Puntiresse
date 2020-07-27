class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :description
      t.boolean :secret, null: false, default: false
      t.integer :user_id, null: false

      t.index :name
      t.index :user_id

      t.timestamps
    end
  end
end
