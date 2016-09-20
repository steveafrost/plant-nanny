Rails.application.routes.draw do
  root to: "static#home"
  get '/about', to: 'static#about'

  devise_for :users

  resources :plants
end
