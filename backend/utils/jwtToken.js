const jwt = require('jsonwebtoken');

module.exports = (user, res, statusCode) => {
  const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_CODE, {
    expiresIn: process.env.JWT_EXPIRE_IN_HOUR,
  });
  const cookieOptions = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: 'Lax',
  };

  // In production, send only over HTTPS
  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }

  res.cookie('jwt', jwtToken, cookieOptions);

  user.password = undefined;

  res
    .status(statusCode)
    .json({ status: 'success', token: jwtToken, data: { user } });
};
