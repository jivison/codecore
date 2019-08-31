def my_method
    puts "We are in the method"
end

# Yes, this method name is valid
def my_other_method😉(x)
    # the 'yield' keyword executes a block passed to the method
    yield_return = yield
    puts "Yielded block returned #{yield_return}"
end

def 👉(🔤)
    puts 🔤
end

def 🍔
    👉 "Top bun"
    # Without this it would throw an error
    yield if block_given?
    👉 "Bottom bun"
end

# 🍔 do
#     👉 "Lettuce"
#     👉 'tomato'
#     👉 'patty of unknown makeup'
# end

def each(array)
    for element in array
        yield(element) if block_given?
    end
end


def map(array)
    (block_given?) ? array.reduce([]) { |mapped_array, element| mapped_array << yield(element) } : array
end

def filter(array)
    (block_given?) ? array.reduce([]) { |filtered_array, element|
        yield(element) ? filtered_array << element : filtered_array } : array
end

p filter([1, 2, 3, 4, 5]) { |element| element % 2 == 0 }
