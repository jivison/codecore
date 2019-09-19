class Student
    def initialize(first_name, last_name, score)
        @first_name = first_name
        @last_name = last_name
        @score = score
    end

    def full_name
        "#{@first_name} #{@last_name}"
    end

    def grade
        case

        when @score > 85
            "A"
        when @score > 72
            "B"
        when @score > 67
            "C+"
        when @score > 60
            "C"
        when @score > 50
            "C-"
        else
            "F"
        end


    end

end