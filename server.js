const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// routes
app.use("/api/portfolio", portfolioRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));