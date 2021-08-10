/* eslint-disable prettier/prettier */
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create transporter
  const transporter = nodemailer.createTransport({
    // service: 'Gmail', we are not using gmail in this proejct.
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail "less secure app" option
  });
  //console.log('transporter:', transporter);

  // 2) Define the email options
  const mailOptions = {
    from: '"Rajeev Sah" <634232571e-b4634b@inbox.mailtrap.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //console.log('mailOption:', mailOptions);
  // html

  // 3) Actually send the email

  await transporter.sendMail(
    mailOptions
    //   (error, info) => {
    //   if (error) {
    //     return console.log(error);
    //   }
    //   console.log('Message sent: %s', info.messageId);
    // }
  );
};

module.exports = sendEmail;
