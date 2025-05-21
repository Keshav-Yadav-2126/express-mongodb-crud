const express = require("express");
const connectDB = require("./config/db.js")
const {bgGreen, bgRed} = require("colorette")
require('dotenv').config();

const { allRoutes } = require("./routes/all-productRoute.js");
const { deleteRoutes } = require("./routes/delete-productRoute.js");
const { updateRoutes } = require("./routes/update-productRoute.js");
const { addRoute } = require("./routes/post-productRoute.js");
const { Product } = require("./models/productModel.js");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const allProducts = await Product.find({})
  const html = `
    <ul>
        ${allProducts.map(product => `<li>${product.productName} - ${product.productPrice}</li>`).join("")}
    </ul>  
  `;
  res.send(html);
});

app.use("/", allRoutes);
app.use("/", addRoute);
app.use("/", deleteRoutes);
app.use("/", updateRoutes);

app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id)
  if (product) {
    res.send(product);
  }
  else{
    res.send("Invalid Id")
  }
});

const promiseDB = connectDB()
promiseDB.then(() => {
  console.log(bgGreen("DB is connected"))
  app.listen(process.env.PORT, () => {
    console.log(bgGreen("server is running"));
  });
}).catch((err)=>{
  console.log("Error: ",bgRed(err))
})
