class Tip < ApplicationRecord
  belongs_to :user, :optional => true
  belongs_to :plant, :optional => true

  validates :content, presence: true

  def self.recent_activity
    Tip.limit(10).order('id desc')
  end
end
