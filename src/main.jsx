import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.jsx'

import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Comics from './pages/comics/Comics'
import Games from './pages/games/Games'
import Memes from './pages/memes/Memes'
import Music from './pages/music/Music'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<App/>}>
          <Route exact path='/home' element={<Home/>}/> 
          <Route exact path='/comics' element={<Comics/>}/> 
          <Route exact path='/games' element={<Games/>}/> 
          <Route exact path='/memes' element={<Memes/>}/> 
          <Route exact path='/music' element={<Music/>}/> 
        </Route>
      </Routes>

      <Footer/>
    </Router>
  </React.StrictMode>,
)
