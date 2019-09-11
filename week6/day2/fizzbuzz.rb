class FizzBuzz
    attr_writer(:num1, :num2)

    def initialize(num1, num2)
        @num1 = num1
        @num2 = num2        
    end

    def run
        (1..100).map do |i|
            (i % (@num1 * @num2) == 0) ? "fizzbuzz" 
            : (i % @num1 == 0) ? "fizz" 
            : (i % @num2 == 0) ? "buzz" 
            : i 
        end
    end
end


fb = FizzBuzz.new(99, 8)
fb.num1 = 2
puts fb.run