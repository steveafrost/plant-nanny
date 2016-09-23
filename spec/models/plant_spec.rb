require 'rails_helper'

RSpec.describe Plant, :type => :model do

  before(:each) do
    @plant = Plant.last
    @user = User.last
    @tip = Tip.create(content: "Great plant!", plant_id: @plant.id, user_id: @user.id)
  end

  describe 'model' do
    it '#random returns 10 random plants' do
      expect(Plant.random.length).to eq 10
    end

    it '#tips lists all tips' do
      expect(Plant.tips).should be_empty
    end
  end

  it 'is invalid without a name' do
    expect(@plant.name).to be_truthy
    expect(Plant.new(name: nil)).to be_false
  end
end
