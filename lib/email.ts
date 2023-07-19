// import nodemailer from 'nodemailer';
// import mailgun from 'mailgun-js';
import emailjs from 'emailjs-com';


emailjs.init('f0SZnLRZ8bD5AZoJZdgJd',null, { debug: true });



// const mg = mailgun({
//   apiKey: 'c30053db-b746d9e0',
//   domain: 'sandboxfda4549bff5a49138f5495a74a0b2491.mailgun.org',
// });

// const { EMAIL, EMAIL_PASSWORD,YOUR_EMAIL_SERVICE_PROVIDER } = process.env;

// export const transporter = nodemailer.createTransport({
//   // service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587, // or 587 for STARTTLS
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "danielnwogu05@gmail.com",
//     pass: "hzoqkpvshdulullo",
//   },

// });
// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: EMAIL,
//     pass: EMAIL_PASSWORD,
//   },
// });


// export const mailOptions = {
//   from: EMAIL,
//   to: "juverasworld@gmail.com",
//   subject: "Test mail",
//   text: "Test mail",
//   html: "<div style='margin: 40px 50px; padding: 15%; background-color: red'><h1>Test mail</h1><p>Test mail</p></div>"
// }

// Function to send the password reset email


// export async function sendPasswordResetEmail(email, resetToken) {
//   const data = {
//     from: 'danielnwogu05@gmail.com', // Replace with your sender email address
//     to: email,
//     subject: 'Password Reset',
//     html: `
//       <p>Hello,</p>
//       <p>You have requested to reset your password.</p>
//       <p>Please click the following link to reset your password:</p>
//       <a href="http://localhost:3000/resetpassword/${resetToken}">Reset Password</a>
//     `,
//   };

//   try {
//     await mg.messages().send(data);
//     console.log('Email sent');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Failed to send email');
//   }
// }

export async function sendPasswordResetEmail(email, resetToken) {
  const templateParams = {
    to_email: email,
    reset_link: `http://localhost:3000/reset-password/${resetToken}`,
    name:email,
    message:"reset password"
  };

  try {
    await emailjs.send('service_3o2vzqw', 'template_3rkomfi', templateParams);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}


