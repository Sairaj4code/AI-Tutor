import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">AI Study Companion</div>
        <nav className="links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/chat">Chat</Link>
          <button className="link-btn" onClick={() => navigate('/')}>Logout</button>
        </nav>
      </div>
    </header>
  )
}
