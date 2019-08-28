
fizzbuzz = Array.new(100) { |num| [[15, "fizzbuzz"], [3, "fizz"], [5, "buzz"], [1, num]].map { | element |element[1] if num % element[0] == 0}.compact[0]}


p fizzbuzz
