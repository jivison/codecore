class Animal
  attr_accessor(:name, :color)

  def initialize(name = "Unknown Animal", color = "brown")
    @name = name
    @color = color
  end

  def eat
    puts "I'm eating"
  end

  def walk
    puts "I'm walking"
  end
end

class Dog < Animal
  def initialize(name, color)
    super(name, color)
  end

  def woof
    "woof"
  end

  def eat
    super
    puts "Bones are yummy!"
  end
end

class Cat < Animal
    def initialize(name, color)
        super(name, color)
    end

    def eat
        puts "Fish are yummy!"
        super
    end
end

cat = Dog.new("uhhhhh   ", "black")
cat.eat