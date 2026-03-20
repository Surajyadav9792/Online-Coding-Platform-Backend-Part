const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../model/user");
const Redishclient = require("../config/redis");

const userMiddleware = async (req, res, next) => {
  try {

    const { token } = req.cookies;   // ✅ correct

    if (!token) {
      throw new Error("Token is not present");
    }

    const payload = jwt.verify(token, process.env.JWT_KEY);

    const { _id } = payload;

    if (!_id) {
      throw new Error("Invalid Token");
    }

    const result = await User.findById(_id);

    if (!result) {
      throw new Error("User Doesn't Exist");
    }

    const isBlocked = await Redishclient.exists(`token:${token}`);

    if (isBlocked) {
      throw new Error("Invalid Token");
    }

    req.result = result;

    next();

  } catch (err) {
    res.status(401).send("Error: " + err.message);
  }
};

module.exports = userMiddleware;