const dotenv = require('dotenv')
dotenv.config()

const mongodb = require('mongodb')

mongodb.connect(process.env.CONNECTION, () => {

})