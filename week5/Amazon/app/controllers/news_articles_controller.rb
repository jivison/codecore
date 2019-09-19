class NewsArticlesController < ApplicationController
  before_action :find_news_article, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:edit, :update, :new, :create]
  before_action :authorize!, only: [:edit, :update]

  def new
    @news_article = NewsArticle.new
  end

  def create
    @news_article = NewsArticle.new news_article_params
    @news_article.user = current_user
    if @news_article.save
      redirect_to @news_article
      flash[:notice] = 'Article created!'
    else
      render :new
    end
  end

  def destroy
    @news_article.destroy
    redirect_to :news_articles
  end

  def show
  end

  def index
    @news_articles = NewsArticle.all
  end

  def edit
  end

  def update
    if !can?(:crud, @news_article)
      redirect_to :root
    elsif @news_article.update news_article_params
      redirect_to @news_article
    else
      render :edit
    end
  end

  private
  def find_news_article
    @news_article = NewsArticle.find(params[:id])
  end

  def news_article_params
    params.require(:news_article).permit(:title, :description, :view_count)
  end

  def authorize!
    redirect_to :root, alert: "Not Authorized" unless can?(:crud, @news_article)
  end

end
