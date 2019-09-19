class Tag < ApplicationRecord
    before_validation :downcase_name!

    has_many :taggings, dependent: :destroy
    has_many :products, through: :taggings

    validates :name, uniqueness: { case_sensitive: false }

    private
    def downcase_name!
        self.name&.downcase!
    end

end
