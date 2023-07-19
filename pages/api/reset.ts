import axios from 'axios';
import { CourierClient } from '@trycourier/courier';
// import User from '../models/user';
import crypto from 'crypto';
import { Text, useToast } from "@chakra-ui/react";
import { dbCon } from '../../models';


// Create a new instance of the Courier client
const courier = CourierClient({
  authorizationToken: process.env.COURIER_AUTH_TOKEN,
});

const toast = useToast();

// POST /api/resetPassword
export default async function resetPasswordHandler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const { User } = await dbCon();


    try {
      // Check if the email exists in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Email not found',res });
      }

      // Generate a reset token and set its expiration time
      const resetToken = generateResetToken();
      const id=user._id;
      const date = new Date();
      const resetTokenExpiration:Date = date.setHours(date.getHours() + 2);

      // Save the reset token and its expiration time to the user in the database
      user.resetToken = resetToken;
      user.resetTokenExpiration = resetTokenExpiration;
      await user.save();

      // Send the password reset email using Courier
      await sendPasswordResetEmail(email, resetToken,id);

      return res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

// Generate a random reset token
function generateResetToken() {
    const resetToken = crypto.randomBytes(32).toString('hex');
    return resetToken;
  }

// Send the password reset email using Courier
async function sendPasswordResetEmail(email, resetToken,id) {
  try {
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}&id=${id}`;

    await courier.send({
      eventId: process.env.COURIER_NOTIFICATION_ID,
      recipientId: email,
      profile: {
        email,
      },
      data: {
        resetLink,
      },
    });

    toast({
      title: " success",
      description: "Reset email sent successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
      size: { width: "300", height: "200" },
      variant: "top-accent",
    });

  } catch (error) {
    console.error('Error sending email:', error);
  }
}
