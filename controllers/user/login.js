const { User, validateUserSchema } = require("../../models/user");
const UserServices = require("../../services/UserServices");
const UserServicesInstance = new UserServices(User, validateUserSchema);
const {
    UserNotFoundException,
  } = require("../../exceptions/UserNotFoundException");
  
  module.exports = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const token = await UserServicesInstance.login(username, password);
    if (!token) return res.status(404).send(UserNotFoundException);
  
    return res
      .status(200)
      .header("Authorization", token)
      .header("access-control-expose-headers", "Authorization")
      .send("User logged in.");
  };
  