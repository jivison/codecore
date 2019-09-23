class ProductsController < ApplicationController
  
  before_action :find_product, only: [:show, :edit, :update, :delete]
  before_action :authorize!, only: [:edit, :update, :delete, :destroy]
  
  def new
    @product = Product.new
    render :new
  end
  
  def create
    @product = Product.new product_params
    @product.user = current_user
    if @product.save
      ProductMailer.new_product(@product).deliver_later
      redirect_to product_path(@product)
    else
      render :new
    end
  end 

  def update
    if @product.update product_params
      redirect_to product_path(@product)
    else
      render :show
    end
  end

  def index
    @products = Product.all.sort_by { |product| product.title }
    if params[:tag]
      @tag = params[:tag]
      @products.select! { |product| product.tags&.map(&:name).include? params[:tag] }
    end
  end

  def show
    @reviews = @product.reviews
    @review = Review.new
    @like_hash = Like.all.select { |like| like.user == current_user }.inject({}) do |acc, like|
      acc[like.review.id] = like
      acc
    end
    @favourite = Favourite.find_by(user: current_user, product: @product)
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  private
  def find_product
    @product = Product.find params[:id]
  end

  def product_params
    params.require(:product).permit :title, :description, :price, { tag_ids: [] }
  end

  def authorize!
    redirect_to :root, alert: "Not authorized" unless can?(:crud, @product)
  end

end

