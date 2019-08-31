# A proc is an instance of the proc class
# Which holds a code block to be executed and stored in a variable

my_proc = Proc.new { |x| puts x }

# Calls the proc
my_proc.call(5)

# There is no dedicated lambda class
# It is a special type of proc

my_lambda = lambda { |x| puts x }

# Another way to define a lambda
# 'stabby lambda'
lambda_add = ->(a, b) { a + b }

# Calls the lambda
my_lambda.call(5)

# A proc behaves differently than a lambda
# Especially when it comes to arguments

a = Proc.new {|x, y| puts "I don't care about arguments" }
a2 = proc {|x, y| puts "I don't care about arguments" }

a.call # No errors thrown



b = lambda {|x, y| puts "I care about arguments" }
# b.call          # U N A C C E P T A B L E
b.call(1, 2)    # This pleases the lambda


# Procs and lambdas also handle 'return' differently
# --> A lambda will return normally, like a method
# --> A proc will return from the method enclosing the proc

def proc_return
    my_proc = Proc.new {return}
    my_proc.call
    puts "Will this be printed (Proc)"
end

def lambda_return
    my_lambda = -> {return}
    my_lambda.call
    puts "Will this be printed (Lambda)"
end

proc_return
lambda_return