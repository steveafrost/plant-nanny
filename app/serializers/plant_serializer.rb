class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :amount_of_light, :amount_of_water, :frequency_of_water, :fun_fact
  has_many :tips
end
