function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/home");
  }
  next();
}

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    
    return next();
//     return res.redirect("/home");
  }
  res.redirect("/login");
}

module.exports = {
  checkNotAuthenticated,
  checkAuthenticated,
};