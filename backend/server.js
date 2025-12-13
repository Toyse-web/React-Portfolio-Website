require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoute = require("./routes/contact");

const app = express();
app.use(cors()); //I will configure this later more strictly cos of production
app.use(express.json());

app.use("api/contact", contactRoute);

const PORT = process.env.PORT || 5000;

const  connectDB = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}

connectDB();
