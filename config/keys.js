// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys!!!
  module.exports = require("./dev");
}

//mongodb+srv://ahallam2:5XFGmSxWC84gjm35@cluster0-zuy1o.mongodb.net/test?retryWrites=true&w=majority
