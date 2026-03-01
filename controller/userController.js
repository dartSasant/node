const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all feilds",
      });
    }

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email alrady exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      {
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    return res.status(201).json({
      success: true,
      message: "Register Successful",
      jwt,
      newUser,
    });
  } catch (error) {
    return status(500).json({
      success: false,
      message: `Internal Server Error: ${error}`,
    });
  }
};

const login = (req, res) => {};

module.exports = {
  register,
  login,
};
