require "minitest/autorun"
require_relative "vector"

require "minitest/autorun"
class VectorTest < MiniTest::Test

    def test_length
        # - Given some situation (eg. a user)
        # A vector of (3,4)
        vector = Vector.new(3, 4)

        # - When something happens
        # - The `.length` method is called
        length = vector.length

        # - Then what should happen
        # - The length should equal 5
        assert_equal(5, length)

    end

    def test_to_s
        vector = Vector.new(0, 0)
        vector_string = vector.to_s
        assert_equal("Vector (0, 0)", vector_string)
    end

end