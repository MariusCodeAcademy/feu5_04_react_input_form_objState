import { useState } from 'react';

export default function PassBlock() {
  const [passValue, setPassValue] = useState('');
  const [showPass, setShowPass] = useState(false);

  function inputChangeHandler(event) {
    setPassValue(event.target.value);
  }

  function toggleShowPass() {
    setShowPass((prevShowPass) => {
      // logika
      return !prevShowPass;
    });
  }

  return (
    <div>
      <h3>Pass block</h3>
      <input
        value={passValue}
        onChange={inputChangeHandler}
        type={!showPass ? 'password' : 'text'}
        placeholder='nesakyk niekam'
      />
      <br />
      <button onClick={toggleShowPass}>pa{!showPass ? 'rodyti' : 'slepti'} slaptazodi</button>
      {showPass && <p>Ivesta: {passValue}</p>}
    </div>
  );
}
