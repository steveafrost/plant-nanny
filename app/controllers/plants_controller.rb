class PlantsController < ApplicationController
  before_action :find_plant, except: [:index, :new, :create]

  def index
    @plants = Plant.all
  end

  def new
    @plant = Plant.new
  end

  def create
    @plant = Plant.create(plant_params)
    redirect_to plant_path(@plant)
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def plant_params
    params.require(:plant).permit(:name, :difficulty, :amount_of_light, :amount_of_water, :frequency_of_water, :fun_fact)
  end

  def find_plant
    @plant = Plant.find(params[:id])
  end
end
