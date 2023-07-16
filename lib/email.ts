import nodemailer from 'nodemailer';
const { EMAIL, EMAIL_PASSWORD,YOUR_EMAIL_SERVICE_PROVIDER } = process.env;

export const transporter = nodemailer.createTransport({
  service: YOUR_EMAIL_SERVICE_PROVIDER,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },

});
// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: EMAIL,
//     pass: EMAIL_PASSWORD,
//   },
// });


export const mailOptions = {
  from: EMAIL,
  to: "juverasworld@gmail.com",
  subject: "Test mail",
  text: "Test mail",
  html: "<div style='margin: 40px 50px; padding: 15%; background-color: red'><h1>Test mail</h1><p>Test mail</p></div>"
}

// Function to send the password reset email
export async function sendPasswordResetEmail(email, resetToken) {
  const mailOptions = {
    from: 'YOUR_EMAIL',
    to: email,
    subject: 'Password Reset',
    html: `
      <p>Hello,</p>
      <p>You have requested to reset your password.</p>
      <p>Please click the following link to reset your password:</p>
      <a href="http://localhost:3000/resetpassword/${resetToken}">Reset Password</a>
    `,
  };

  await transporter.sendMail(mailOptions);
}
