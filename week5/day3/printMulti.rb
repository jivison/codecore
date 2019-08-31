# array = [[1, 7, 3], [4, 4, 6], [7, 2, 9]]

# array.each { | element | element.each { | sub_element | puts sub_element * sub_element } }
# or
# array.flatten.each{ | element | puts element * element }

string = "Hello, Awesome CodeCore Students"

string_array = []
string.split(" ").each.with_index { |word, index| string_array << ((index.odd?) ? word.upcase : word.downcase)}
p string_array.join(" ")