const AdminRoute = (req, res, next) => {
  if (req.session.role !== "admin") {
    return res.redirect("/error");
  }
  next();
};

export default AdminRoute;
