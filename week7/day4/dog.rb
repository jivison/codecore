class Dog

    attr_reader :bones

    def initialize
        @bones = []
    end

    def give_bone(bone)
        return @bones.push(bone).count unless bone_count >= 3
        raise SystemStackError.new "I can't hold more than 3 bones!"
    end

    def eat_bone
        @bones.pop
    end

    def bone_count
        @bones.count
    end

end