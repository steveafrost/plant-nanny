require 'rails_helper'

RSpec.describe Plant, :type => :model do

  before(:each) do
    @plant = Plant.last
    @user = User.last
    @tip = Tip.create(content: "Great plant!", plant_id: @plant.id, user_id: @user.id)
  end

  describe 'model' do
    it 'has a class method that returns 10 random plants' do
      expect(Plant.random.length).to eq 10
    end

    it 'has a class method that lists all tips' do
      expect(Plant.tips).should be_empty
    end
  end

  describe 'validations' do
    it 'prevent a plant from being made with fields missing' do
      expect(@plant.name).to be_truthy
      expect(@plant.difficulty).to be_truthy
      expect(@plant.amount_of_light).to be_truthy
      expect(@plant.amount_of_water).to be_truthy
      expect(@plant.frequency_of_water).to be_truthy
      expect(@plant.fun_fact).to be_truthy
      expect(Plant.new(name: nil)).to be_false
    end
  end
end
