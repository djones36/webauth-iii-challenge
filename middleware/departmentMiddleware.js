module.exports = departments => {
  return (req, res, next) => {
    if (departments === req.user.departments) {
      next();
    } else {
      res.status(403).json({ you: "wrong department" });
    }
  };
};
