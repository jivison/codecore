def most_common_letter(string)
    return string.gsub(/[^\w]/, "").split("").inject(Hash.new(0)) { |count_hash, letter|
        count_hash[letter] += 1 
        count_hash
    }.sort_by{ |letter, count| count }[-1][0]
end


# The pipes and spaces won't be counted
p most_common_letter("aaaaaaaaabvsabkjasbkva                ||||||||||||||||||bvjd usia hjl aisgkj bas bdsjk l")