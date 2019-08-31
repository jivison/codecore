def get_info(msg)
    print msg
    gets.chomp
end

def get_user_info
    user_info = {
        visited_cities: []
    }
    user_info[:first_name] = get_info("What is your first name? ")
    user_info[:last_name] = get_info("What is your last name? ")
    user_info[:age] = get_info("What is your age? ")
    puts "What cities have you visited? When you're done listing cities, type 'done'"
    loop do
        input = gets.chomp
        break if input == "done"
        user_info[:visited_cities] << input
    end
    user_info
end

p get_user_info