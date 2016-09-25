class Plant < ApplicationRecord
  has_many :tips
  has_many :users, :through => :tips

  accepts_nested_attributes_for :tips

  def self.random
    Plant.order("RANDOM()").limit(10)
  end
end
