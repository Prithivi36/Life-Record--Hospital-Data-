import { useState } from 'react'
import './App.css'
import DashBoard from './Pages/DashBoard/DashBoard'
import Navbar from './components/Navbar'
import RecordsMain from './Pages/Records/RecordsMain'

function App() {

  return (
    <>
      <Navbar />
      {/* <DashBoard /> */}
      <RecordsMain />
    </>
  )
}

export default App
