class Plant < ApplicationRecord
  has_many :tips
  has_many :users, :through => :tips

  accepts_nested_attributes_for :tips

  validates :name, :fun_fact, presence: true
  validates :difficulty, :amount_of_light, :amount_of_water, :frequency_of_water, :inclusion => 1..5

  def self.random
    Plant.order("RANDOM()").limit(10)
  end
end
