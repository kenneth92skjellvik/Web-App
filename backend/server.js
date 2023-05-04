const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
const dbURI =
  "mongodb+srv://kennethskjellvik:Random123%3C@cluster0.zyk0ysm.mongodb.net/test";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Use the userRoutes middleware
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
