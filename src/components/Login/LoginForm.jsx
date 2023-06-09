import { useState } from 'react';

const prisijungimas = {
  email: 'james@bond.com',
  password: '123456',
};

function LoginForm() {
  const [emailVal, setEmailVal] = useState('james@bond.com');
  const [passValue, setPassValue] = useState('');
  const [showOutputs, setShowOutputs] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isThereAnError, setIsThereAnError] = useState(false);

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

    // patikrinti ar atitnka email ir password
    const emailAtitinka = prisijungimas.email === emailVal;
    const passAtitinka = prisijungimas.password === passValue;
    if (emailAtitinka && passAtitinka) {
      setFormSent(true);
    } else {
      // neatitinka email or pass
      setIsThereAnError(true);
    }
    // jei atitinka keisim formSuccess i true
  }

  return (
    <div>
      {formSent && <h3>Isiusta sekmingai</h3>}
      {!formSent && <h3>Login here</h3>}
      {!formSent && (
        <form onSubmit={handleSubmit}>
          <input value={emailVal} onChange={handleEmailInput} type='text' placeholder='email' />
          <input
            value={passValue}
            onChange={handlePassInput}
            type='password'
            placeholder='password'
          />
          {isThereAnError && <p className='error'>neatitinka email or pass</p>}
          <button type='submit'>Login</button>
        </form>
      )}
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
