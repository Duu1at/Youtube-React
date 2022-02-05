import React, { useState, useEffect } from 'react';
import './Output.css'
import clouds from '../images/cloud.gif'
import rain from '../images/rain.gif'
import sunny from '../images/sunny.gif'

const Output = (props) => {
    let url = "https://www.google.com/maps/d/embed?mid=1onWkyiHWR3hl2iPTdCSvm2Ti5Ogj3P8q&ll="
    // const API = 'http://api.giphy.com/v1/gifs/search?q='
    // const KEY = '&api_key=3TQi2zymLz7a8nLNK385kNn3VT7KklcP'
    //
    //
    const [temp,setTemp] = useState(0)

    const [gif,setGif] = useState()



    useEffect(() => {
        if (props.info?.weather) (
            setGif(props.info.weather[0].main)
        )
        if(props.info?.main){
            let a =  (props.info.main?.temp - 273.15).toFixed(2)
            setTemp(parseInt(a))
        }
    }, [props])


    // const searchGiphiByName = async (name = 'putin') => {
    //     const request = await fetch(API + name + KEY)
    //     const response = await request.json()
    //     setGif(response.data[0]?.embed_url)
    // }


    return (
        <div>
            <div className={temp>5?'yellow':temp>0?'blue':temp<0?'white':'gray'}>

                { gif==='Clouds'?
                    <img src={clouds} alt=""/>
                :gif==='Clear'?
                        <img src={sunny} alt=""/>
                        :gif==='Rain'?
                            <img src={rain} alt=""/>
                            : <h2>У нас нет такой гифки</h2>
                }


            </div>
            {props.info.main?  <h2>{props.info?.name}</h2> : <h2>City</h2>}

            {props.info.main?<h3>{(props.info.main?.temp - 273.15).toFixed(2)}</h3> : <h3>tempreture</h3>}

            <iframe src={url + props.info.coord?.lat + ',' + props.info.coord?.lon} width="640" height="480"></iframe>
            <br />



        </div >
    );
};

export default Output;