import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {GET_INFO_BY_ID} from '../../config/config'
import Form from '../Form/Form'
import {API} from '../../config/config'
import './Detail.css'

export default function Detail() {

    const params = useParams()


    const [detail, setDetail] = useState()

    const [allItems, setAllItems] = useState([])

    const getVideoById = async () => {
        const request = await fetch(GET_INFO_BY_ID + params.id)
        const response = await request.json()
        setDetail(response.items[0])
    }

    const findVideoByName = async () => {
        const storage = await localStorage.getItem('key')
        const request = await fetch(API + storage)
        const response = await request.json()
        setAllItems(response)
    }
    console.log(allItems)

    useEffect(() => {
        getVideoById()
        findVideoByName()
    }, [])

    return (
        <div className="container">


            <div className="row">


                <div className="col-9">
                    <div className='datails'>
                        <Form/>
                        <iframe
                            width="727" height="409" src={`https://www.youtube.com/embed/${params.id}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                        <h2>{detail?.snippet?.title}</h2>

                        <div className="detail__box">
                            <div className="detail__wrap-span">
                                <span>Views: {detail?.statistics?.viewCount}</span>
                                <span>{detail?.snippet?.publishedAt}</span>
                            </div>
                            <span>
                    <img className={'output__img'}
                         alt=""/>
                                {detail?.statistics?.likeCount}likes
                </span>
                        </div>
                    </div>
                </div>

                <div className="col-3">

                </div>

            </div>
        </div>
    )
}



