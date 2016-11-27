Rails.application.routes.draw do

  root to: "static#home"
  get '/about', to: 'static#about'
  get '/profile', to: 'static#profile'
  get '/tips/new', to: 'tips#new', as: 'new_tip'
  get '/tips/recent', to: 'tips#recent', as: 'recent_activity'
  get '/tips/:id', to: 'tips#show'
  get '/tips', to: 'tips#index'
  get '/plants/groups', to: 'plants#groups'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", :registrations => "registrations" }

  resources :plants do
    resources :tips
  end

end
