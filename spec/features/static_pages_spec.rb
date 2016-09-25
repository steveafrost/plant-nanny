require 'rails_helper'

RSpec.describe "Static pages", :type => :feature do
  describe "GET #home" do
    it "is a valid page" do
      visit root_path
      expect(page.status_code).to eq(200)
    end
  end

  describe "GET #about" do
    it "is a valid page" do
      visit about_path
      expect(page.status_code).to eq(200)
    end

    it "renders the :about view" do
    end
  end

  describe "GET #profile" do
    it "is a valid page" do
      visit profile_path
      expect(page.status_code).to eq(200)
    end

    it "shows all of users plants" do
      user = build(:user)
      plants = user.plants.first
      visit profile_path
      expect(page).to have_content(plants)
    end
  end
end
