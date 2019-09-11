Rails.application.routes.draw do

    delete "/questions/:id",        to: "questions#destroy"
    get "/questions/:id/edit",      to: "questions#edit"
    get "/questions/:id",           to: "questions#show"
    post "/questions/:id/comments"  to: "comments#create"
    
    
    get "/faq"                      to: "home#faq"
    get "/admin/questions"          to: "admin/questions#index"
    

end