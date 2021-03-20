const mongoose = require("mongoose");
const config = require("config");
const Logger = require("../services/LoggerService");
const logger = new Logger();

mongoose
  .connect(config.get("databaseConn"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => logger.info("Connected to MongoDB..."))
  .catch((err) => logger.error("Could not connect to MongoDB..."));
