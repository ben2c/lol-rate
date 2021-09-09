class Api::V1::ChampionOwnershipsController < ApplicationController

    before_action :set_champion_ownership, only: [:show, :update, :destroy]


    # GET /champion_ownerships
    def index
      @champion_ownerships = ChampionOwnership.all
  
      render json: @champion_ownerships
    end
  
    # GET /champion_ownerships/1
    def show
      render json: @champion_ownership
    end
  
    # POST /champion_ownerships
    def create
      @champion_ownership = ChampionOwnership.new(champion_ownership_params)
      if @champion_ownership.save
        render json: @champion_ownership
      else
        render json: {message: @champion_ownership.errors }, status: 400
      end
    end
  
  
    # PATCH/PUT /champion_ownerships/1
    def update
      if @champion_ownership.update(champion_ownership_params)
        render json: @champion_ownership
      else
        render json: @champion_ownership.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /champion_ownerships/1
    def destroy
      @champion_ownership.destroy
    end
  
  
  
    private
    # Use callbacks to share common setup or constraints between actions.
    def set_champion_ownership
      @champion_ownership = ChampionOwnership.find(params[:id])
    end
  
    # Only allow a trusted parameter "white list" through.
    def champion_ownership_params
      params.require(:champion_ownership).permit(:champion_id, :user_id)
    end
  
end
