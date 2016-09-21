Rails.application.routes.draw do

  root to: "static#home"
  get '/about', to: 'static#about'
  get '/tips/new', to: 'tips#new', as: 'new_tip'

  devise_for :users

  resources :plants
end
