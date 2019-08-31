def what_type(val)
    ([String, Array, Integer].include? val.class) ? val.class.to_s : "Something else"
end

