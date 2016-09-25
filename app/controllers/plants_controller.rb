class PlantsController < ApplicationController
  before_action :find_plant, except: [:index, :new, :create, :random]

  def index
    @plants = Plant.all
  end

  def random
    @plants = Plant.random
  end

  def new
    @plant = Plant.new
    @tip = @plant.tips.build
  end

  def create
    @plant = Plant.find_by_name(params[:plant][:name]) || Plant.create(plant_params)
    current_user.plants << @plant unless current_user.plants.includes(@plant)
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
    params.require(:plant).permit(:id, :name, :difficulty, :amount_of_light, :amount_of_water, :frequency_of_water, :fun_fact)
  end

  def find_plant
    @plant = Plant.find(params[:id])
  end
end
