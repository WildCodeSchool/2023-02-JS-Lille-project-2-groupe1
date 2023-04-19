const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);

const musicControllers = require("./controllers/musicsControllers");

router.get("/musics", musicControllers.browse);
router.get("/musics/:id", musicControllers.read);

module.exports = router;
