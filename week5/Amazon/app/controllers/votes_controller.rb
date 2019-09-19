class VotesController < ApplicationController
    
    before_action :authenticate_user!

    def create
      vote = Vote.new(user: current_user, review_id: params[:review_id], is_up: params[:is_up])
      if !can?(:vote, vote.review)
        flash[:alert] = "You can't vote on this!"
      elsif vote.save
        flash[:success] = "Review voted on"
      end
      redirect_to product_path(Review.find(params[:review_id]).product)
    end
  
    def destroy
      vote = Vote.find(params[:id])
      vote.destroy
      redirect_to vote.review.product
    end

    def switch_up
        vote = Vote.find(params[:id])
        puts vote.id
        vote.update(is_up: true)
        redirect_to vote.review.product
    end

    def switch_down
        vote = Vote.find(params[:id])
        puts vote.id
        vote.update(is_up: false)
        redirect_to vote.review.product
    end

end
