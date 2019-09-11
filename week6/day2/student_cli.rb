class StudentDB

    attr_accessor(:students)

    def initialize
        @students = []
    end

    def add_student(student_instance)
        @students.push(student_instance)
    end

    def display
        @students.each_with_index { |student, id| puts "#{id}| #{student.name}" }
    end

end


class Student

    attr_accessor(:name, :courses, :email)

    def initialize(name, courses, email)
        @name = name
        @courses = courses
        @email = email
    end

    def info
        "#{@name}, [#{@courses.map {|element| element.strip}.join(', ')}], #{@email}"
    end
end


database = StudentDB.new

loop do
    print "> "
    user_input = gets.chomp

    case user_input
    
    when "l"
        database.display

    when "n"
        print "Name: "
        name = gets.chomp
        print "Email: "
        email = gets.chomp
        print "Courses: "
        courses = gets.chomp.split(/ *,/)

        database.add_student(Student.new(name, courses, email))

    when "s"
        print "id: "
        puts "#{database.students[gets.chomp.to_i].info}"

    
    when "d"
        print "id: "
        "Deleted item: #{database.students.pop(gets.chomp.to_i)}"
    end
end