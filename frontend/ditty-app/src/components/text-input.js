import React, { useState } from 'react';

const Button = (value) => (
  <button
    type="button"
    onClick={() => {
      console.log(fetch(`/getSong?value=${value}`));
    }}
  >
    Search song
  </button>
);

const TextInput = () => {
  const [userInput, setUserInput] = useState('');
  const handleOnChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <>
      <h1>Search song</h1>
      <input onChange={(e) => handleOnChange(e)} />
      <Button value={userInput} />
    </>
  );
};

export default TextInput;
