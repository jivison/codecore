def reduce(array, initial=array[0])
    array.each { |element| initial = yield(initial, element) }
    initial
end


p reduce([1, 2, 3, 4], []) { |acc, element| acc + [element * 2] }