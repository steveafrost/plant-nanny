class TipsController < ApplicationController

  def new
    @plant = Plant.find(params[:plant_id])
    @tip = @plant.tips.build
  end

  def create
    @plant.update(tip_params)
  end

  def show
    @tip = Tip.find(params[:id])
  end

  private

  def tip_params
    params.require(:tip).permit(:content)
  end
end
