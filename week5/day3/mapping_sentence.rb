array = [
  ["john", "steve", "jen"],
  ["ate", "sat on", "bought"],
  ["an apple", "the couch", "a toothbrush"],
]

p array.map { |words| words.sample() }.join(" ")

