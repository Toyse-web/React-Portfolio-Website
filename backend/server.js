require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const contactRoute = require("./routes/contact");

const app = express();

app.use(helmet());
const allowedOrigins = [
  "http://localhost:3000",
  "https://react-portfolio-website-1zrc.onrender.com"
]
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

// This will stops someone from submitting contact form 1000 times per minute
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // for 15 minutes
  max: 100, // maximum 100 requests per IP
  message: {
    error: "Too many requests, please try again later.",
  },
});

app.use("/api/contact", contactLimiter);
app.use("/api/contact", contactRoute);

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
