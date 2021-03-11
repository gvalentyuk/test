const {Router} = require('express');
const {getUserById, getUsers, updateUser} = require('../controllers/users-controllers');

const router = Router();

router.route('/').get(getUsers);
router.route('/:id').get(getUserById).put(updateUser);

module.exports = router;
