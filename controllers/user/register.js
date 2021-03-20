const { User, validateUserSchema } = require("../../models/user");
const UserServices = require("../../services/UserServices");
const UserServicesInstance = new UserServices(User, validateUserSchema);
const {
    UserAlreadyExistException,
  } = require("../../exceptions/UserAlreadyExistException");
  
  module.exports = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const token = await UserServicesInstance.register(username, password);
    
    if (!token) return res.status(409).send(UserAlreadyExistException);
  
    return res
      .status(200)
      .header("Authorization", token)
      .header("access-control-expose-headers", "Authorization")
      .send("User created.");
  };
  