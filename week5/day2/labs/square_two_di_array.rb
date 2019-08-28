def square(array_of_arrays)
    return array_of_arrays.map { |array| array.map { |element| element ** 2 } }
end


array = [[2,3,4], [5,6,7], [6,7,8]]
p square(array)
