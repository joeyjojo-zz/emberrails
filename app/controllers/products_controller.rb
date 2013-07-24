class ProductsController < ApplicationController
  #before_filter :ensure_authenticated_user, only: [:create]

  # Returns list of users. This requires authorization
  def index
    render json: Product.all
  end

  def show
    render json: Product.find(params[:id])
  end

  def create
    product = Product.create(product_params)
    if product.new_record?
      render json: { errors: product.errors.messages }, status: 422
    else
      render json: product.title, status: 201
    end
  end

  private

  # Strong Parameters (Rails 4)
  def product_params
    params.require(:product).permit(:title, :description, :image_url, :price)
  end
end
