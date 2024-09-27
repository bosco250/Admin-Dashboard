import React, { useContext, useEffect } from 'react'
import Logo from '../../../assets/logo.png'
import { MyContext } from '../../../App'
function Login() {
  const context=useContext(MyContext)
  useEffect(()=>{
    context.setIsHideSidebarAndHeader(true)
  },[])
  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="logo text-center">
          <img src={Logo} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Login
