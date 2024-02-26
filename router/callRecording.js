const express = require("express");
const router = express.Router();
const { callRecordingStart, callRecordingStop } = require('../controllers.js/callRecordingController')
const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.post('/callRecordingStart', callRecordingStart());
router.post('/callRecordingStop', callRecordingStop());



module.exports = router
