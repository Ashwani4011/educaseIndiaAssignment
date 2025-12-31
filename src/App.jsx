import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <><BrowserRouter>     
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="h-180 w-100  m-10 border-2 border-gray-200 bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
