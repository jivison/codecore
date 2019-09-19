class Product < ApplicationRecord

    belongs_to :user
    has_many :reviews

    has_many :favourites, dependent: :destroy
    has_many :favouriters, through: :favourites, source: :user

    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings

    validates(:title, presence: true, uniqueness: true)
    validates(:price, numericality: { greater_than: 0 })
    validates(:description, presence: true, length: { minimum: 10 })

    before_validation :default_price, :capitalize_product_name

    private
    def default_price
        self.price ||= 1
    end

    def capitalize_product_name
        self.title.capitalize!
    end

end
