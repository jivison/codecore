class ProductMailer < ApplicationMailer

    def new_product(product)
        @product = product
        @user = product.user
    end

end
