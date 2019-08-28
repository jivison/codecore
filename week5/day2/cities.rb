cities = {
    "BC" => ["Vancouver", "Richmond"],
    "AB" => ["Edmonton", "Calgary"],
    "NU" => ["Iqualuit", "Cambridge Bay"]
}

cities.each {|province, cities| puts "#{province}: #{cities.join(', ')}" }

