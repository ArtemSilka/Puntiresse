json.extract! pin, :id, :title, :description, :url, :photo
json.photoUrl url_for(pin.photo)