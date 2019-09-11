class Blog
  def initialize(title, content)
    @title = title
    @content = content
    @comments = []
  end

  def add_comment(comment)
    @comments << comment
  end

  def display
    puts "# #{@title} #"
    puts "- #{@content}"
    puts
    @comments.each { |comment| puts "\t#{comment.display}\n" }
  end

  def remove_comment(comment_id)
    @comments.pop(comment_id)
  end

end

class Comment
  def initialize(title, content)
    @title = title
    @content = content
  end

  def display
    "#{@title}\n\t\t  #{@content}"
  end 

end

my_blog = Blog.new("My Cool Blog 🆒", "Nothing to see here, just looking... 👀")
my_blog.add_comment(Comment.new( "this blog sucks", "go home" ))
my_blog.add_comment(Comment.new( "I agree", "cease your investigations" ))

my_blog.remove_comment(1)

my_blog.display
