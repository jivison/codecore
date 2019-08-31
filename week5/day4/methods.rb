# A return keyword is not necessary, ruby will return the last evaluated expression implicitly
def hello
    "Hello"
end

# A method that can take a variable of parameters
def variadic_method(first, *args, last)
    p first
    args.each { |arg| puts arg }
    p last
end

variadic_method("Hello", 1, 2, 3, "test", true, nil, ["Im an", "Array"], {"and Im " => "a hash"}, "Goodbye!")