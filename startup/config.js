const config = require("config");

module.exports = function () {
  if (!config.get("authSecret"))
    throw new Error("FATAL ERROR: auth secret is not defined.");
  if (!config.get("databaseConn"))
    throw new Error("FATAL ERROR: database connection is not defined.");
};
