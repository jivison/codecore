def palindrome?(string)
    return string.upcase == string.upcase.reverse
end

puts palindrome?("epicipe")