const express = require("express");
const router = express.Router();
const upload = require("../multer/upload"); 
const { uploadFile } = require("../controllers/uploadController");

router.post("/upload", upload.single("file"), uploadFile);

module.exports = router;
