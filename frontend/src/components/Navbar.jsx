import { useLocation, useNavigate } from 'react-router-dom'
import '../pages/pages.css'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const isDashboard = ['/dashboard', '/chat', '/analytics'].includes(path)
  const isLanding = path === '/landing'

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar-content">
        <div className="nav-brand">
          <span className="nav-icon">✨</span> AI Tutor
        </div>

        {isDashboard && (
          <>
            <div className="nav-menu">
              <span className={`nav-link ${path === '/dashboard' ? 'active' : ''}`} onClick={() => navigate('/dashboard')} style={{cursor: 'pointer'}}>Dashboard</span>
              <span className={`nav-link ${path === '/chat' ? 'active' : ''}`} onClick={() => navigate('/chat')} style={{cursor: 'pointer'}}>AI Chat</span>
              <span className="nav-link" style={{cursor: 'pointer'}}>Analytics</span>
              <span className="nav-link" style={{cursor: 'pointer'}}>Resources</span>
            </div>
            <div className="nav-profile">
              <button className="btn-icon">🔔</button>
              <div className="avatar">A</div>
              <button className="btn secondary" onClick={() => navigate('/')} style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Logout</button>
            </div>
          </>
        )}

        {isLanding && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn secondary" onClick={() => navigate('/')}>Login</button>
          </div>
        )}
      </div>
    </nav>
  )
}