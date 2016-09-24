require 'rails_helper'

RSpec.describe StaticController do
  describe "has a route for /about" do
    it "that displays information about the app" do
      expect(response).to render_template("about")
    end
  end

  describe "has a route for /profile" do
    it "that is a valid page" do
      get :profile
      expect(response.status).to eq(200)
    end
  end
end
