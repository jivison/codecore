def fibonacci(n)
    numbers = []
    n.times { numbers.push ((numbers.length > 1) ? numbers[-1] + numbers[-2] : 1) }
    return numbers
end


p fibonacci(3)