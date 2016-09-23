FactoryGirl.define do
  factory :tip do
    content { Faker::Lorem.paragraphs }
    plant_id 1
    user_id 1
  end
end
