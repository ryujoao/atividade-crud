const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get("/user", (req, res) => userController.findAll(req, res));
router.post("/user", (req, res) => userController.create(req, res));
router.delete("/user/:id", (req, res) => userController.delete(req, res));
router.put("/user/:id", (req, res) => userController.update(req, res));

module.exports = router;