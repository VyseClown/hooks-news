import React, { useState, useContext } from 'react';
import FirebaseContext from './../../firebase/context';

function ForgotPassword() {
  const { firebase } = useContext(FirebaseContext);
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail);
    } catch (err) {
      console.error('Error sending email', err);
    }
  }

  return (
    <div>
      <input
        type="email"
        className="input"
        placeholder="Provide your account email"
        onChange={event => setResetPasswordEmail(event.target.value)}
      />
      <div>
        <button className="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
