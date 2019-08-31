def pluck(array_of_hashes, key_name)
    return array_of_hashes.reduce([]) { |acc, hash| acc << hash[key_name] }
end

p pluck([{a:1}, {a:2}, {b:2}], :a)