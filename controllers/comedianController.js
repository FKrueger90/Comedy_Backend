const comedian = require('../models/comedianModel')

// @desc get complete info of all comedians
// @route api/comedian/all
// @access public
const getAll = async (req, res) => {
    const allComedians = await comedian.find( )
    res.status(200).json(allComedians)
}

// @desc get info of one comedian. find by name
// @route api/comedian/getByName
// @access public
const getByName = async (req, res) => {
    const name = req.body.name
    if (name) {
        const comedian_found = await comedian.findOne({'name': name})
        res.status(200).json(comedian_found)
    }else{
        res.status(400).json({message: 'name in body required'})
    }
}

// @desc get info of one comedian. find by _id
// @route api/comedian/getByID
// @access public
const getByID = async (req, res) => {
    const comedian_id = req.body.id
    if (comedian_id) {
        const comedian_found = await comedian.findOne({'_id': comedian_id})
        res.status(200).json(comedian_found)
    }else{
        res.status(400).json({message: 'id in body required'})
    }
}

// @desc get info of one comedian. find by _id
// @route api/comedian/getCardDataAll
// @access public
const getCardDataAll = async (req, res) => {
    const allCardData = await comedian.find({},
        {name: 1, website: 1, facebook:1, instagram:1, twitter:1, youtube:1} )
    res.status(200).json(allCardData)
}


module.exports = {getAll, getByName, getByID, getCardDataAll}