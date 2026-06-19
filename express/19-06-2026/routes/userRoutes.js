const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/:id', userController.getUser);
router.get('/search', userController.searchUser);

module.exports = router;
