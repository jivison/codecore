require 'rails_helper'

RSpec.describe NewsArticle, type: :model do

  describe "validates" do
    it("should have a title") do
      
      news_article = NewsArticle.new({
        description: "this is a test description"
      })

      news_article.valid?

      expect(news_article.errors).to(have_key :title)

    end

    it("should have a unique title") do

      news_article = FactoryBot.create(:news_article,
        title: "Original Title",
        description: "a description"
      )
      fake_news_article = FactoryBot.build(:news_article,
        title: "Original Title",
        description: "I'm unoriginal"
      )

      fake_news_article.valid?

      expect(fake_news_article.errors).to(have_key :title)

    end

    it("should have a description") do
      news_article = FactoryBot.build(:news_article,
        description: nil
      )

      news_article.valid?

      expect(news_article.errors).to(have_key :description)

    end

    it("should be published after it was created") do

      news_article = FactoryBot.create(:news_article,
        title: "time-shifting article",
        description: "this should break",
        published_at: DateTime.current - 4.days
      )

      news_article.valid?

      expect(news_article.errors).to(have_key :published_at)

    end

  end

  describe "titleize" do

    it("should save with a title in titlecase") do
      news_article = FactoryBot.create(:news_article,
        title: "im in all lower case and not in titlecase",
        description: "aaaaaaaaaaaaaaaaaaaaaaaaaa titleize"
        
      )

      expect(news_article.title).to(eq "Im In All Lower Case And Not In Titlecase")

    end

  end

  describe "#publish"

    it("should have a publish method that publishes with the current time") do
    
      news_article = NewsArticle.new({
        title: "Publish me please",
        description: "Publish me please but a description"
      })

      current_time, published_at = DateTime.current.utc, news_article.publish

      publish_time = news_article.published_at

      expect(publish_time).to(be_within(1.seconds).of current_time)

    end

  end
  
