def long_only(array)
    return array.reject { |question| question.length < 15 }
end

def also_long_only(array)
    return array.select { |question| question.length > 14 }
end

p also_long_only(["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"])