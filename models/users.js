const client = require("../mongoDB/client")
const db = client.db('manager')
const col = db.collection('users')

module.exports = {
  getById(id) {
    return col.findOne({_id:new Object(id)})
  },
  getAll() {
    return col.find().toArray()
  },
  create(user) {
    return col.insertOne(user)
  }
}

