import React from 'react';
import './Output.css'
import {Link} from 'react-router-dom'

const Output = (props) => {

    console.log(props)

    return (
        <div className='row'>
            {props.data?
                props.data.map((el,index)=>{

                    return(
                        <div key={index} className="col-3">
                            <Link onClick={()=>localStorage.setItem('key',props.send)}
                                  to={'/detail/'+el.id.videoId}>
                            <div className="output__box">
                                <img src={el.snippet.thumbnails.medium.url} alt=""/>
                                <h3>{el.snippet.title.slice(0,30)+'.....'}</h3>
                                <p>{el.snippet.channelTitle}</p>
                            </div>
                            </Link>
                        </div>
                    )
                })
            :<h2>Processing</h2>}
        </div>
    );
};

export default Output;