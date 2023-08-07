import React, { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayer'

function App() {
  return (
    <>
    <div>
    <h1>Puppy Bowl Rosters</h1>
    </div>
      <div id="container">
       <div id="main-section">
        <Routes>
        <Route path='/NewPlayer' element={<NewPlayerForm />} />
        <Route path="/AllPlayers" element={<AllPlayers/>} />
        <Route path="/" element={<SinglePlayer />} />
        </Routes>
       </div>
      </div>
      <div>
        <NewPlayerForm />
      </div>
    </>
  )
}

export default App
