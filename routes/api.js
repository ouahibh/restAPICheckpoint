const express = require('express')
const {ListUser, AddUser, DeleteUser, EditUser} = require("../controllers/users-controller");
const router = express.Router();

router.get('/users', ListUser)
router.post('/adduser', AddUser)
router.post('/deleteuser', DeleteUser)
router.put('/edituser', EditUser)


module.exports = router;