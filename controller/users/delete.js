const users = require("../../models/users")
const fs = require('fs')

module.exports= async(req, res) => {
  await users.findByIdAndDelete(req.params.id)
  // await fs.promises.unlink(req.file.path)
  res.redirect('/users')
}
