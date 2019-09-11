class AdminpanelController < ApplicationController

    def index
        redirect_to :root unless can? :view_adminpanel, ""
        @products = Product.all
        @reviews = Review.all
        @users = User.all
    end
end
