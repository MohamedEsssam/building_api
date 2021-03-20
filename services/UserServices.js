const bcrypt = require("bcrypt");
const Logger = require("./LoggerService");
const logger = new Logger();

class UserServices {
  constructor(UserModel, UserSchema) {
    this.UserModel = UserModel;
    this.UserSchema = UserSchema;
  }

  /**
   *
   * @param {*} username
   * @param {*} password
   */
  async login(username, password) {
    let user = await this.UserModel.findOne({ username });
    if (!user) return;

    if (!this.isValidPassword(password, user["password"])) return;

    const token = user.generateAuthToken();

    logger.info(`${username} is successfully logged in.`);

    return token;
  }

  /**
   *
   * @param {*} username
   * @param {*} password
   */
  async register(username, password) {
    const { error } = this.UserSchema({ username, password });
    if (error) throw new Error("Enter valid data");

    let user = await this.UserModel.findOne({ username });
    if (user) return;

    user = await new this.UserModel({ username, password });
    user["password"] = await this.encryptPassword(user["password"]);

    await user.save();

    const token = user.generateAuthToken();

    logger.info(`${username} is successfully registered.`);

    return token;
  }

  /**
   *
   * @param {*} password
   */
  async encryptPassword(password) {
    const genSalt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password, genSalt);
  }

  /**
   *
   * @param {*} password
   * @param {*} userPassword
   */
  async isValidPassword(password, userPassword) {
    return await bcrypt.compare(password, userPassword);
  }
}

module.exports = UserServices;
