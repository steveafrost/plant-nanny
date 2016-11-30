class TipsController < ApplicationController
  before_action :set_plant, except: [:recent, :show]

  def index
    @tips = Tip.all
    render json: @tips
  end

  def new
    @tip = Tip.new
  end

  def create
    @plant.tips << Tip.create(tip_params)
    render 'overlay_response', :layout => false
  end

  def show
    @tip = Tip.find(params[:id])
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @tip}
    end
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
