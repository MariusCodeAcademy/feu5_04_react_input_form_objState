import { useState } from 'react';

export default function PassBlock() {
  const [passValue, setPassValue] = useState('');
  const [showPass, setShowPass] = useState(false);

  function inputChangeHandler(event) {
    setPassValue(event.target.value);
  }

  function toggleShowPass() {
    setShowPass(true);
  }

  return (
    <div>
      <h3>Pass block</h3>
      <input
        value={passValue}
        onChange={inputChangeHandler}
        type='password'
        placeholder='nesakyk niekam'
      />
      <br />
      {!showPass && <button onClick={toggleShowPass}>parodyti slaptazodi</button>}
      {showPass && <p>Ivesta: {passValue}</p>}
    </div>
  );
}
