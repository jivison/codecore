Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "home#index"
  
  # GETS
  get 'home/index'
  get 'home/about'
  get 'home/contact_us'
  get 'home/bill_splitter'
  
  # POSTS
  post 'home/thank_you'
  post 'home/bill_splitter'


end
