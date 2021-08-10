mongo
use natours-test
db.tours.insertOne({name: "Forest Hiker", price: 297, rating: 4.7}) --insert obe
 db.tours.find()
db.tours.insertMany([{name: "The Sea Explore", price: 497, rating: 4.8}, {name: "The Snow Adventurer", price: 997, rating: 4.9, difficulty: "easy}])

db.tours.find({name: "Forest Hiker"})

db.tours.find({price: {$lte: 500} }) --lte is reserved for less than

 db.tours.find({ price: {$lt: 500}, rating: {$gte: 4.8} }) --$lt less than and query

 db.tours.find({ price: {$gt: 500}, rating: {$gte: 4.8}} ) --and operator

 db.tours.find({ $or: [{price:  {$lt: 500}}, {rating: {$gte: 4.8}} ] })  --or operator

 db.tours.find({ $or: [{price:  {$gt: 500}}, {rating: {$gte: 4.8}} ]}, {name: 1}) -- projection  someof the field to projection

 db.tours.updateOne({ name: "The Snow Adventurer"}, {$set: {price: 597} }) --update one if name matched many then it will only set for first name

 db.tours.updateMany({price: {$gt: 500}, rating: {$gte: 4.8} }, {$set: {premium: true}}) --update many

 db.tours.deleteOne({name: "The Snow Adventurer"})  -- delete one means first match will be delte
 db.tours.deleteMany({rating: {$lt: 4.8}})