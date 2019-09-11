class ApplicationController < ActionController::Base
    def current_user
        if session[:user_id].present?
            @current_user ||= User.find_by(id: session[:user_id])
        end
        @current_user
    end
    helper_method(:current_user)

    #helper method current_user makes it available to all views or templates

    def user_signed_in?
        current_user.present?
    end
    helper_method :user_signed_in?  

    def authenticate_user!
        unless user_signed_in?
            flash[:danger] = "You betta sign yo self in foo!"
            redirect_to new_session_path
        end    
    end
end
