FactoryBot.define do
  factory :user do
    fn = Faker::Name.first_name
    ln = Faker::Name.last_name
    first_name { fn }
    last_name { ln}
    sequence :email do |n|
      "#{fn.downcase}.#{fn.upcase}-#{n}@exmaple.com"
    end
    password { "hunter42" }
    is_admin { false }
  end
end
