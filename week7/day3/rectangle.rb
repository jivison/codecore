class Rectangle
    def initialize(width, height)
        raise "An argument is not positive" if width < 0 || height < 0
        
        @width = width
        @height = height
    end
    
    def area
        @width * @height
    end

    def perimeter
        2 * (@width + @height)
    end 

    def is_square?
        @width == @height
    end

end