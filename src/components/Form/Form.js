import React, { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.searchCity(name)
        }}>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>search</button>
        </form>
    );
};

export default Form;