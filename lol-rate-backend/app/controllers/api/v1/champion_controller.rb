class Api::V1::ChampionController < ApplicationController

    # GET /champions
  def index
    @champions = Champion.all

    render json: @champions
  end
end
