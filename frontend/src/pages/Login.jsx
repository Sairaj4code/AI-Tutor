import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import manImage from "../assets/kids-studying.png";

import './pages.css'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Illustration Panel */}
        <div className="login-left">
          <div className="illustration-content">
            <div className="floating-icon">✨</div>
            <h2>Learn Smarter,<br />Not Harder.</h2>
            <p>Unlock your potential with AI-driven study plans and instant doubt solving.</p>
            <img 
              src={manImage} 
              alt="Student with laptop" 
              className="login-illustration" 
            />
          </div>
        </div>
        
        {/* Right Side - Sign In Form */}
        <div className="login-right">
          <div className="login-header">
            <h2>Sign In</h2>
            <p className="muted">Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <div className="password-input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required 
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="form-footer">
              <label className="checkbox-label">
                <input type="checkbox" /> Remember for 30 days
              </label>
              <span className="forgot-password">Forgot password?</span>
            </div>

            <button className="btn primary block" type="submit">Sign In</button>
            <button className="btn secondary block" type="button">Create an account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
