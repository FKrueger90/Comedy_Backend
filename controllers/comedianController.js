const asyncHandler = require('express-async-handler')
//const mongoose = require('mongoose')
const comedian = require('../models/comedianModel')


// @desc get complete info of all comedians
// @route api/comedian/all
// @access public
const getAll = asyncHandler(async (req, res) => {
     const allComedians = await comedian.find( )
    res.status(200).json(allComedians)

    //res.status(200).json({message: 'all Comedians'})
}
)

// @desc get complete info of all comedians
// @route api/comedian/test
// @access public
const setTest = asyncHandler(async (req, res) => {
        const test = await comedian.create({
            name: req.body.text
        })
        res.status(200).json({message: 'all Comedians'})
    }
)
module.exports = {getAll, setTest}