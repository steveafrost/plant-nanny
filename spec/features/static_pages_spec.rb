require 'rails_helper'

RSpec.describe "Static pages -", :type => :feature do
  describe "home page" do
    it "is a valid page" do
      visit root_path
      expect(page.status_code).to eq(200)
    end
  end

  describe "about page" do
    it "is a valid page" do
      visit about_path
      expect(page.status_code).to eq(200)
    end

    it "renders the about view" do
      visit about_path
      expect(page).to have_content("Plant Nanny")
    end
  end

  describe "profile page" do
    it "is a valid page" do
      visit profile_path
      expect(page.status_code).to eq(200)
    end

    it "shows users plants" do
      user = build(:user)
      plant = build(:plant)
      user.plants << plant
      first_plant = user.plants.first
      visit profile_path
      expect(page).to have_content(first_plant.name)
    end
  end
end
