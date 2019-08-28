def get_user_info()
    user_info = {
        first_name: nil,
        last_name: nil, 
        city_of_birth: nil,
        age: nil
    }
    user_info.each do |key, value|
        print "What is your #{key.to_s.gsub('_', ' ')}? "
        user_info[key] = gets.chomp.capitalize
    end
    user_info.each { |key, val| puts "Your #{key.to_s.gsub('_', ' ')} is #{val}." }
end


get_user_info()