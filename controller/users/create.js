const users = require("../../models/users")
const uploadAvatar = require("../../utils/uploadAvatar")
module.exports=async (req, res) => {
  await uploadAvatar(req,users.length)
  await users.create({
    name:req.body.name,
    age:req.body.age
  })
  res.redirect('/users')
}
