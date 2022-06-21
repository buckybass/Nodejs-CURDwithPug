const { MongoClient } = require('mongodb')

uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)

module.exports=client
