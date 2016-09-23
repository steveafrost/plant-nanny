require 'rails_helper'

RSpec.describe Plant, type: :model do
  it 'has a method that returns 10 random plants' do
    expect(Plant.random.length).to eq 10
  end
end
