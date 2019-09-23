class ProductMailer < ApplicationMailer

    def new_product(product)
        @product = product
        @user = product.user
        mail(
            to: @user.email,
            subject: "#{@product.title} has been created",
            from: "info@amazon.xyz"
        )
    end

end
