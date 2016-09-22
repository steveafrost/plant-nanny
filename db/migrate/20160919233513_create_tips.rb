class CreateTips < ActiveRecord::Migration[5.0]
  def change
    create_table :tips do |t|
      t.string :content
      t.integer :plant_id
      t.integer :user_id
      t.timestamps
    end
  end
end
