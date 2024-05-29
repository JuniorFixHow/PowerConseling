/* eslint-disable react/prop-types */

import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'

// import { useContext } from 'react'
// import { AuthContext } from './context/AuthContext'

function App() {
  // const ProtectedRoute = ({children})=>{
  //   if(!user){
  //     return <Navigate to='/login' />
  //   }
  //   else{
  //     return children
  //   }
  // }

  return (
    <div className='app-main' >
      <Routes>
        <Route path='/' >
          <Route index element={
              <Dashboard />
          } />
          <Route path='login' element={
              <Login />
          } />
        </Route>
      </Routes>

    </div>
  )
}

export default App
