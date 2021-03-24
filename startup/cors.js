const cors = require("cors");

module.exports = function (app) {
  const options = {
    origin: "http://localhost:3000",
    exposedHeaders: ["Authorization"],
  };
  app.use(cors(options));
};
