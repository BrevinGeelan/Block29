import React, { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayer'
import SinglePlayer from './components/SinglePlayer'

function App() {
  return (
    <>
    <div>
    <h1>Puppy Bowl Rosters</h1>
    </div>
      <div id="container">
       <div id="main-section">
        <Routes>
        <Route path= '/NewPlayer' element={<NewPlayerForm />} />
        <Route path= "/AllPlayers" element={<AllPlayers/>} />
        <Route path= "/SinglePlayer" element={<SinglePlayer />} />
        </Routes>
       </div>
      </div>
      <div>
        <NewPlayerForm />
        <AllPlayers />
      
      </div>
    </>
  )
}

export default App
