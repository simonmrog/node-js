const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || "mongodb://localhost:27017/shop",
  JWT_SECRET: process.env.JWT_SECRET || "mYtOkENSECrto"
};