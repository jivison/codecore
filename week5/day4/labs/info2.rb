
my_info = {}


def display_info(info)
    yield
    info.each do |key, value|
        print "Your #{key} is #{value}. \n"
    end
end

display_info(my_info) do
    print "Please enter your first name >>"
    my_info["first name"] = gets.chomp.capitalize()
    print "Please enter your last name >>"
    my_info["last name"] = gets.chomp.capitalize()
    print "Please enter your birth city >>"
    my_info["birth city"] = gets.chomp
    print "Please enter your age >>"
    my_info["age"] = gets.chomp
end