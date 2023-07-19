import { dbCon } from '../../models';

export default async function resetPasswordTokenHandler(req, res) {
  // const { token } = req.query;
  const { User } = await dbCon();

  if (req.method === 'POST') {
    const { password,id,token } = req.body;
let user;
    try {
       user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (user.resetToken !== token) {
        return res.status(400).json({ message: 'Invalid or expired reset token' });
      }

      user.password = password;
      user.resetToken = undefined;
      user.resetTokenExpiration = undefined;
      await user.save();

      return res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
