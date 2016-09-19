Rails.application.routes.draw do
  get 'static/home'

  get 'static/about'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static#home"

  devise_for :users
end
