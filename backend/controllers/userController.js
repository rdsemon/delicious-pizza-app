const catchingAsync = require('../utils/catchingAsync');

exports.createUser = catchingAsync(async (req, res, next) => {
  console.log(req.body);
});
