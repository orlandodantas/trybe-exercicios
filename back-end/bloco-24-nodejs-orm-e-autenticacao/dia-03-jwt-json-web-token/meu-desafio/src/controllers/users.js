const getMe = (req, res) => {
  const { user, admin } = req.dataUser;

  res.status(200).json({ 
    username: user,
    admin,
  });
};

module.exports = {
  getMe,
};