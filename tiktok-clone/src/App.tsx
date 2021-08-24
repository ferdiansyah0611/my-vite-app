import React, { useState } from 'react'
import {
  BrowserRouter, Route
} from 'react-router-dom'
import './style/globals.css'

import Home from './routes/Home'
import Register from './routes/Register'
import Login from './routes/Login'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </BrowserRouter>
    </main>
  )
}

export default App
