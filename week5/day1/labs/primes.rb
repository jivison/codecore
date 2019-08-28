require 'prime'

def primesCheating(num)
    return Prime.first(num)
end

def primes(num)
    output = []
    x = 1
    until output.length == num
        for factor in (2..(x/2).ceil)
            if x % factor == 0
                break
            end
            if factor == (x/2).ceil
                output.push(x)
            end
        end
        x += 1
    end
    return output
end


puts primes(100)