import { useNavigate } from 'react-router-dom'
import './pages.css'

export default function Login() {
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    navigate('/landing')
  }

  return (
    <div className="center-page">
      <div className="card-card login-card">
        <h1>AI Study Companion</h1>
        <p className="muted">Personalized Exam Preparation</p>
        <form onSubmit={handleLogin} className="form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" required />
          </label>
          <div className="actions">
            <button className="btn primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
