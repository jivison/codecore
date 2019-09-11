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
  end

  def show
    @reviews = @product.reviews
    @review = Review.new
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
    params.require(:product).permit :title, :description, :price
  end

  def authorize!
    redirect_to :root, alert: "Not authorized" unless can?(:crud, @product)
  end

end

