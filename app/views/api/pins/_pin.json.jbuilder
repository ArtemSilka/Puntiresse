json.extract! pin, :id, :title, :description, :url, :photo, :board_id
json.photoUrl url_for(pin.photo)