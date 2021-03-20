const { User, validateUserSchema } = require("..//models/user");
const UserServices = require("../services/UserServices");
const UserServicesInstance = new UserServices(User, validateUserSchema)

UserServicesInstance.register("mohamed", "1111")
