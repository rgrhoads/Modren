import React, { useState } from 'react'

import './App.css'

import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Comics from './pages/comics/Comics'
import Games from './pages/games/Games'
import Memes from './pages/memes/Memes'
import { Outlet } from 'react-router-dom'
// import Music from './pages/music/Music'
const Music = React.lazy(() => import('./pages/music/Music'));

function App() {

  return (
    <div className='w-screen h-screen bg-slate-400'>
        <Navbar/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default App
