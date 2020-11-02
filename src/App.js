import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './Components/TopNav'
import SideNav from './Components/SideNav'
import Transaction from './Components/Transaction'

const App = () => {
  return (
    <div>
      <TopNav/>
      <SideNav/>
      <Transaction/>
    </div>
  )
}

export default App
