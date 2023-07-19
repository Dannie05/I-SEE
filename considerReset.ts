import axios from 'axios';
import crypto from 'crypto';
// import User from '../../models/User';
import { dbCon } from '../../models';

// POST /api/resetPassword
export default async function resetPasswordHandler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const { User } = await dbCon();


    try {
      // Check if the email exists in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Email not found' });
      }

      // Generate a reset token and set its expiration time
      const resetToken = generateResetToken();
      const resetTokenExpiration = new Date();
      resetTokenExpiration.setHours(resetTokenExpiration.getHours() + 1);

      // Save the reset token and its expiration time to the user in the database
      user.resetToken = resetToken;
      user.resetTokenExpiration = resetTokenExpiration;
      await user.save();

      // Send the password reset email using Courier
      await sendPasswordResetEmail(email, resetToken);

      return res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: ' server error', error });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

// Generate a random reset token using crypto
function generateResetToken() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  return resetToken;
}

// Send the password reset email using Courier
async function sendPasswordResetEmail(email, resetToken) {
  const courierAuthToken = process.env.COURIER_AUTH_TOKEN;
  const courierNotificationId = process.env.COURIER_NOTIFICATION_ID;

  try {
    const response = await axios.post(
      `https://api.courier.com/send`,
      {
        event: 'password_reset',
        recipient: email,
        profile: {
          email,
        },
        data: {
          resetToken,
        },
        override: {
          courier: {
            auth_token: courierAuthToken,
            notification: {
              id: courierNotificationId,
            },
          },
        },
      }
    );

    console.log('Email sent:', response.data.message_id);
  } catch (error) {
    console.error('Error sending email:', error.response.data);
  }
}
