// Import routes
const connectDB = require("./config/db");

// Connect to MongoDB

const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoutes");
const emailRoute = require("./routes/emailRoutes");
const sendRoute = require("./routes/sendRoutes");

const PORT = process.env.PORT || 3001;

const app = express();
connectDB();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/email", emailRoute);
app.use("/api/send", sendRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
