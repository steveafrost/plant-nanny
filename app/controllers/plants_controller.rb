class PlantsController < ApplicationController
  before_action :find_plant, except: [:index, :new, :create, :groups]

  def index
    @plants = Plant.all
    respond_to do |f|
      f.html
      f.json {render json: @plants}
    end
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
      redirect_to plant_path(@plant)
    end
  end

  def show
    respond_to do |f|
      f.html
      f.json {render json: @plant}
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def groups
    @difficulties = Plant.difficulties
  end

  private

  def plant_params
    params.require(:plant).permit(:id, :name, :difficulty, :amount_of_light, :amount_of_water, :frequency_of_water, :fun_fact, :tips_attributes => [:content])
  end

  def find_plant
    @plant = Plant.find(params[:id])
  end
end
