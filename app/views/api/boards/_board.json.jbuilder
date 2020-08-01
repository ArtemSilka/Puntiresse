json.extract! board, :id, :name, :description, :secret, :user_id
json.pins board.pins.each do |pin|
  json.partial! 'api/pins/pin', pin: pin
end