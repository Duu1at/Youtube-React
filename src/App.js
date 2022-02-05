import axios from 'axios';
import React, { useState } from 'react';
import Form from './components/Form/Form';
import Output from './components/Output/Output';
import { API, KEY } from './config';

const App = () => {

  const [info, setInfo] = useState([])

    console.log(info)

  const searchCity = (name) => {
    axios.get(API + name + KEY)
      .then(data => setInfo(data.data))
  }

  return (
    <div>
      <Form searchCity={searchCity} />
      <Output info={info} />

    </div>
  );
};

export default App;