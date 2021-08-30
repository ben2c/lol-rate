class Api::V1::ChampionController < ApplicationController

    # GET /champions
  def index
    @champions = Toy.all

    render json: @champions
  end
end
