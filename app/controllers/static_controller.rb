class StaticController < ApplicationController
  def home
  end

  def about
  end

  def profile
    if current_user
      @myplants = current_user.plants.uniq
      render :profile
    else
      flash[:alert] = "You must be logged in to view your plants"
      redirect_to root_path
    end
  end
end
