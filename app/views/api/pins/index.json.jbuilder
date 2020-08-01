@pins.each  do |pin|
  json.set! pin.id do 
    json.extract! pin, :id, :title, :description, :url
  end
end