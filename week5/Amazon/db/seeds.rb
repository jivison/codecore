# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
Review.destroy_all
User.destroy_all

NUM_PRODUCTS = 16
NUM_USERS = 3
PASSWORD = "hunter42"

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD,
  is_admin: true
)

NUM_USERS.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}@#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

NUM_PRODUCTS.times do
    product = Product.create(
        title: Faker::Vehicle.year.to_s + " " + Faker::Vehicle.manufacture + " " + Faker::Vehicle.model,
        description: Faker::Vehicle.standard_specs.join(", "),
        price: rand(1_000_000),
        user_id: User.all.sample.id
    )
    if product.valid?
        rand(0..10).times do
            Review.create(body: Faker::GreekPhilosophers.quote, rating: rand(1..6), user_id: User.all.sample.id, is_hidden: false, product_id: product.id)
        end
      end
end

puts Cowsay.say("Generated #{Product.count} products", :stegosaurus)
puts Cowsay.say("Generated #{Review.count} reviews", :frogs)
puts Cowsay.say("Generated #{User.count} users", :tux)
