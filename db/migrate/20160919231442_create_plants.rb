class CreatePlants < ActiveRecord::Migration[5.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :fun_fact
      t.integer :amount_of_light
      t.integer :frequency_of_water
      t.integer :difficulty

      t.timestamps
    end
  end
end
