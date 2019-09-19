class AddPublishedAtToNewsArticle < ActiveRecord::Migration[6.0]
  def change
    add_column :news_articles, :published_at, :timestamp
  end
end
