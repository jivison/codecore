require 'rails_helper'

RSpec.describe NewsArticlesController, type: :controller do

  def current_user
    @current_user ||= FactoryBot.create(:user)
  end

  describe "GET #new" do
    
    context "with user signed in" do

      before do
        session[:user_id] ||= current_user.id
      end
      
      it "should render the new template" do
        # When
        # A get request is made to new
        get :new
  
        # Then
        # Serve up the render template
        expect(response).to(render_template :new)
      end
  
      it "should create a new news article instance variable" do
        
        # When
        # The new action is callled
        get :new
        
        # Then
        # Create a new instance variable @news_article
        expect(assigns :news_article).to(be_a_new NewsArticle)
        
      end
    end

    context "without user signed in" do
      it "should redirect to the sign up page" do
        get :new
        expect(response).to(redirect_to new_session_path)
      end
    end


  end

  describe "POST #create" do

    def valid_post
      post(:create, params: {
        news_article: FactoryBot.attributes_for(:news_article)
      })
    end

    context "when a user is signed in" do
      
      before do
        session[:user_id] ||= current_user.id
      end

      context "when params are valid" do
    
        it "should create a new news article in the database" do
        
        # Submit a post request with valid data
        valid_post
  
        expect(NewsArticle.count).to(eq 1)
  
        end
  
        it "should redirect to the news article show page" do
          
          valid_post
  
          expect(NewsArticle).to(redirect_to assigns(:news_article))
  
        end
  
        it "should set a flash message" do
          
          valid_post
  
          expect(flash[:notice]).to be
        end
        
      end
      
      context "when params are invalid" do
        
        def invalid_request
          post(:create, params: {
            news_article: FactoryBot.attributes_for(:news_article, title: nil)
          })
        end
  
        it "should render the new page again" do
        
          invalid_request
  
          expect(response).to(render_template :new)        
  
        end
  
        it "should not create a new news article in the database" do
          
          invalid_request
  
          expect(NewsArticle.count).to(eq 0)
  
        end
  
      end
    end

    context "when a user isn't signed in" do
      it "should redirect to the sign in page" do
        valid_post
        expect(response).to(redirect_to new_session_path)
      end
    end



  end

  describe "DELETE #destroy" do

    it "should destroy the new article from the database" do

      news_article = FactoryBot.create(:news_article)
      bad_news_article = FactoryBot.create(:news_article)

      delete(:destroy, params: {id: bad_news_article.id})

      expect(NewsArticle.count).to(eq 1)

    end

    it "should redirect to the index" do
      
      news_article = FactoryBot.create(:news_article)

      delete(:destroy, params: {id: news_article.id})

      expect(response).to(redirect_to :news_articles)

    end

  end

  describe "GET #show" do

    def show_a_new_article
      news_article = FactoryBot.create(:news_article)
      get(:show, params: {id: news_article.id})
      news_article
    end

    it "should should render the show page" do
      
      news_article = show_a_new_article

      expect(response).to(render_template :show)

    end

    it "should assign the news article to a news article instance variable" do
      
      news_article = show_a_new_article

      expect(assigns :news_article).to(eq news_article)
      
    end

  end

  describe "GET #index" do
    
    def get_all_news_articles
      articles = [
        FactoryBot.create(:news_article),
        FactoryBot.create(:news_article),
        FactoryBot.create(:news_article)
      ]
      get :index
      articles
    end

    it "should render the index template" do
      
      get_all_news_articles
  
      expect(response).to(render_template :index)

    end

    it "should assign all news article to an instance variable" do
      
      news_articles = get_all_news_articles

      expect(assigns :news_articles).to(eq news_articles)

    end

    
  end

  describe "GET #edit" do
    
    def get_edit
      news_article = FactoryBot.create(:news_article)
      get :edit, params: {id: news_article.id}
      news_article
    end

    context "with user signed in" do

      before do 
        session[:user_id] ||= current_user.id
      end

      context "as the owner of the article" do

        it "should render the edit page" do
          
          news_article = FactoryBot.create(:news_article, user: current_user)
          get :edit, params: {id: news_article.id}
          expect(response).to(render_template :edit)
    
        end
    
        it "should load a news article into a instance variable" do
          
          news_article = FactoryBot.create(:news_article, user: current_user)
          get :edit, params: {id: news_article.id}
    
          expect(assigns :news_article).to(eq news_article)
        
        end
      end

      context "as a non-owner" do
        it "should redirect to the root page" do
          news_article = FactoryBot.create(:news_article)
          get :edit, params: {id: news_article.id}
          expect(response).to(redirect_to :root)
        end
        it "should flash an alert" do
          news_article = FactoryBot.create(:news_article)
          get :edit, params: {id: news_article.id}
          expect(flash[:alert]).to be
        end
      end

    end

    context "with user not signed in" do
      it "should redirect to the sign in page" do
        get_edit
        expect(response).to(redirect_to new_session_path)
      end
    end


  end

  describe "PATCH #update" do
    def valid_update
      news_article = FactoryBot.create(:news_article)
      patch_result = patch(:update, params: {news_article: FactoryBot.attributes_for(:news_article), id: news_article.id})
      [
        news_article,
        patch_result
      ]
    end
    
    context "with user signed in" do

      before do
        session[:user_id] = current_user.id
      end

      context "as article owner" do
        context "with valid params" do
    
          it "should update the news article in the database" do
            
            # updated = valid_update[1]
            news_article = FactoryBot.create(:news_article, user: current_user)
            original_article = news_article
              
            updated = patch(:update, params: {news_article: FactoryBot.attributes_for(:news_article), id: news_article.id})

            expect(NewsArticle.find(news_article.id)).to(eq original_article)
    
          end
      
          it "should redirect to that news article's show page" do

            news_article = FactoryBot.create(:news_article, user: current_user)
            
            original_article = news_article

            patch_result = patch(:update, params: {news_article: FactoryBot.attributes_for(:news_article), id: news_article.id})

            expect(response).to(redirect_to original_article)
    
          end
          
        end
    
        context "with invalid params" do

          def invalid_update
            news_article = FactoryBot.create(:news_article)
            patch(:update, params: {news_article: FactoryBot.attributes_for(:news_article, title: nil), id: news_article.id})
            news_article
          end
    
          it "should not update the news article in the database" do
            
            original_article = invalid_update
            unupdated_article = NewsArticle.find(original_article.id)
    
            expect(original_article).to(eq unupdated_article)
    
          end
    
          it "should render the edit template" do
            
            news_article = FactoryBot.create(:news_article, user: current_user)

            patch_result = patch(:update, params: {news_article: FactoryBot.attributes_for(:news_article, title: nil), id: news_article.id})

            expect(response).to(render_template :edit)
    
          end
          
        end
        
      end

      context "as non-owner" do
        it "should redirect to the root page" do
          valid_update
          expect(response).to(redirect_to :root)
        end
      end
    end

    context "with user not signed in" do
      it "should redirect to the sign in page" do
        valid_update
        expect(response).to(redirect_to new_session_path)
      end
    end



  end


end