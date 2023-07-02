const express = require('express');
const app = express()
// const port = 5000
const port = process.env.PORT || 5000;
const mongoDB = require('./db');
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
// app.use('/api', require("./Routes/order"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 3rd step
if(process.env.NODE_ENV = "production"){
  app.use(express.static("build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})