class QuestionsController < ApplicationController
  def new
    @question = Question.new
    render :new
  end

  def create
    binding.pry
    @question = Question.new question_params
  end

  def show
    @question = Questions.find params[:id]
  end

  def index
    @questions = Question.all
  end

  private
  def question_params
    # We must have a question object on the params of this request
    params.require(:question).permit(:title, :body)
    if @question.save
      flash[:notice] = "Question created successfully"
      redirect_to question_path(@question)
    else
      render(:new)
    end
  end
end
