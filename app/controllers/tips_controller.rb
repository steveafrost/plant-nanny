class TipsController < ApplicationController
  before_action :set_plant, except: [:recent]

  def new
    @tip = Tip.new
  end

  def create
    @plant.tips << Tip.create(tip_params)
    redirect_to plant_tip_path(@plant, @plant.tips.last)
  end

  def show
    @tip = Tip.find(params[:id])
  end

  def recent
    @tips = Tip.recent_activity
  end

  private

  def tip_params
    params.require(:tip).permit(:content).merge(user_id: current_user.id)
  end

  def set_plant
    @plant = Plant.find(params[:plant_id])
  end
end
