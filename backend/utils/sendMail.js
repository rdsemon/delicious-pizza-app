const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendMail = async function (userMail, restToken, expireDate) {
  try {
    await transporter.sendMail({
      from: 'Delicious pizza <deliciouspizza@gmail.com>',
      to: `${userMail}`,
      subject: 'Reset your password',
      text: `click the below link to reset your password. it will exprie in 10 munites \n http:127.0.0.1/api/v1/pizza/resetpassword/${restToken}. \n It will expire in ${expireDate}`,
    });
  } catch (err) {
    console.log('error while sending mail', err);
  }
};

module.exports = sendMail;
