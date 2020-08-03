# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Board.destroy_all
Pin.destroy_all

#

demo = User.create!({ email: 'demouser@puntiresse.com', password: 'password'})
user1 = User.create!({ email: 'user1@puntiresse.com', password: 'password'})

# 

board1 = Board.create!({ name: 'dogs', description: '', user_id: demo.id })
board2 = Board.create!({ name: 'dogs', description: '', user_id: user1.id })

# 

pin1 = Pin.new({ title: 'dog1', description: 'doggy', user_id: demo.id, board_id: board1.id })
# file = open('https://active-storage-puntiresse-dev.s3.us-east-1.amazonaws.com/8yjd8BxKMywSREfkCMZmEazj')
file = open('https://www.dogbreedinfo.com/images16/NewfoundlandsSatchelJack.JPG')
pin1.photo.attach(io: file, filename: 'dogTest1.jpg')
pin1.save!

pin2 = Pin.new({ title: 'dog2', description: 'doggy', user_id: demo.id, board_id: board1.id })
file = open('https://www.dogbreedinfo.com/images16/NewfoundlandHarvey2halfMonths2.JPG')
pin2.photo.attach(io: file, filename: 'dogTest2.jpg')
pin2.save!

pin3 = Pin.new({ title: 'dog3', description: 'doggy', user_id: user1.id, board_id: board2.id })
file = open('https://www.dogbreedinfo.com/images21/NewfoundlandKarazanSatchel.jpg')
pin3.photo.attach(io: file, filename: 'dogTest3.jpg')
pin3.save!

pin4 = Pin.new({ title: 'dog4', description: 'doggy', user_id: user1.id, board_id: board2.id })
file = open('https://www.dogbreedinfo.com/images28/NewfoundlandPuppyPurebredDogLucy4MonthsOld2.jpg')
pin4.photo.attach(io: file, filename: 'dogTest4.jpg')
pin4.save!

pin5 = Pin.new({ title: 'dog5', description: 'doggy', user_id: user1.id, board_id: board2.id })
file = open('https://www.dogbreedinfo.com/images10/NewFoundlandWallacepup.jpg')
pin5.photo.attach(io: file, filename: 'dogTest5.jpg')
pin5.save!