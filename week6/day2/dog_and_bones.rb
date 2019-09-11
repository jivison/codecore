class Bone

  attr_reader :size

  def initialize(size)
    @size = size
  end
end

class Dog
  def initialize(colour, type)
    @colour = colour
    @type = type
    @bones = []
  end

  def give(bone_instance)
    if @bones.length < 3
      @bones.push(bone_instance) if bone_instance.is_a? Bone
    else
      puts "Dog already has 3 bones!"
    end
  end

  def eat_bone
    puts "Yummy, I ate a #{@bones.pop.size} bone"
  end

end


cool_dog = Dog.new("red", "probably not a dog")
bone = Bone.new("really big")
cool_dog.give(bone)
cool_dog.give(bone)
cool_dog.give(bone)
cool_dog.eat_bone
cool_dog.give(bone)
cool_dog.give(bone)