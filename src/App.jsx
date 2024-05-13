/* eslint-disable react/prop-types */

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const {user} = useContext(AuthContext);
  const ProtectedRoute = ({children})=>{
    if(!user){
      return <Navigate to='/login' />
    }
    else{
      return children
    }
  }

  return (
    <div className='app-main' >
      <Routes>
        <Route path='/' >
          <Route index element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path='login' element={
            // <ProtectedRoute>
              <Login />
            // </ProtectedRoute>
          } />
        </Route>
      </Routes>
      <Login />
      <Dashboard />
    </div>
  )
}

export default App
