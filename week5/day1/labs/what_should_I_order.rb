def order(coffee_shop)

    case coffee_shop

    when "Starbucks"
        return "Grande Latte"

    when "Tim Hortons"
        return "Double Double"
    
    when "Blenz"
        return "Medium Coffee"

    else
        return "I don't know this shop..."

    end
end

puts order("Tim Hortons")