require 'rails_helper'

RSpec.describe StaticController do
  describe "GET #home" do
    it "is a valid page" do
      get :home
      expect(response.status).to eq(200)
    end
  end

  describe "GET #about" do
    it "is a valid page" do
      get :about
      expect(response.status).to eq(200)
    end

    it "renders the :about view" do
    end
  end

  describe "GET #profile" do
    it "is a valid page" do
      get :profile
      expect(response.status).to eq(200)
    end

    it "shows all of users plants" do
      user = build(:user)
      plants = user.plants
      get :profile
      expect(page).to include plants
    end
  end
end
