/** @member {Object} */
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_HOST}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'ComedyRadar',
        })
        console.log(`Mongo DB connected: ${connection.connection.host}`.cyan.underline)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
