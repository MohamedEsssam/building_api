const express = require("express");
const Logger = require("./services/LoggerService");
const logger = new Logger();
const app = express();

app.use(
  express.static("public", {
    index: false,
    extensions: ["png", "jpg", "jpeg", "pdf"],
  })
);

require("./startup/swagger")(app);
require("./startup/config")();
require("./startup/cors")(app);
require("./startup/connectDB");
require("./startup/routes")(app);
require("./seeder/seeder");

app.listen(9000 /*,'62.117.39.137'*/, () => {
  logger.info("app listening on port 9000!");
});
