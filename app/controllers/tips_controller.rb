class TipsController < ApplicationController

  def new
    @plant = Plant.new
    @tip = @plant.tips.build
  end

  def show
    @tip = Tip.find(params[:id])
  end
end
