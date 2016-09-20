class Plant < ApplicationRecord
  belongs_to :user
  has_many :tips
end
