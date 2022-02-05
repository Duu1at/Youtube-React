import React, {useState, useEffect} from 'react';
import {API} from '../../config/config'
import Form from "../Form/Form";
import Output from "../Output/Output";

const Home = () => {

    const [data, setData] = useState([])

    const [send, setSend] = useState('')

    const findVideoByName = async (item) => {
        const request = await fetch(API + item)
        const response = await request.json()
        setData(response.items)
        setSend(item)
    }
    console.log(send)

    useEffect(() => {
        findVideoByName('popular music')
    }, [])

    console.log(data)

    return (
        <section className={'home'}>
            <div className="container">
                <h1>YOUTUBE</h1>
                <Form
                    findVideoByName={findVideoByName}
                />
                <Output
                    send={send}
                    data={data}
                />
            </div>
        </section>
    );
};

export default Home;