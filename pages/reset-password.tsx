import { useRouter } from 'next/router';
import ResetPassword from './resetPassword';
import ResetPasswordToken from './ResetPasswordToken';

function ResetPasswordPage() {
  const router = useRouter();
  const { token,id } = router.query;

  return token && id? <ResetPasswordToken /> : <ResetPassword />;
}

export default ResetPasswordPage;
