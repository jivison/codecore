def reverse_string(string)
  return string.split("").inject([]) { |acc, val| acc.unshift(val) }.join("")
end

p reverse_string("Hello, my name is John!")
