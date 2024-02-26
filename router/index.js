const express = require('express')
const router = express.Router()
router.use('/api', require('./callRecording'))
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

module.exports = router