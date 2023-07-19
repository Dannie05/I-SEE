import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function ResetPasswordToken() {
  const router = useRouter();
  const { token } = router.query;
  const { id } = router.query;
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  //   const handleFormSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(`/api/${token}`, { id, token, password });
  //       setMessage(response.data.message);
  //       setTimeout(() => {
  //         router.push('/login')
  //       }, 7000)
  //     } catch (error) {
  //       setMessage(error.response.data.message);
  //     }

  //   };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/token", {
        password,
        id,
        token,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      {id && token ? (
        <>
          <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleFormSubmit}>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <label>
                Repeat Password:
                <input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </>
      ) : (
        <>
          <p>The page you&apos;re trying to get to isn&apos;t available</p>
        </>
      )}
    </div>
  );
}

export default ResetPasswordToken;
