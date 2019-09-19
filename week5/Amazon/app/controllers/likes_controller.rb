class LikesController < ApplicationController
  before_action :authenticate_user!

  def create
    like = Like.new(user: current_user, review_id: params[:review_id])
    if !can?(:like, like.review)
      flash[:alert] = "You can't like this!"
    elsif like.save
      flash[:success] = "Review liked"
    end
    redirect_to product_path(Review.find(params[:review_id]).product)
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy
    redirect_to like.review.product
  end
end
