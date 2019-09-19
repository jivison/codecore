class FavouritesController < ApplicationController
  def create
    favourite = Favourite.new(user: current_user, product_id: params[:product_id])
    if !can?(:favourite, favourite.product)
      flash[:alert] = "You can't favourite this!"
    elsif favourite.save
      flash[:success] = "Product favourited"
    end
    redirect_to product_path(Product.find(params[:product_id]))
  end

  def destroy
    favourite = Favourite.find(params[:id])
    favourite.destroy
    redirect_to favourite.product
  end
end
