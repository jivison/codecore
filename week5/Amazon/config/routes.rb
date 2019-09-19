Rails.application.routes.draw do
  get 'tag/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "home#index"
  
  # misc GETs
  get 'home/index'
  get 'home/about'
  get 'home/contact_us'
  get 'home/bill_splitter'
  
  # misc POSTs
  post 'home/thank_you'
  post 'home/bill_splitter'

  resources :news_articles

  # products
  resources :products do
    resources :reviews, only: [:create, :destroy] do
      resources :likes, only: [:create, :destroy], on: :collection, shallow: true
      resources :votes, only: [:create, :destroy], on: :collection, shallow: true

      
    end
    
    resources :favourites, only: [:create, :destroy], on: :collection, shallow: true
    
    resources :taggings, only: [:create, :destroy], on: :collection, shallow: true
    
  end
  
  post "reviews/:review_id/votes/:vote_id/up", to: "votes#switch_up", as: :vote_up
  post "reviews/:review_id/votes/:vote_id/down", to: "votes#switch_down", as: :vote_down

  get "products/:id/reviews/hide", as: :hide_review, to: "reviews#hide"
  get "/admin/panel", to: "adminpanel#index"

  resources :users, only: [:new, :create]

  resources :sessions, only: [:new, :create] do
    delete :destroy, on: :collection
  end

end
