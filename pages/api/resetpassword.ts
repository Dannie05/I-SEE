import { dbCon } from "../../models";
import { NextApiRequest, NextApiResponse } from "next";
// import { sendPasswordResetEmail } from "../../lib/email";
import crypto from "crypto";

export default async function resetpassword(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  function generateResetToken() {
    const token = crypto.randomBytes(32).toString("hex");
    return token;
  }

  const { email } = req.body;
  const { User } = await dbCon();
  let user;
  try {

    // Check if the user with the given email exists
    // const user = await db.collection('users').findOne({ email });
    user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Generate a password reset token and save it in the user's document
    const resetToken = generateResetToken();
    await User.updateOne(
      { _id: user._id },
      {
        $set: {
          resetToken,
        },
      }
    );

    // Send the password reset email to the user
    // await sendPasswordResetEmail(email, resetToken);

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error",error });
  }
}
