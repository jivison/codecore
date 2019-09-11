
require_relative 'HelperMethods'

class Animal

    attr_reader :name

    def initialize(name)
        @name = name
    end

    def kill
        puts "The #{@name} died..."
    end
end

class Cat < Animal

    include HelperFunctions

    def initialize(name)
        super name
    end

    def catch_bird(bird)
        if random_number(1, 2) == 1
            puts "Caught bird..."
            bird.kill
        else
            puts "The #{bird.name} got away..."
        end
    end
end

class Bird < Animal
    def initialize(name)
        super name
    end
end

cat = Cat.new("evil cat")

bird = Bird.new("unknown bird")

100.times { cat.catch_bird(bird) }

