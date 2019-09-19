FactoryBot.define do
  factory :news_article do
    title { Faker::Quote.most_interesting_man_in_the_world }
    description { Faker::Hacker.say_something_smart }
    view_count { rand(1..70_000) }
    published_at { nil }

    user
  end
end
