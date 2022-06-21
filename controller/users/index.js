const users = require('../../models/users')

module.exports =  async (req, res) => {
  const userData = await users.getAll()
  res.render('users',{users:userData})
}
