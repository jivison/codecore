class NewsArticle < ApplicationRecord

    belongs_to :user

    before_save :titleize_title

    validates :title, presence: true, uniqueness: true

    validates :description, presence: true

    validate :published_after_created

    def publish
        self.published_at = DateTime.current.utc
        self.published_at
    end
    
    private
    def published_after_created
        errors.add(:published_at, "needs to be after created_at") if created_at && published_at && created_at >= published_at
    end

    def titleize_title
        self.title = self.title.titlecase
    end
    
end
