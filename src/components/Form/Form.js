import React,{useState} from 'react';

const Form = (props) => {

    const [name,setName] = useState('')

    const search = (e) =>{
        setName(e.target.value)
    }

    const addVideo = (e) => {
        e.preventDefault()
        props.findVideoByName(name)
    }


    return (
        <form style={{marginBottom:'30px'}} onSubmit={addVideo}>
            <input onChange={search} type="text"/>
            <button>Search</button>
        </form>
    );
};

export default Form;