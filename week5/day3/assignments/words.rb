def words
    words = []
    loop do
        print "> "
        user_input = gets.chomp
        (user_input == "exit") ? break : words << user_input
    end
    puts "You have entered #{words.length} words."
    words.each.with_index { |word, index| puts "#{index}. #{word}" }
end

words