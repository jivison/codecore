class User < ApplicationRecord
    has_secure_password

    has_many :products
    has_many :reviews
    has_many :news_articles

    has_many :likes, dependent: :destroy
    has_many :liked_reviews, through: :likes, source: :review

    has_many :votes, dependent: :destroy
    has_many :voted_reviews, through: :votes, source: :review

    has_many :favourites, dependent: :destroy
    has_many :favourited_products, through: :favourites, source: :product

    def full_name
        "#{first_name} #{last_name}"
    end
end
