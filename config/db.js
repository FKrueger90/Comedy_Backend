/** @member {Object} */
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://admin:cern1954@127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'ComedyRadar',
        })
        console.log(`Mongo DB connected: ${connection.connection.host}`.cyan.underline)
        //const db = mongoose.connection
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
