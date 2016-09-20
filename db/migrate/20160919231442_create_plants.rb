class CreatePlants < ActiveRecord::Migration[5.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :difficulty
      t.integer :amount_of_light
      t.integer :amount_of_water
      t.integer :frequency_of_water
      t.string :fun_fact

      t.timestamps
    end
  end
end
