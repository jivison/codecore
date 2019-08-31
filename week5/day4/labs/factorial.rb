def factorial(num)
    return num.downto(1).reduce(1) { |product, num| product * num }
end

p factorial 100
