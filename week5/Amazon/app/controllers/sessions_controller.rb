class SessionsController < ApplicationController
    def new
    end

    def create
        @user = User.find_by({email: params[:email]})
        if @user&.authenticate params[:password]
            session[:user_id] = @user.id
            redirect_to :root, notice: "Logged in!"
        else
            flash[:alert] = "Wrong email or password"
            render :new
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to :root, notice: "Logged out"
    end

end
