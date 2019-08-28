def get_books() 
    books = []
    loop do
        puts "Name a book> "
        user_input = gets.chomp
        break if user_input == "exit"
        books.append(user_input)
    end
    return books.sort.map { | book | book.capitalize }
end

p get_books()