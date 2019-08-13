const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const app = express();

// mongoose.connect(keys.mongoURI);

// // mongoose
// //   .connect(keys.mongoURI, { useNewUrlParser: true })
// //   .then(() => console.log("MongoDB Connected"))
// //   .catch(err => console.log(err));

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
