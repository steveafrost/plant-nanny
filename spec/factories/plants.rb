FactoryGirl.define do
  factory :plant do
    name { Faker::Name.last_name }
    difficulty { Faker::Number.between(1, 5) }
    amount_of_light { Faker::Number.between(1, 5) }
    amount_of_water { Faker::Number.between(1, 5) }
    frequency_of_water { Faker::Number.between(1, 5) }
    fun_fact { Faker::Lorem.sentence }
  end
end
