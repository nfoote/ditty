import React, { useEffect, useState } from 'react';

const Button = value => {
    const handleOnClick = value => {
        console.log(fetch(`/getSong?value=${value}`))
    }
    return <button onClick={() =>handleOnClick(value)}>Search song</button>
}

const Input = () => {
    const [userInput, setUserInput] = useState('');
    const handleOnChange = e => {
        setUserInput(e.target.value);
    }
    return(
    <>
        <input onChange={(e) => handleOnChange(e)} />
        <Button value={userInput} />
    </>
    );
}

export default Input;