class Tip < ApplicationRecord
  belongs_to :user, :optional => true
  belongs_to :plant, :optional => true

  validates :content, presence: true

end
