const express = require('express');
const {GenerateImage} = require('../controller/Image.js');
const router = express.Router();

router.post('/', GenerateImage);
module.exports = router;






