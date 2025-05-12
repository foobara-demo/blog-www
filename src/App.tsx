import React from 'react'
import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import RegisterForm from './domains/forms/Foobara/Auth/RegisterForm'
import LoginForm from './domains/forms/Foobara/Auth/LoginForm'
import GetCurrentUserForm from './domains/forms/BlogWww/GetCurrentUserForm'
import RefreshLoginForm from './domains/forms/Foobara/Auth/RefreshLoginForm'
import ComputeExponentForm from './domains/forms/ComputeExponentForm'
import LogoutForm from './domains/forms/Foobara/Auth/LogoutForm'

import Home from './Home'
import Header from './Header'

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/get-current-user" element={<GetCurrentUserForm />} />
          <Route path="/refresh-login" element={<RefreshLoginForm />} />
          <Route path="/logout" element={<LogoutForm/>}/>
          <Route path="/compute-exponent" element={<ComputeExponentForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
