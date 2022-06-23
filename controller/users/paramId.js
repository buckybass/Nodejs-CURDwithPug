const users = require("../../models/users")

module.exports=async(req, res, next, id) => {
  try{
    res.locals.user = await users.findById(id).populate('records')
    if (!res.locals.user) {
      const err = new Error('User Not Found')
      err.status = 404
      return next(err)
    }
    return next()
  }catch(error){
    return next(error)

  }
}
