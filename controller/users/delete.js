const users = require("../../models/users")

module.exports= (req, res) => {
  users.splice(req.params.id - 1,1)
  res.redirect('/users')
}
