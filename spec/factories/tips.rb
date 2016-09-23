FactoryGirl.define do
  factory :tip do |f|
    f.content { Faker::Lorem.paragraphs }
    f.plant_id 1
    f.user_id 1
  end
end
