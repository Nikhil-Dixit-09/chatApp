const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
module.exports.signin = async function (req, res) {
    // console.log(req.body);
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (!existingUser) {
            return res.status(200).json({ message: "User does not exist" });
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(200).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'chat', { expiresIn: "8d" });
        return res.status(200).json({ result: existingUser, token });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
}
module.exports.signup = async function (req, res) {
    console.log(req.body);
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        console.log(existingUser);
        if (existingUser) return res.status(200).json({ message: "User already exists" });
     
        if (req.body.password != req.body.confirmPassword) {
            return res.status(200).json({ message: "Passwords don't match" });
        }
        
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const result = await User.create({ email: req.body.email, password: hashedPassword, name: req.body.name});


        const token = jwt.sign({ email: result.email, id: result._id, isStudent: result.isStudent }, 'chat', { expiresIn: "8d" });
        // console.log(result);
        return res.status(200).json({ result, token });
    } catch (err) {
        console.log(err);
    }
}