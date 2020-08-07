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
user1 = User.create!({ email: 'tim@puntiresse.com', password: 'password'})
user2 = User.create!({ email: 'kev@puntiresse.com', password: 'password'})

# 

board1 = Board.create!({ name: 'Norilsk', description: '', user_id: demo.id })
board2 = Board.create!({ name: 'Dogs', description: '', user_id: demo.id })
board3 = Board.create!({ name: 'Italy', description: '', user_id: user1.id })
board4 = Board.create!({ name: 'Recipes', description: '', user_id: user2.id })
board5 = Board.create!({ name: 'Animals', description: '', user_id: user2.id })

# 

pin1 = Pin.new({ title: 'nor1', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://dela.ru/medianew/img/1-4623589.jpg')
pin1.photo.attach(io: file, filename: 'seed1.jpg')
pin1.save!

pin2 = Pin.new({ title: 'nor2', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://visitsiberia.info/assets/images/resources/1124/add52646c160b23ed93db9dfd6febe68.jpg')
pin2.photo.attach(io: file, filename: 'seed2.jpg')
pin2.save!

pin3 = Pin.new({ title: 'nor3', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://visitsiberia.info/assets/images/resources/1124/original-(1).jpg')
pin3.photo.attach(io: file, filename: 'seed3.jpg')
pin3.save!

pin4 = Pin.new({ title: 'nor4', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://visitsiberia.info/assets/images/resources/1124/original.jpg')
pin4.photo.attach(io: file, filename: 'seed4.jpg')
pin4.save!

pin5 = Pin.new({ title: 'nor5', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://visitsiberia.info/assets/images/resources/1124/wgl6e6ew7x8.jpg')
pin5.photo.attach(io: file, filename: 'seed5.jpg')
pin5.save!

pin6 = Pin.new({ title: 'nor6', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://i.ytimg.com/vi/74Z5Kzg-ZFo/maxresdefault.jpg')
pin6.photo.attach(io: file, filename: 'seed6.jpg')
pin6.save!

pin7 = Pin.new({ title: 'nor7', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://lh4.googleusercontent.com/proxy/r3Zss-_RnunmvP4F17czYr_CB2EgSOMbxT3vtXd2e1JI4ZthFoYYi7lLBA3m7HPx2XdYf82xg954XqISLNy7bX6xTYklCBpCMHnfszHHt_SdmXs6GyVJxOq9rzBhex9cUQr6_7dN7wc')
pin7.photo.attach(io: file, filename: 'seed7.jpg')
pin7.save!

pin8 = Pin.new({ title: 'nor8', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://i.pinimg.com/originals/67/95/81/679581913dfd74648f6084413818fa48.jpg')
pin8.photo.attach(io: file, filename: 'seed8.jpg')
pin8.save!

# pin9 = Pin.new({ title: 'nor9', description: '', user_id: demo.id, board_id: board1.id })
# file = open('https://rblogger.ru/img3/2015/promyishlennyiy-ad-norilska/02.jpg')
# pin9.photo.attach(io: file, filename: 'seed9.jpg')
# pin9.save!

pin10 = Pin.new({ title: 'nor10', description: '', user_id: demo.id, board_id: board1.id })
file = open('https://img4.tourbina.ru/photos.4/4/2/2/3/6/1063224/big.photo/Pervyy-dom-Norilska.jpg')
pin10.photo.attach(io: file, filename: 'seed10.jpg')
pin10.save!


#


pin11 = Pin.new({ title: 'dog1', description: '', user_id: demo.id, board_id: board2.id })
file = open('https://i.pinimg.com/originals/22/b5/e0/22b5e076795d349f5fed1a658965a2fb.png')
pin11.photo.attach(io: file, filename: 'seed11.jpg')
pin11.save!

pin12 = Pin.new({ title: 'dog2', description: '', user_id: demo.id, board_id: board2.id })
file = open('https://data.whicdn.com/images/341437863/original.jpg')
pin12.photo.attach(io: file, filename: 'seed12.jpg')
pin12.save!

pin14 = Pin.new({ title: 'dog3', description: '', user_id: demo.id, board_id: board2.id })
file = open('https://www.noordinaryhomestead.com/wp-content/uploads/2010/08/ayla-straightface.jpg')
pin14.photo.attach(io: file, filename: 'seed14.jpg')
pin14.save!

# 

pin15 = Pin.new({ title: 'animal1', description: '', user_id: user2.id, board_id: board5.id })
file = open('https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png')
pin15.photo.attach(io: file, filename: 'seed15.jpg')
pin15.save!

pin16 = Pin.new({ title: 'animal2', description: '', user_id: user2.id, board_id: board5.id })
file = open('https://images.ctfassets.net/9l3tjzgyn9gr/photo-165355/7664d8996c8149439558a2d7ba966d4f/165355-single-male-elephant-in-the-masai-mara.jpg?fm=jpg&fl=progressive&q=50&w=1200')
pin16.photo.attach(io: file, filename: 'seed16.jpg')
pin16.save!

pin17 = Pin.new({ title: 'animal3', description: '', user_id: user2.id, board_id: board5.id })
file = open('https://static01.nyt.com/images/2018/01/16/science/16SCI-WAR-01/16SCI-WAR-01-superJumbo.jpg')
pin17.photo.attach(io: file, filename: 'seed17.jpg')
pin17.save!

pin18 = Pin.new({ title: 'animal4', description: '', user_id: user2.id, board_id: board5.id })
file = open('https://europeansting.files.wordpress.com/2020/06/animals.jpeg')
pin18.photo.attach(io: file, filename: 'seed18.jpg')
pin18.save!

# 

pin19 = Pin.new({ title: 'italy1', description: '', user_id: user1.id, board_id: board3.id })
file = open('https://i2.wp.com/www.traveloffpath.com/wp-content/uploads/2020/06/Italy-Has-Reopened-To-Tourists-From-26-Countries-With-No-Restrictions.jpg?resize=759%2C500&ssl=1')
pin19.photo.attach(io: file, filename: 'seed19.jpg')
pin19.save!

pin20 = Pin.new({ title: 'italy2', description: '', user_id: user1.id, board_id: board3.id })
file = open('https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/destinations/italy/italy-amalfi-coast.jpg?$750x667$')
pin20.photo.attach(io: file, filename: 'seed20.jpg')
pin20.save!

pin21 = Pin.new({ title: 'italy3', description: '', user_id: user1.id, board_id: board3.id })
file = open('https://www.telegraph.co.uk/content/dam/Travel/2020/June/florence-rooftops-italy-getty-xlarge.jpg')
pin21.photo.attach(io: file, filename: 'seed21.jpg')
pin21.save!

pin22 = Pin.new({ title: 'italy4', description: '', user_id: user1.id, board_id: board3.id })
file = open('https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/italy-1200x815.jpg')
pin22.photo.attach(io: file, filename: 'seed22.jpg')
pin22.save!

# 

pin23 = Pin.new({ title: 'recipe1', description: '', user_id: user2.id, board_id: board4.id })
file = open('https://www.mydomaine.com/thmb/qx_UUSmLvi7wAQsYF97PI0h_ygk=/1050x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__188135__classic-french-recipes-188135-1519411951791-main.700x0c-939009c8729c4916ade5ca22a00d5c37.jpg')
pin23.photo.attach(io: file, filename: 'seed23.jpg')
pin23.save!

pin24 = Pin.new({ title: 'recipe2', description: '', user_id: user2.id, board_id: board4.id })
file = open('https://www.fermentingforfoodies.com/wp-content/uploads/2017/07/Rustic-French-sourdough-bread-with-5-different-flavour-combinations.jpg')
pin24.photo.attach(io: file, filename: 'seed24.jpg')
pin24.save!

pin25 = Pin.new({ title: 'recipe3', description: '', user_id: user2.id, board_id: board4.id })
file = open('https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=750&h=393&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd33%2Fmacaroonsopener101d-098-mld110756%2Fmacaroonsopener101d-098-mld110756_horiz.jpg%3Fitok%3D-6hODeVV')
pin25.photo.attach(io: file, filename: 'seed25.jpg')
pin25.save!

pin26 = Pin.new({ title: 'recipe4', description: '', user_id: user2.id, board_id: board4.id })
file = open('https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B275%2C275%5D&w=550&h=550&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F05%2FHD-201004-r-raspberry-clafoutis.jpg')
pin26.photo.attach(io: file, filename: 'seed26.jpg')
pin26.save!
