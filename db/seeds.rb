20.times do
  Plant.create(
    name: Faker::Name.last_name,
    difficulty: Faker::Number.between(1, 5),
    amount_of_light: Faker::Number.between(1, 5),
    amount_of_water: Faker::Number.between(1, 5),
    frequency_of_water: Faker::Number.between(1, 5),
    fun_fact: Faker::Lorem.sentence
  )

  User.create(
    name: Faker::Name.first_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  Tip.create(content: Faker::Lorem.paragraphs)
end

# counter = 1
# Tip.all.each do |tip|
#   tip.user_id = counter
#   tip.plant_id = counter
#   tip.save
#   counter += 1
# end
