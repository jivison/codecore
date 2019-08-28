letters = ('a'..'zz')

letters.each_with_index { | letter, index | puts (letter[-1] + " ") * index }