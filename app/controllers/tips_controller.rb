class TipsController < ApplicationController
  def new
  end

  def show
    @tip = Tip.find(params[:id])
  end
end
