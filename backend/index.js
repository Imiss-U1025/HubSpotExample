// Import routes
const connectDB = require("./config/db");

// Connect to MongoDB

const express = require("express");
const cors = require("cors");
const usersRoute = require("./src/routes/api/users");
const authRoute = require("./src/routes/api/auth");

const PORT = process.env.PORT || 3001;

const app = express();
connectDB();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
