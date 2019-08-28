def askQuestion(question, choices, answer)
    puts question + "\n"
    puts
    choices.each_with_index { |choice, index| puts "#{index} | #{choice}" }
    puts
    print "index> " 

    return choices[gets.to_i] == answer
end


questions = {
    0 => {
        "q" => "What is the captial of Canada?",
        "c" => ["Ottawa", "Toronto", "Hamilton"],
        "a" => "Ottawa"
    },
    
    1 => {
        "q" => "What is the tallest mountain in Canada?",
        "c" => ["Mount Saint Elias", "Mount Steele", "Mount Logan"],
        "a" => "Mount Logan"
    },

    2 => {
        "q" => "Which of the following is NOT an SI unit?",
        "c" => ["Candela", "Meter", "Volt"],
        "a" => "Volt"
    }
}

def quiz(questions)
    score = 0
    questions.each { | id, questionHash | 
        score += (askQuestion(questionHash["q"], questionHash["c"], questionHash["a"]) ? 1 : 0) 
    }
    puts "\nYou scored #{score / questions.length * 100}%, you got #{score} out of #{questions.length} correct."
end

quiz(questions)

