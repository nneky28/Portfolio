import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
// import Page2 from '../Pages/Page2'


export default function IndexRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/page' element={<Page2/>}/> */}
        
        </Routes>
    </BrowserRouter>
  )
}
