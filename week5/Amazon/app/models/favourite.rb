class Favourite < ApplicationRecord
  belongs_to :product
  belongs_to :user

  validates :product_id, uniqueness: { scope: :user_id, message: "has already been favourited" }
end
