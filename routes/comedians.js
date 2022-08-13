
const express = require('express');
const router = express.Router();
const {getAll, getByName, getByID, getCardDataAll} = require('../controllers/comedianController')

router.get('/all', getAll)
router.get('/getByName', getByName)
router.get('/getCardDataAll', getCardDataAll)
router.get('/getByID', getByID)

module.exports = router;