Rails.application.routes.draw do
  resources :champion_ownerships
  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :champions
    end 
  end 
 end