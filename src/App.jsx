import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Login from './pages/Dashboard/Login/Login';


const MyContext=createContext();
function App() {
  const [isToggleSideBar,setIsToggleSideBar]=useState(false)
  const [isLogin,setIsLogin]=useState(true)
  const [isHideSidebarAndHeader,setIsHideSidebarAndHeader]=useState(false)
  const Values={isToggleSideBar,setIsToggleSideBar,isLogin,setIsLogin,isHideSidebarAndHeader,setIsHideSidebarAndHeader}
 
  
  
  return (
    <div>
      <BrowserRouter> 
      <MyContext.Provider value={Values}>
      {isHideSidebarAndHeader !==true &&<Header/>}
      <div className="main d-flex my-d">
       {isHideSidebarAndHeader !==true  &&  <div className={`sidebarWrapper ${isToggleSideBar?"taggle":""}`}>
          <Sidebar/>
        </div>}
        <div className={ `content ${isToggleSideBar?"taggle":""} `}>
        <Routes>
          <Route path="/" exact={true} element={<Dashboard/>} />
          <Route path="/dashboard" exact={true} element={<Dashboard/>} />
          <Route path="/login" exact={true} element={<Login/>} />
        </Routes>
        </div>
      </div>
      </MyContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
export {MyContext}