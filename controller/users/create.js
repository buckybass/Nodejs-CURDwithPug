const users = require("../../models/users")
const uploadAvatar = require("../../utils/uploadAvatar")
module.exports=async (req, res) => {
  await uploadAvatar(req,users.length)
  users.push(req.body)
  res.redirect('/users')
}
