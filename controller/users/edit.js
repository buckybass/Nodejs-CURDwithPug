module.exports=(req, res) => {
  res.render('users-create',{id:req.params.id,user:res.locals.user})
}
