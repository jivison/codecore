require "minitest/autorun"
require_relative "student"

class StudentTest < MiniTest::Test

    def test_initialize
        
        assert_raises(ArgumentError) {
            Student.new(first_name: "John", last_name: "Ivison")
            Student.new(first_name: "John", score: 78)
            Student.new(score: 8, last_name: "Ivison")
        }

    end

    def test_full_name
        student = Student.new(
            "John",
            "Ivison",
            78
        )

        full_name = student.full_name
        
        assert_equal("John Ivison", full_name)

    end

    def test_grade

        bad_student = Student.new("bad", "student", 30)

        outstanding_student = Student.new("outstanding", "student", 95)

        assert_equal("F", bad_student.grade)
        assert_equal("A", outstanding_student.grade)

    end

end