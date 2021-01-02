import React, { useEffect, useState } from 'react';

const Button = value => {
    const handleOnClick = value => {
        console.log(fetch(`/getSong?value=${value}`))
    }
    return <button onClick={() =>handleOnClick(value)}>Search song</button>
}

const TextInput = () => {
    const [userInput, setUserInput] = useState('');
    const handleOnChange = e => {
        setUserInput(e.target.value);
    }
    return(
    <>
        <h1>Search song</h1>
        <input onChange={(e) => handleOnChange(e)} />
        <Button value={userInput} />
    </>
    );
}

export default TextInput;