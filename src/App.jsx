import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header'
import { Fragment } from 'react'
import Homepage from './pages/Homepage'
import Valuta from './components/Valuta'
import { Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Fragment>
        <Homepage />
        <Routes>
          <Route path=":id" component={Valuta} />
        </Routes>
          
    </Fragment>   
  )
}

export default App
