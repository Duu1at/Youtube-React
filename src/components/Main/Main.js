import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Detail from '../Detail/Detail'
import './Main.css'

export default function Main() {
    return (
        <div>
            <Routes>
                <Route exact path = '/' element={<Home/>}/>
                <Route exact path = '/detail/:id' element={<Detail/>}/>
            </Routes>
        </div>
    )
}
