def two_letters(string)
    return string.split("").permutation(2).to_a.map { |val| val.join("") }
end


p two_letters("abc")