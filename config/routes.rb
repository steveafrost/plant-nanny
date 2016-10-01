Rails.application.routes.draw do

  root to: "static#home"
  get '/about', to: 'static#about'
  get '/profile', to: 'static#profile'
  get '/tips/new', to: 'tips#new', as: 'new_tip'
  get '/plants/random', to: 'plants#random'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", :registrations => "registrations" }

  resources :plants do
    resources :tips
  end

end
