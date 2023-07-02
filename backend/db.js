const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://fastnfood:ak2711474@cluster0.h3pp6bq.mongodb.net/fastnfoodmern?retryWrites=true&w=majority";
// const mongoURI = "mongodb://fastnfood:ak2711474@ac-h9hjkpb-shard-00-00.h3pp6bq.mongodb.net:27017,ac-h9hjkpb-shard-00-01.h3pp6bq.mongodb.net:27017,ac-h9hjkpb-shard-00-02.h3pp6bq.mongodb.net:27017/?ssl=true&replicaSet=atlas-zc7mxg-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async () => {

  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
  
    const db = mongoose.connection.db;
    const fetched_data = db.collection("food_items");
    const food_category = db.collection("food_category");
  
    const [items, catData] = await Promise.all([
      fetched_data.find().toArray(),
      food_category.find().toArray()
    ]);
  
    global.food_items = items;
    global.food_category = catData;
  
    // res.send(global.food_items);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ error: 'An error occurred' });
      }
}

module.exports = mongoDB;

