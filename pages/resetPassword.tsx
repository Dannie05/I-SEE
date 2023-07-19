import { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/reset', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className='flex flex-col item-center justify-center pl-[-16px] h-screen dark:bg-black bg-no-repeat bg-center bg-cover overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000'>
      <h1>Reset Password</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Get Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;

























// import { useState } from 'react';

// export default function ResetPassword() {
//   const [email, setEmail] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/api/resetpassword', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       setSuccessMessage(data.message);
//     } else {
//       setErrorMessage(data.message);
//     }
//     console.log(data);
    
//   };

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       {successMessage && <p>{successMessage}</p>}
//       {errorMessage && <p>{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <button type="submit">Send Reset Email</button>
//       </form>
//     </div>
//   );
// }
