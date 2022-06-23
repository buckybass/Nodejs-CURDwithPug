const users = require('../../models/users')

module.exports =  async (req, res) => {
  const userData = await users.find().populate('recordCount')
  res.render('users',{users:userData})
}
