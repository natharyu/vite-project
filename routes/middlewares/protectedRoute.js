const AdminRoute = (req, res, next) => {
  if (req.session.role !== "admin") {
    console.log("Unauthorized");
    return res.redirect("/");
  }
  next();
};

export default AdminRoute;
