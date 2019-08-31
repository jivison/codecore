# In ruby methods can take named arguments
# named arguments are written as key-valu pairs
# They must be given a default value

def add(first: 0, second: 1)
    first + second
end

add # works
# add(5, 5)  # broke
add(first: 1, second: 5)  # not brok

add_hash = {first: 5, second: 10}

add(add_hash) # Work

def some_method(required_1, required_2, options={})
    defaults = {
        
    }

end