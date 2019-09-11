Rails.application.routes.draw do
  get 'welcome/index'
  
  get "/questions/new", {to: "questions#new", as: :new_question}
  
  get 'questions/new'

  get 'questions/:id', {to: "questions#show", as: :question }

  post 'questions', {to: 'questions#create', as: :questions}

  get '/questions', {to: "questions#index"}

  resources :questions

  root to: "welcome#index"
end
