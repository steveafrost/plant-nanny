require 'rails_helper'

RSpec.describe Plant, :type => :model do

  it 'class method #random returns 10 random plants' do
    expect(Plant.random.length).to eq 10
  end

  it 'class method #tips lists all tips' do
    plant = FactoryGirl.create(:plant)
    expect(plant.tips).to be_empty
    end

  it 'is invalid without a name' do
    expect(@plant.name).to be_truthy
    expect(Plant.new(name: nil)).to be_false
  end
end
