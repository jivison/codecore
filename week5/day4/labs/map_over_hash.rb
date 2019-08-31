def map_over_hash(hash)
    hash.keys.inject([]) { |map, key| map << yield(key, hash[key]) }
end

p map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) { |key, value| "Her #{key.to_s} is #{value}" }