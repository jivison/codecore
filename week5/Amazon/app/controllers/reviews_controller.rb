class ReviewsController < ApplicationController
  def new
  end

  def create
    @product = Product.find params[:product_id]
    review_params = params.require(:review).permit(:body, :rating)
    @review = Review.new review_params.merge({
      is_hidden: false
    })
    @review.product = @product
    @review.user = current_user

    if @review.save
      redirect_to @product
    else
      @reviews = @product.reviews.order(created_at: :desc)
      render 'products/show'
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @product = Product.find params[:product_id]
    return redirect_to root_path unless can?(:crud, @review)
    @review.destroy
    redirect_to @product
  end

  def hide
    @review = Review.find(params[:id])
    @review.update({
      is_hidden: !@review.is_hidden
    })
    redirect_to @review.product
  end

end
