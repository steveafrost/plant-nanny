class StaticController < ApplicationController
  def home
  end

  def about
  end

  def profile
    if current_user
      render :profile
    else
      flash[:alert] = "You must be logged in to view your plants"
    end
  end
end
