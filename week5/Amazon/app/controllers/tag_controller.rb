class TagController < ApplicationController
  def index
    @tags = Tag.order(name: :asc)
  end
end
