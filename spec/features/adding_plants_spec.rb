require 'rails_helper'

RSpec.describe "Plant management -", :type => :feature do
  before(:each) do
    visit new_user_session_path
    fill_in "user[email]", with: "test@test.com"
    fill_in "user[password]", with: "testtest"
  end

  describe "adding a plant" do
    it "adds that plant to the users collection of plants" do
      user = current_user
      plant = create(:plant)
      visit new_plant_path
      fill_in "plant[name]", with: plant.name
      fill_in "plant[difficulty]", with: plant.difficulty
      fill_in "plant[amount_of_light]", with: plant.amount_of_light
      fill_in "plant[amount_of_water]", with: plant.amount_of_water
      fill_in "plant[frequency_of_water]", with: plant.frequency_of_water
      fill_in "plant[fun_fact]", with: plant.fun_fact
      expect(user.plants.last).to eq plant
    end
  end
end
