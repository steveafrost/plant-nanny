class Tip < ApplicationRecord
  belongs_to :user
  belongs_to :plant

  validates :content, presence: true
end
