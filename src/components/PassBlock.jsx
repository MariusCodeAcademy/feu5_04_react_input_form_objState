import { useState } from 'react';

export default function PassBlock() {
  const [passValue, setPassValue] = useState('');

  function inputChangeHandler(event) {
    setPassValue(event.target.value);
  }

  return (
    <div>
      <h3>pass block</h3>
      <input
        value={passValue}
        onChange={inputChangeHandler}
        type='password'
        placeholder='nesakyk niekam'
      />
      <p>Ivesta: {passValue}</p>
    </div>
  );
}
