# Meta programming
# Programming techhniques that perform operations
# on the running code itself

# This sucks
def one
    1
end

def two
    2
end

# define_method

# This method allows us to define methods dynamically while the program is running
# 🆒

numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four",
    5 => "five"
}

numbers.each do |numeral, word| 
    define_method(word) { "#{word} - #{numeral}" }
end

# three => 3
# four => 4
# ten => <error>

# eval
# The eval method takes a string as an argument and will attempt to evaluate the string as ruby code 
# D A N G E R

eval("puts 1 + 1")

cool_eval = -> do
    puts "🆒"
    eval('cool_eval.call')
end

# Stack overflow
# eval("cool_eval.call")


# send
# Takes a string or symbol as a first argument named after a method
# Attempts to call method with that name

product = 

send(:product)
send("prod" + "uct", 1, 2, 3)
