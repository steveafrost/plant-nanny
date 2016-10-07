class Plant < ApplicationRecord
  has_many :tips, :inverse_of => :plant
  has_many :users, :through => :tips

  validates :name, :fun_fact, presence: true
  validates :difficulty, :amount_of_light, :amount_of_water, :frequency_of_water, :inclusion => 1..5

  def self.random
    Plant.order("RANDOM()").limit(10)
  end

  def tips_attributes=(attributes)
    attributes.values.each do |attribute|
      tip = self.tips.build(attribute)
      tip.user = User.current
    end
  end
end
