json.extract! @user, :id, :email
json.photo url_for(user.photo) if user.photo.attached?

json.pins @user.pins.each do |pin|
  json.set! pin.id do 
    json.extract! pin, :id, :title, :description, :user_id, :board_id
    json.photoUrl url_for(pin.photo)
  end
end

# change after boards

# json.boards @user.boards.each do |board|
#   json.set! board.id do 
#     json.extract! board, :id, :title, :description, :user_id
#     json.pins board.pins.each do |pin|
#         json.extract! pin, :id, :title, :description, :user_id, :board_id
#         json.photoUrl url_for(pin.photo)
#     end
#   end
# end