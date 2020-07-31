@pins.each  do |pin|
  json.set! pin.id do 
    json.extract! pin, :id, :title, :description, :url
  end
end

#json.array! @pins do |pin|
 #   json.extract! pin, :id, :title, :description, :url
  #  json.photoUrl url_for(pin.photo)
  #end
end