import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Comics from './pages/comics/Comics'
import Games from './pages/games/Games'
import Memes from './pages/memes/Memes'
// import Music from './pages/music/Music'
const Music = React.lazy(() => import('./pages/music/Music'));

function App() {

  return (
    <div className='w-screen h-screen bg-slate-400'>
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route exact path='/comics' element={<Comics/>}/> 
          <Route exact path='/games' element={<Games/>}/> 
          <Route exact path='/memes' element={<Memes/>}/> 
          <Route exact path='/music' element={<Music/>}/> 
        </Routes>

        <Footer/>
      </Router>
    </div>
  )
}

export default App
