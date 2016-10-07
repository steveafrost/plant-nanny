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
  end

  def create
    @plant = Plant.new(plant_params)
    if !@plant.valid?
      render :new
    elsif existing_plant = Plant.find_by(name: params[:plant][:name])
      existing_plant.tips_attributes=(params[:plant][:tips_attributes])
      redirect_to plant_path(existing_plant)
    else
      @plant.save
      redirect_to plant_path(new_plant)
    end
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
    params.require(:plant).permit(:id, :name, :difficulty, :amount_of_light, :amount_of_water, :frequency_of_water, :fun_fact, :tips_attributes => [:content])
  end

  def find_plant
    @plant = Plant.find(params[:id])
  end
end
