const users = require('../../models/users')
const uploadAvatar = require("../../utils/uploadAvatar")

module.exports= async(req, res) => {
  const avatar = await uploadAvatar(req,req.params.id)
  const { user } = res.locals
  user.name = req.body.name
  user.age = req.body.age
  user.avatar = !avatar ? user.avatar : avatar
  console.log(user.avatar)
  await user.save(user)
  res.redirect('/users')
}
