const {asyncHandler} = require('../utils/asynvHandler');
const User = require('../models').User;

exports.getUsers = asyncHandler(async (req, res, next) => {
    let users = await User.findAll();
    if (req.query.name) {
        users = users.filter(user => user.name === req.query.name)
        return res.status(200).json({users})
    }
    users = users.filter(user => user.isInvited);
    return res.status(200).json({users});
})

exports.getUserById = asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json({user});
})

exports.updateUser = asyncHandler(async (req, res, next) => {
    let user = await User.findByPk(req.params.id);
    await user.update({
        isInvited: !user.isInvited
    })
    const users = await User.findAll({
        where: {
            isInvited: true
        }
    })
    return res.status(200).json({users})
})
