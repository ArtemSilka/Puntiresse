class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description
      t.string :url
      t.integer :user_id, null: false
      t.integer :board_id, null: false

      t.index :title
      t.index :user_id
      t.index :board_id

      t.timestamps
    end
  end
end
