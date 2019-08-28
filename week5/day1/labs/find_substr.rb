def last_n_chars(str, n)
    return str.reverse[0..n - 1]
end

puts last_n_chars("Hello, world!", 3)