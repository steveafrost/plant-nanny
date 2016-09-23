FactoryGirl.define do
  factory :plant do |f|
    f.name { Faker::Name.last_name }
    f.difficulty { Faker::Number.between(1, 5) }
    f.amount_of_light { Faker::Number.between(1, 5) }
    f.amount_of_water { Faker::Number.between(1, 5) }
    f.frequency_of_water { Faker::Number.between(1, 5) }
    f.fun_fact { Faker::Lorem.sentence }
  end
end
