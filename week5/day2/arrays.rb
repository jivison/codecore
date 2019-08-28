array = ["Hello", "Bonjour", "안영하세요", "Привет", "Hallo", "Ola"]

# Effectively the same
array.count
array.length
array.size

# Flattens the array
array.flatten


# Appends to an array
array << "xin chào"
array.push("Halló")
# also
array.append("Szia")

# Prepends to an array
array.unshift("你好")
array.prepend("สวัสดี")

# Removes the last item
# array.pop

# Removes the last two
# array.pop 2 

array = array.join(", ")
array = array.split(", ")
# puts array

    
# puts "a,b,c,,d,e,f".split(/,+/)


# instead of 
for val in array
    val
end

array.each do | val |
    puts val * 5
end