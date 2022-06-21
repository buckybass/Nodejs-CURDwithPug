module.exports= (req, res, next, id) => {
  res.locals.user = users[id - 1] //global scope
  if (!res.locals.user) {
    const err = new Error('User Not Found')
    err.status = 404
    return next(err)
  }
  return next()
}
