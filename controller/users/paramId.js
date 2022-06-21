const users = require("../../models/users")

module.exports=async(req, res, next, id) => {
  try{
    res.locals.user = await users.getById(id) //global scope
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
