const express = require('express');
const router = express.Router();
const {getAll, setTest} = require('../controllers/comedianController')

router.get('/all', getAll)
router.post('/test2', setTest)

module.exports = router;