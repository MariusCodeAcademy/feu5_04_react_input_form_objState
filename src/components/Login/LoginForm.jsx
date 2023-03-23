import { useState } from 'react';

function LoginForm() {
  const [emailVal, setEmailVal] = useState('');
  const [passValue, setPassValue] = useState('');
  const [showOutputs, setShowOutputs] = useState(false);

  function handleEmailInput(e) {
    setEmailVal(e.target.value);
  }
  function handlePassInput(e) {
    setPassValue(e.target.value);
  }

  //
  function handleSubmit(event) {
    event.preventDefault();
    console.log('react is in control');
  }

  return (
    <div>
      <h3>Login here</h3>
      <form onSubmit={handleSubmit}>
        <input value={emailVal} onChange={handleEmailInput} type='text' placeholder='email' />
        <input
          value={passValue}
          onChange={handlePassInput}
          type='password'
          placeholder='password'
        />
        <button type='submit'>Login</button>
      </form>
      <hr />
      <button onClick={() => setShowOutputs(true)}>Rodyti ivestis</button>
      {showOutputs && (
        <fieldset>
          <legend>Ivesta</legend>
          <p>Email: {emailVal}</p>
          <p>Password: {passValue}</p>
        </fieldset>
      )}
    </div>
  );
}
export default LoginForm;
