const User = require("../models/user");

exports.createUserService = async (data) => {
    const result = await User.create(data)
    return result;
}

exports.getUserService = async () => {
    const result = await User.find({})
    return result;
}