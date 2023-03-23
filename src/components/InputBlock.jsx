import { useState } from 'react';

function InputBlock() {
  const [nameValue, setNameValue] = useState('Mike11');

  function handleNameInput(event) {
    //
    console.log('change happened');
    const inputEl = event.target;
    // console.log('inputEl ===', inputEl);
    setNameValue(inputEl.value);
  }

  //
  function handleButtonClick() {
    //
    console.log('handleButtonClick');
  }

  return (
    <div>
      <h2>Test inputs</h2>

      <p>Jus ivedete: {nameValue}</p>

      <fieldset>
        <legend>Testing</legend>
        <input
          onChange={handleNameInput}
          value={nameValue}
          type='search'
          placeholder='Enter your name'
        />
        <button onClick={handleButtonClick}> Submit</button>
      </fieldset>
    </div>
  );
}

export default InputBlock;
