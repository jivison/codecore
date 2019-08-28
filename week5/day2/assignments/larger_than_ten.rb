def larger_than_ten(array)
    return array.reject { |elem| elem.to_s.to_i <= 10 }
end


p larger_than_ten([1,4,5,23,14,"Hello there", false, nil])