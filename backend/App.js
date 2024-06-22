const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const emailRoutes = require('./routes/emailRoutes');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(config.database.uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(authRoutes);
app.use(emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
