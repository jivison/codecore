def array_find_the_two(large_array)
    return large_array.reject { |elem| large_array.count(elem) < 2 }[0]
end

def hash_find_the_two(large_array)
    return large_array.inject(Hash.new(0)) { |count_hash, val|
        count_hash[val] = count_hash[val].next; count_hash
    }.each { |element, count| return element if count > 1 }
end

p hash_find_the_two((1..1_000).to_a.push(rand(1_000)))
p array_find_the_two((1..1_000).to_a.push(rand(1_000)))