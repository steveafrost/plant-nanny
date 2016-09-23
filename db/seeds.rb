counter = 1

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

  Tip.create(content: Faker::Lorem.paragraphs, plant_id: counter, user_id: counter)
  counter += 1
end

20.times do
  Tip.create(content: Faker::Lorem.paragraphs, plant_id: rand(20), user_id: rand(20))
end
