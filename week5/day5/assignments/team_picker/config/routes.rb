Rails.application.routes.draw do

  root to: "home#index"
  
  get 'home/index'
  get 'home/team_picker'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post 'home/team_picker'
end
