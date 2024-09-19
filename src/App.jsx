import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div>
      <BrowserRouter> 
      <Header/>
      <div className="main d-flex my-d">
        <div className="sidebarWrapper ">
          <Sidebar/>
        </div>
        <div className="content">
        <Routes>
          <Route path="/" exact={true} element={<Dashboard/>} />
          <Route path="/dashboard" exact={true} element={<Dashboard/>} />
        </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
