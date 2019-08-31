me = {
    "name" => "John",
    "place" => "Vancouver",
    "age" => 18
}

movies_with_director = {
    "Avatar" => "James Cameron",
    "Spaceballs" => "Mel Brooks",
    "Pulp Fiction" => "Quentin Tarantino"
}

movies_with_director["Jurassic Park"] = "Steven Spielberg"

# movies_with_director.each { |key, val| p key }

{
    "British Columbia" => "Victoria",
    "Nova Scotia" => "Halifax",
    "Nunavut" => "Iqaluit"
}.each {|province, capital| puts "The capital of #{province} is #{capital}"}