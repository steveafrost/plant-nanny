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
    @plant.tips.build
  end

  def create
    @plant = Plant.new(plant_params)
    if !@plant.save
      render :new
    elsif @plant = Plant.find_by(:name => params[:plant][:name])
      flash[:notice] = "Plant already exists. Please add a tip to add this plant to your profile"
      redirect_to plant_path(@plant)
    else
      @plant = Plant.create(plant_params)
      @plant.tips.last.user = current_user
      @plant.tips.last.plant = @plant
      @plant.save
      redirect_to plant_path(@plant)
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
