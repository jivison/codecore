require "minitest/autorun"
require_relative "circle"

class CircleTest < MiniTest::Test

    def test_diameter
        circle = Circle.new(4)
        assert_equal(8, circle.diameter)
    end

    def test_perimeter
        circle = Circle.new(3.5)
        assert_equal(7 * Math::PI, circle.circumference)
    end

    def test_area
        circle = Circle.new(2)
        assert_equal(Math::PI * 4, circle.area)
    end

end