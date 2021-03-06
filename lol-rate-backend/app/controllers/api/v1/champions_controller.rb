class Api::V1::ChampionsController < ApplicationController
    before_action :set_champion, only: [:show, :update, :destroy]


  # GET /champions
  def index
    @champions = Champion.all

    render json: @champions
  end

  # GET /champions/1
  def show
    render json: @champion
  end

  # POST /champions
  def create
    @champion = Champion.new(champion_params)
    if @champion.save
      render json: @champion
    else
      render json: {message: @champion.errors }, status: 400
    end
  end


  # PATCH/PUT /champions/1
  def update
    if @champion.update(champion_params)
      render json: @champion
    else
      render json: @champion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /champions/1
  def destroy
    @champion.destroy
  end



  private
  # Use callbacks to share common setup or constraints between actions.
  def set_champion
    @champion = Champion.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def champion_params
    params.require(:champion).permit(:name, :lane, :url)
  end


end
