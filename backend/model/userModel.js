const mongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcryptjs');

const crypto = require('crypto');

const main = require('../utils/mongooseConnection');

main();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    trim: true,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: [true, 'A user must need a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'plese input valid email'],
  },
  password: {
    type: String,
    required: [true, 'A user must have password'],
  },

  confirmPassword: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: `password dosen't match`,
    },

    required: [true, 'Please input your confirm password'],
  },

  role: {
    type: String,
    enum: {
      values: ['user', 'admin', 'employee'],
      message: `{value} is not valid`,
    },
    default: 'user',
  },

  passwordCreateAt: Date,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordExpire: Date,
  active: {
    type: Boolean,
    default: true,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;

  next();
});
// hash the password with bcrypt.js
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;

  next();
});

// check password is correct

userSchema.methods.checkPassword = async function (
  currentPassword,
  userPassword
) {
  return await bcrypt.compare(currentPassword, userPassword);
};

// check is the pwassword is changed

userSchema.methods.changePasswordAfter = function (JWTtimestamp) {
  if (this.passwordChangedAt) {
    const passChangeTime = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return passChangeTime > JWTtimestamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
