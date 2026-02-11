import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
