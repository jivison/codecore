require "minitest/autorun"
require_relative "rectangle"

class RectangleTest < MiniTest::Test

    def test_area
        rectangle = Rectangle.new(3, 4)
        assert_equal(12, rectangle.area)
    end

    def test_perimeter
        rectangle = Rectangle.new(3, 5)
        assert_equal(16, rectangle.perimeter)
    end

    def test_is_square
        rectangle = Rectangle.new(6, 9)
        assert_equal(false, rectangle.is_square?)
    end

    def test_positive
        assert_raises(RuntimeError) {
            Rectangle.new(-1, 7)
        }
    end

end